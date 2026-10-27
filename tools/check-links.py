#!/usr/bin/env python3
"""Check that every link on the site leads somewhere: pages, anchors, images, stylesheets and scripts.

    python3 tools/check-links.py [site folder]

Reads what GitHub Pages publishes: the plain .html pages, and the Markdown pages with front matter (terms.md and
the manual) inside their layouts. Heading ids on Markdown pages are made the way GitHub Pages' kramdown makes them
(GFM input, auto_ids). Links to other sites are not fetched; https://mediaflowswift.com/... links (canonicals,
og:url, og:image) are checked like any other.

Also checks that each manual page has exactly one heading of level 1, that every sitemap.xml entry exists and is
not marked noindex, that every manual page is in the sitemap, and that every old-anchor redirect on /manual/ leads
to a heading. Exits 1 if anything is wrong.
"""
import json
import os
import re
import sys
import unicodedata
from html.parser import HTMLParser
from urllib.parse import unquote, urljoin, urlsplit

SITE = "https://mediaflowswift.com"
ROOT = os.path.realpath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), ".."))
problems = []


def kramdown_ids(markdown):
    seen, ids = {}, []
    for line in markdown.split("\n"):
        m = re.match(r"^(#{1,6})[ \t]+(.*?)[ \t]*$", line)
        if not m:
            continue
        raw = re.sub(r"[ \t]+#+$", "", m.group(2))
        base = "".join(c for c in raw.lower()
                       if unicodedata.category(c)[0] in "LM" or unicodedata.category(c) in ("Nd", "Pc") or c in "- \t")
        base = base.replace(" ", "-").replace("\t", "-")
        n = seen.get(base, 0)
        seen[base] = n + 1
        ids.append(base if n == 0 else f"{base}-{n}")
    return ids


class Scan(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.ids, self.links, self.noindex = set(), [], False

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if a.get("id"):
            self.ids.add(a["id"])
        if tag == "a" and a.get("name"):
            self.ids.add(a["name"])
        for key in ("href", "src"):
            if a.get(key):
                self.links.append(a[key])
        if a.get("srcset"):
            self.links += [part.strip().split(" ")[0] for part in a["srcset"].split(",")]
        if tag == "meta" and a.get("property") in ("og:url", "og:image"):
            self.links.append(a.get("content", ""))
        if tag == "meta" and a.get("name") == "robots" and "noindex" in a.get("content", ""):
            self.noindex = True

    handle_startendtag = handle_starttag


def scan(html):
    s = Scan()
    s.feed(html)
    s.close()
    return s


def front_matter(text):
    if not text.startswith("---\n"):
        return None, text
    end = text.find("\n---\n", 4)
    fields = {}
    for line in text[4:end].split("\n"):
        k, _, v = line.partition(":")
        v = v.strip()
        try:
            fields[k.strip()] = json.loads(v) if v.startswith('"') else v
        except ValueError:  # a YAML list item or a multi-line value (the blog posts' takeaways, faq, sources)
            fields[k.strip()] = v
    return fields, text[end + 5:]


# --- What is published ------------------------------------------------------------------------------------------
pages = {}  # url path -> {"file", "ids", "links", "noindex"}
excluded = {"README.md", "tools", "images/LICENSES.md"}
for dirpath, dirnames, filenames in os.walk(ROOT):
    rel_dir = os.path.relpath(dirpath, ROOT)
    dirnames[:] = [d for d in dirnames if not d.startswith((".", "_")) and os.path.normpath(os.path.join(rel_dir, d)) not in excluded]
    for name in filenames:
        rel = os.path.normpath(os.path.join(rel_dir, name))
        if name.startswith((".", "_")) or rel in excluded:
            continue
        text = None
        if name.endswith((".html", ".md")):
            text = open(os.path.join(ROOT, rel), encoding="utf-8").read()
        if name.endswith(".html") and not text.startswith("---\n"):
            s = scan(text)
            url = "/" + rel
            pages[url] = {"file": rel, "ids": s.ids, "links": s.links, "noindex": s.noindex}
            if name == "index.html":
                pages[url[: -len("index.html")]] = pages[url]
        elif name.endswith(".md") and text.startswith("---\n"):
            fields, body = front_matter(text)
            url = fields.get("permalink") or ("/" + rel[: -len("index.md")] if name == "index.md" else "/" + rel[:-3] + ".html")
            layout = open(os.path.join(ROOT, "_layouts", fields["layout"] + ".html"), encoding="utf-8").read()
            layout = layout.replace("{{ site.url }}{{ page.url }}", SITE + url)
            # Liquid: keep a simple {% if page.x %}...{% endif %} only when the page sets x (the blog's noindex),
            # and leave out links built from page variables (the post layout's category links); those are
            # checked by tools/build-blog.py, which knows every category.
            layout = re.sub(r"{% if page\.(\w+) %}(.*?){% endif %}",
                            lambda m: m.group(2) if fields.get(m.group(1)) not in (None, "", "false") else "", layout)
            layout = re.sub(r'(href|src)="[^"]*{{[^"]*"', "", layout)
            layout_scan = scan(re.sub(r"{{.*?}}|{%.*?%}", "", layout))
            body_scan = scan(body)  # raw HTML inside the Markdown
            md_links = [m.group(1) for m in re.finditer(r"\]\(([^)\s]+)\)", body)]
            h1 = [line for line in body.split("\n") if re.match(r"^#[ \t]", line)]
            pages[url] = {"file": rel, "ids": set(kramdown_ids(body)) | body_scan.ids | layout_scan.ids,
                          "links": layout_scan.links + body_scan.links + md_links, "noindex": layout_scan.noindex,
                          "h1": len(h1), "body": body}

# --- Links ------------------------------------------------------------------------------------------------------
checked = external = 0
for url, page in sorted(pages.items()):
    if url.endswith("/index.html"):
        continue  # the same page as its folder
    for link in page["links"]:
        if re.match(r"^(mailto|tel|javascript|data):", link):
            continue
        absolute = urljoin(SITE + url, link)
        parts = urlsplit(absolute)
        if f"{parts.scheme}://{parts.netloc}" != SITE:
            external += 1
            continue
        checked += 1
        path, fragment = unquote(parts.path) or "/", unquote(parts.fragment)
        target = pages.get(path)
        if target is None:
            if not os.path.isfile(os.path.join(ROOT, path.lstrip("/"))):
                problems.append(f"{page['file']}: {link} leads to no page or file")
            continue
        if fragment and fragment not in target["ids"]:
            problems.append(f"{page['file']}: {link} leads to no heading or id on {path}")

# --- The manual -------------------------------------------------------------------------------------------------
# A noindex page under /manual/ is a forward from a renamed chapter, not a chapter: no heading, not in the sitemap.
manual = {u: p for u, p in pages.items() if u.startswith("/manual/") and not p["noindex"]}
for url, page in sorted(manual.items()):
    if page.get("h1") != 1:
        problems.append(f"{page['file']}: {page.get('h1')} headings of level 1")
contents = pages.get("/manual/", {}).get("body", "")
chapters = re.search(r"var chapters = (\[.*?\]);", contents)
moved = re.search(r"var moved = (\{.*?\});\n", contents)
redirects = 0
if len(manual) > 1:
    if not (chapters and moved):
        problems.append("manual/index.md: the old-anchor redirect is missing")
    else:
        chapters, moved = json.loads(chapters.group(1)), json.loads(moved.group(1))
        for old, to in moved.items():
            chapter, anchor = (to, old) if isinstance(to, int) else to
            target = pages.get(f"/manual/{chapters[chapter]}/")
            redirects += 1
            if target is None or (anchor and anchor not in target["ids"]):
                problems.append(f"manual/index.md: old anchor #{old} redirects to a missing chapter or heading")
        own = pages["/manual/"]["ids"] & set(moved)
        if own:
            problems.append(f"manual/index.md: redirects ids that are on the contents page itself: {sorted(own)}")

# --- Sitemap ----------------------------------------------------------------------------------------------------
locs = re.findall(r"<loc>([^<]+)</loc>", open(os.path.join(ROOT, "sitemap.xml"), encoding="utf-8").read())
for loc in locs:
    path = urlsplit(loc).path
    if not loc.startswith(SITE + "/") or path not in pages:
        problems.append(f"sitemap.xml: {loc} is not a page")
    elif pages[path]["noindex"]:
        problems.append(f"sitemap.xml: {loc} is marked noindex")
for url in manual:
    if SITE + url not in locs:
        problems.append(f"sitemap.xml: {url} is missing")

print(f"{len({p['file'] for p in pages.values()})} pages, {checked} links on this site checked "
      f"({external} to other sites not fetched), {len(manual)} manual pages, {redirects} old manual anchors, "
      f"{len(locs)} sitemap entries")
if problems:
    print("\n".join(problems), file=sys.stderr)
    sys.exit(1)
print("All links lead somewhere.")
