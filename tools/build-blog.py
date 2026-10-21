#!/usr/bin/env python3
"""Build the blog's listing pages, RSS feed and sitemap block from the posts.

    python3 tools/build-blog.py [site folder]

A post is blog/<YYYY>/<MM>/<slug>/index.md with `layout: post` (written by hand or by the review step; see
README). This tool never edits a post. It checks every post first, then writes:

  blog/index.md                    /blog/                     every post, newest first, categories, archive
  blog/category/<cat>/index.md     /blog/category/<cat>/      one page per category that has posts
  blog/<YYYY>/index.md             /blog/<YYYY>/              year archive (noindex, follow)
  blog/<YYYY>/<MM>/index.md        /blog/<YYYY>/<MM>/         month archive (noindex, follow)
  blog/feed.xml                    /blog/feed.xml             RSS 2.0
  sitemap.xml                      the block between the blog's two marker comments

Categories (name, description) come from _data/blog.json, which the post layout reads too. Only files this tool
wrote (front matter "generated: tools/build-blog.py") are ever removed. Nothing is written unless every post
passes its checks. Then tools/check-links.py runs.
"""
import datetime
import email.utils
import html
import json
import math
import os
import re
import subprocess
import sys

try:
    import yaml
except ImportError:  # PyYAML is needed to read the posts' lists (takeaways, faq, sources)
    sys.exit("build-blog: needs PyYAML (pip3 install pyyaml)")

SITE = "https://mediaflowswift.com"
MARK = "generated: tools/build-blog.py"
SITEMAP_BEGIN = "<!-- blog: written by tools/build-blog.py, do not edit by hand -->"
SITEMAP_END = "<!-- end of blog -->"
WPM = 230
ROOT = os.path.realpath(sys.argv[1] if len(sys.argv) > 1 else os.path.join(os.path.dirname(__file__), ".."))
REQUIRED = ["layout", "title", "seo_title", "description", "published", "category", "tags", "keywords",
            "permalink"]
problems = []


def fail(message):
    problems.append(message)


def esc(s):
    return html.escape(str(s), quote=True)


def q(s):
    return json.dumps(str(s), ensure_ascii=False)


def read_post(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---\n"):
        return None
    end = text.find("\n---\n", 4)
    meta = yaml.safe_load(text[4:end]) or {}
    meta["_body"] = text[end + 5:]
    meta["_file"] = os.path.relpath(path, ROOT)
    return meta


def minutes(body):
    plain = re.sub(r"\]\([^)]*\)", "]", body)
    plain = re.sub(r"[|#*>`\[\]]|^-{3,}$", " ", plain, flags=re.M)
    return max(1, math.ceil(len(plain.split()) / WPM))


def nice_date(d):
    return d.strftime("%B %-d, %Y")


def as_date(v, field, f):
    if isinstance(v, datetime.date):
        return v
    try:
        return datetime.date.fromisoformat(str(v))
    except ValueError:
        fail(f"{f}: {field} is not a YYYY-MM-DD date: {v!r}")
        return datetime.date(1970, 1, 1)


# --- Read and check every post ------------------------------------------------------------------------------
data = json.load(open(os.path.join(ROOT, "_data", "blog.json"), encoding="utf-8"))
cats = data["categories"]
posts = []
blog_dir = os.path.join(ROOT, "blog")
for dirpath, dirnames, filenames in os.walk(blog_dir):
    rel = os.path.relpath(dirpath, blog_dir).split(os.sep)
    if len(rel) == 3 and "index.md" in filenames and re.fullmatch(r"\d{4}", rel[0]) and re.fullmatch(r"\d{2}", rel[1]):
        p = read_post(os.path.join(dirpath, "index.md"))
        if p is None or p.get("generated"):
            continue
        f = p["_file"]
        for k in REQUIRED:
            if not p.get(k):
                fail(f"{f}: {k} is missing")
        if p.get("layout") != "post":
            fail(f"{f}: layout must be post")
        year, month, slug = rel
        p["slug"], p["year"], p["month"] = slug, year, month
        if p.get("permalink") != f"/blog/{year}/{month}/{slug}/":
            fail(f"{f}: permalink must be /blog/{year}/{month}/{slug}/")
        p["published_d"] = as_date(p.get("published"), "published", f)
        p["updated_d"] = as_date(p.get("updated") or p.get("published"), "updated", f)
        if p["published_d"].strftime("%Y/%m") != f"{year}/{month}":
            fail(f"{f}: published {p['published_d']} is not in {year}/{month}")
        if p["updated_d"] < p["published_d"]:
            fail(f"{f}: updated is before published")
        if p.get("category") not in cats:
            fail(f"{f}: category {p.get('category')!r} is not in _data/blog.json")
        if len(str(p.get("seo_title", ""))) > 60:
            fail(f"{f}: seo_title is {len(p['seo_title'])} characters (60 at most)")
        d = len(str(p.get("description", "")))
        if not 110 <= d <= 160:
            fail(f"{f}: description is {d} characters (110-160)")
        if re.search(r"^#[ \t]", p["_body"], flags=re.M):
            fail(f"{f}: the body has its own H1; the layout prints the title")
        for i, item in enumerate(p.get("faq") or []):
            if not item.get("q") or not item.get("a"):
                fail(f"{f}: faq item {i + 1} needs q and a")
            elif re.search(r"\]\(|<[a-z]", item["a"]):
                fail(f"{f}: faq item {i + 1} answer has a link or HTML (it goes into JSON-LD as plain text)")
        for s in p.get("sources") or []:
            if not str(s.get("url", "")).startswith("https://"):
                fail(f"{f}: source {s.get('title')!r} needs an https url")
        p["minutes"] = minutes(p["_body"])
        p["url"] = p.get("permalink")
        posts.append(p)

if not posts:
    fail("no posts found under blog/<YYYY>/<MM>/<slug>/index.md")
if problems:
    print("\n".join(problems), file=sys.stderr)
    sys.exit("build-blog: nothing was written.")

posts.sort(key=lambda p: (p["published_d"], p["title"]), reverse=True)


# --- Page builders ------------------------------------------------------------------------------------------
def card(p, heading="h3"):
    c = cats[p["category"]]
    return (f'<article class="post-card">\n'
            f'<p class="post-meta"><a href="/blog/category/{p["category"]}/">{esc(c["name"])}</a> &middot; '
            f'<time datetime="{p["published_d"]}">{nice_date(p["published_d"])}</time> &middot; {p["minutes"]} min read</p>\n'
            f'<{heading}><a href="{p["url"]}">{esc(p["title"])}</a></{heading}>\n'
            f'<p>{esc(p["description"])}</p>\n'
            f'</article>')


def by_month(items):
    out = {}
    for p in items:
        out.setdefault(p["year"], {}).setdefault(p["month"], []).append(p)
    return out


def month_name(y, m):
    return datetime.date(int(y), int(m), 1).strftime("%B %Y")


def archive_list(items):
    lines = ['<ul class="archive-list">']
    for y, months in sorted(by_month(items).items(), reverse=True):
        n = sum(len(v) for v in months.values())
        inner = "".join(f'<li><a href="/blog/{y}/{m}/">{month_name(y, m)}</a> ({len(v)})</li>'
                        for m, v in sorted(months.items(), reverse=True))
        lines.append(f'<li><a href="/blog/{y}/">{y}</a> ({n})<ul>{inner}</ul></li>')
    lines.append("</ul>")
    return "\n".join(lines)


def category_list(current=None):
    used = [k for k in cats if any(p["category"] == k for p in posts)]
    chips = []
    for k in used:
        n = sum(1 for p in posts if p["category"] == k)
        cur = ' aria-current="page"' if k == current else ""
        chips.append(f'<li><a href="/blog/category/{k}/"{cur}>{esc(cats[k]["name"])}</a> <span>{n}</span></li>')
    return '<ul class="category-chips">\n' + "\n".join(chips) + "\n</ul>"


def page(path, front, body):
    lines = ["---", "layout: blog", MARK]
    for k, v in front.items():
        if isinstance(v, (list, dict)):
            lines.append(f"{k}: {json.dumps(v, ensure_ascii=False)}")
        elif isinstance(v, bool):
            lines.append(f"{k}: {'true' if v else 'false'}")
        else:
            lines.append(f"{k}: {q(v)}")
    lines.append("---")
    return path, "\n".join(lines) + "\n" + body.strip() + "\n"


def items(ps):
    return [{"title": p["title"], "url": p["url"], "published": str(p["published_d"])} for p in ps]


HOME = {"name": "MediaFlowSwift", "url": "/"}
BLOG = {"name": "Blog", "url": "/blog/"}
out = []

# /blog/
body = f"""
# The MediaFlowSwift Blog

{esc(data["description"])} New articles appear here first, and in the [RSS feed](/blog/feed.xml).

Looking for step-by-step help with the app itself? The [how-to guides](/guides/) and the [manual](/manual/) cover that.

## Browse by topic

{category_list()}

## Latest articles

<div class="post-list">
{chr(10).join(card(p) for p in posts)}
</div>

## Archive

{archive_list(posts)}

## How are these articles written?

AI writes the articles on this blog for Long Road Software LLC. Each one is checked against its sources and, where it describes MediaFlowSwift, against the current app and its manual before it is published. Mike, who makes MediaFlowSwift, does not personally review each one. If an article gets something wrong, tell us at [support@mediaflowswift.com](mailto:support@mediaflowswift.com).
"""
out.append(page("blog/index.md", {
    "title": "MediaFlowSwift Blog: Video Storage, Backup and Archiving",
    "description": data["description"],
    "permalink": "/blog/",
    "crumbs": [HOME, BLOG],
    "items": items(posts),
}, body))

# /blog/category/<cat>/
for k, c in cats.items():
    ps = [p for p in posts if p["category"] == k]
    if not ps:
        continue
    url = f"/blog/category/{k}/"
    body = f"""
# {esc(c["name"])}

{esc(c["description"])}

{category_list(k)}

<div class="post-list">
{chr(10).join(card(p, "h2") for p in ps)}
</div>

[All articles](/blog/) &middot; [RSS feed](/blog/feed.xml)
"""
    title = f"{c['name']} Articles | MediaFlowSwift Blog"
    out.append(page(f"blog/category/{k}/index.md", {
        "title": title,
        "description": c["description"],
        "permalink": url,
        "crumbs": [HOME, BLOG, {"name": c["name"], "url": url}],
        "items": items(ps),
    }, body))

# /blog/<YYYY>/ and /blog/<YYYY>/<MM>/
for y, months in by_month(posts).items():
    ps = [p for p in posts if p["year"] == y]
    body = f"""
# Articles from {y}

{archive_list(ps)}

<div class="post-list">
{chr(10).join(card(p, "h2") for p in ps)}
</div>

[All articles](/blog/)
"""
    out.append(page(f"blog/{y}/index.md", {
        "title": f"Articles from {y} | MediaFlowSwift Blog",
        "description": f"Every article published on the MediaFlowSwift blog in {y}, newest first.",
        "permalink": f"/blog/{y}/",
        "noindex": True,
        "crumbs": [HOME, BLOG, {"name": y, "url": f"/blog/{y}/"}],
        "items": items(ps),
    }, body))
    for m, mps in months.items():
        body = f"""
# Articles from {month_name(y, m)}

<div class="post-list">
{chr(10).join(card(p, "h2") for p in mps)}
</div>

[All of {y}](/blog/{y}/) &middot; [All articles](/blog/)
"""
        out.append(page(f"blog/{y}/{m}/index.md", {
            "title": f"Articles from {month_name(y, m)} | MediaFlowSwift Blog",
            "description": f"Every article published on the MediaFlowSwift blog in {month_name(y, m)}, newest first.",
            "permalink": f"/blog/{y}/{m}/",
            "noindex": True,
            "crumbs": [HOME, BLOG, {"name": y, "url": f"/blog/{y}/"}, {"name": month_name(y, m), "url": f"/blog/{y}/{m}/"}],
            "items": items(mps),
        }, body))

# RSS
def rfc822(d):
    return email.utils.format_datetime(datetime.datetime(d.year, d.month, d.day, 12, 0, tzinfo=datetime.timezone.utc))


rss_items = []
for p in posts:
    rss_items.append(f"""  <item>
    <title>{esc(p["title"])}</title>
    <link>{SITE}{p["url"]}</link>
    <guid isPermaLink="true">{SITE}{p["url"]}</guid>
    <pubDate>{rfc822(p["published_d"])}</pubDate>
    <category>{esc(cats[p["category"]]["name"])}</category>
    <description>{esc(p["description"])}</description>
  </item>""")
feed = f"""<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>MediaFlowSwift Blog</title>
  <link>{SITE}/blog/</link>
  <atom:link href="{SITE}/blog/feed.xml" rel="self" type="application/rss+xml"/>
  <description>{esc(data["description"])}</description>
  <language>en-us</language>
  <lastBuildDate>{rfc822(max(p["updated_d"] for p in posts))}</lastBuildDate>
{chr(10).join(rss_items)}
</channel>
</rss>
"""
out.append(("blog/feed.xml", feed))

# Sitemap block: /blog/, category pages, posts. Archive pages are noindex and stay out.
sitemap_path = os.path.join(ROOT, "sitemap.xml")
sitemap = open(sitemap_path, encoding="utf-8").read()
if SITEMAP_BEGIN not in sitemap or SITEMAP_END not in sitemap:
    sys.exit("build-blog: sitemap.xml has no blog markers; nothing was written.")
newest = max(p["updated_d"] for p in posts)
entries = [(f"{SITE}/blog/", newest)]
for k in cats:
    ps = [p for p in posts if p["category"] == k]
    if ps:
        entries.append((f"{SITE}/blog/category/{k}/", max(p["updated_d"] for p in ps)))
entries += [(SITE + p["url"], p["updated_d"]) for p in posts]
block = "\n".join(f"  <url><loc>{loc}</loc><lastmod>{d}</lastmod></url>" for loc, d in entries)
start = sitemap.index(SITEMAP_BEGIN) + len(SITEMAP_BEGIN)
sitemap = sitemap[:start] + "\n" + block + "\n  " + sitemap[sitemap.index(SITEMAP_END):]

# --- Write ----------------------------------------------------------------------------------------------------
written = set()
for rel, text in out:
    full = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    old = open(full, encoding="utf-8").read() if os.path.exists(full) else None
    if old != text:
        open(full, "w", encoding="utf-8").write(text)
    written.add(os.path.normpath(rel))
open(sitemap_path, "w", encoding="utf-8").write(sitemap)

for dirpath, _, filenames in os.walk(blog_dir):
    for name in filenames:
        rel = os.path.normpath(os.path.relpath(os.path.join(dirpath, name), ROOT))
        if name == "index.md" and rel not in written:
            head = open(os.path.join(ROOT, rel), encoding="utf-8").read(400)
            if MARK in head:
                os.remove(os.path.join(ROOT, rel))
                print(f"removed {rel}")

print(f"build-blog: {len(posts)} posts, {len(out)} files written, {len(entries)} sitemap entries")
sys.exit(subprocess.call([sys.executable, os.path.join(ROOT, "tools", "check-links.py"), ROOT]))
