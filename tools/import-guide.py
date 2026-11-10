#!/usr/bin/env python3
"""Turn the app's user guide into the online manual: one page per chapter, and a contents page.

    python3 tools/import-guide.py <user-guide.md> <site folder>

Run through tools/import-guide.sh, which is what a release calls. Each H1 of the guide is a chapter and becomes
manual/<slug>/index.md (served at /manual/<slug>/). manual/index.md becomes the contents page, served at /manual/
as before, with a small script that sends an old /manual/#heading link to the chapter that heading is in now.
The manual's entries in sitemap.xml, between its two marker comments, are rewritten.

Everything is built and checked in memory first. Nothing is written unless every chapter has exactly one H1,
every link in the guide leads to a heading, every chapter has a description, and sitemap.xml has its markers.
Only files this tool wrote (front matter "generated: tools/import-guide.sh") are ever removed, and only
manual/<slug>/index.md of a chapter the guide no longer has.

Heading ids are made the way GitHub Pages' kramdown (GFM input, auto_ids) makes them, so the anchors written
here are the ones on the rendered pages.
"""
import datetime
import json
import os
import re
import sys
import unicodedata

SITE = "https://mediaflowswift.com"
MARK = "generated: tools/import-guide.sh"
MANUAL_TITLE = "MediaFlowSwift Manual"
CONTENTS_TITLE = "MediaFlowSwift Manual — Import, Organize and Archive Footage"
CONTENTS_DESCRIPTION = "The MediaFlowSwift manual, chapter by chapter: importing from cards, organizing, archiving, the shared database, publishing to YouTube, troubleshooting."
SITEMAP_BEGIN = "<!-- manual: written by tools/import-guide.sh, do not edit by hand -->"
SITEMAP_END = "<!-- end of manual -->"
DESCRIPTION_LIMIT = 154  # characters, so it stays under the 155 search engines show
SCREENSHOTS = "tools/manual-screenshots.json"  # pictures put under headings; the guide itself has none


def fail(message):
    print("import-guide: " + message, file=sys.stderr)
    print("import-guide: nothing was written.", file=sys.stderr)
    sys.exit(1)


def keeps(c):
    # Ruby's \p{Word}, which kramdown-parser-gfm keeps: letters, marks, decimal digits, connector punctuation.
    category = unicodedata.category(c)
    return category[0] in "LM" or category in ("Nd", "Pc") or c in "- \t"


def heading_id(raw, seen):
    """kramdown-parser-gfm's generate_gfm_header_id: the id of a heading, given the ids already on the page."""
    base = "".join(c for c in raw.lower() if keeps(c)).replace(" ", "-").replace("\t", "-")
    n = seen.get(base, 0)
    seen[base] = n + 1
    return base, (base if n == 0 else f"{base}-{n}")


def atx(line):
    m = re.match(r"^(#{1,6})[ \t]+(.*?)[ \t]*$", line)
    if not m:
        return None
    text = re.sub(r"[ \t]+#+$", "", m.group(2))  # closing hashes, as kramdown strips them
    return len(m.group(1)), text


def slug_for(title):
    letters = "".join(c for c in unicodedata.normalize("NFKD", title) if not unicodedata.combining(c))
    return re.sub(r"[^a-z0-9]+", "-", letters.lower()).strip("-")


def plain(markdown):
    """Text of a paragraph without its Markdown: link text instead of links, no emphasis or code marks."""
    s = re.sub(r"!?\[([^\]]*)\]\([^)]*\)", r"\1", markdown)
    s = re.sub(r"`([^`]*)`", r"\1", s)
    s = re.sub(r"\*\*(.+?)\*\*", r"\1", s)
    s = re.sub(r"\*(\S(?:.*?\S)?)\*", r"\1", s)
    return re.sub(r"\s+", " ", s).strip()


def shortened(text):
    if len(text) <= DESCRIPTION_LIMIT:
        return text
    cut = text[: DESCRIPTION_LIMIT]  # one character is left for the ellipsis
    cut = cut[: cut.rfind(" ")].rstrip(" ,;:—–-")
    return cut + "…"


def first_paragraph(lines):
    """The first paragraph of prose: not a heading, list, quote, table or rule."""
    block = []
    for line in lines + [""]:
        s = line.strip()
        if not s:
            if block:
                return " ".join(block)
            continue
        if block:
            block.append(s)
        elif not (atx(line) or re.match(r"^([-*+]|\d+\.)[ \t]", s) or s[0] in ">|" or re.match(r"^(-{3,}|\*{3,}|_{3,})$", s)):
            block.append(s)
    return ""


def html(text):
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace('"', "&quot;")


def image_size(path):
    """Width and height of a PNG or JPEG, from its header, or None."""
    with open(path, "rb") as f:
        data = f.read()
    if data[:8] == b"\x89PNG\r\n\x1a\n" and data[12:16] == b"IHDR":
        return int.from_bytes(data[16:20], "big"), int.from_bytes(data[20:24], "big")
    if data[:2] == b"\xff\xd8":
        i = 2
        while i + 9 < len(data) and data[i] == 0xFF:
            marker, length = data[i + 1], int.from_bytes(data[i + 2 : i + 4], "big")
            if marker in (0xC0, 0xC1, 0xC2):
                return int.from_bytes(data[i + 7 : i + 9], "big"), int.from_bytes(data[i + 5 : i + 7], "big")
            i += 2 + length
    return None


def screenshots(root, chapters):
    """The pictures in tools/manual-screenshots.json whose files exist, by (chapter slug, heading id), and the
    ones still waiting for their file.

    A picture whose file is not there yet is left out, so the list can name shots before they are taken. Every
    entry must name a heading the guide has, so a renamed heading stops the import instead of a picture quietly
    disappearing."""
    path = os.path.join(root, SCREENSHOTS)
    if not os.path.isfile(path):
        return {}, []
    try:
        entries = json.load(open(path, encoding="utf-8"))["screenshots"]
    except (ValueError, KeyError, TypeError) as e:
        fail(f"{SCREENSHOTS} is not readable: {e}")
    ids = {(c["slug"], h["new"]) for c in chapters for h in c["headings"]}
    found, waiting, keys = {}, [], set()
    for e in entries:
        key = (e.get("chapter"), e.get("heading"))
        src, alt, caption = e.get("image", ""), e.get("alt", "").strip(), e.get("caption", "").strip()
        if key not in ids:
            fail(f"{SCREENSHOTS}: no heading #{key[1]} in chapter '{key[0]}' (was it renamed in the guide?)")
        if key in keys:
            fail(f"{SCREENSHOTS}: two pictures under #{key[1]} in '{key[0]}'")
        keys.add(key)
        if not re.match(r"^/images/manual/[a-z0-9-]+\.(png|jpg)$", src) or not alt:
            fail(f"{SCREENSHOTS}: the picture for #{key[1]} needs an image /images/manual/<name>.png or .jpg and alt text")
        if "{{" in alt + caption or "{%" in alt + caption:
            fail(f"{SCREENSHOTS}: the text for #{key[1]} contains {{{{ or {{%, which Jekyll would read as Liquid")
        file = os.path.join(root, src.lstrip("/"))
        if not os.path.isfile(file):
            waiting.append(src)
            continue
        size = image_size(file)
        if not size:
            fail(f"{src} is not a PNG or JPEG this tool can read")
        found[key] = (
            f'<figure class="guide-figure"><img src="{src}" width="{size[0]}" height="{size[1]}" '
            f'style="max-width:100%;height:auto" alt="{html(alt)}" loading="lazy">'
            + (f"<figcaption>{html(caption)}</figcaption>" if caption else "")
            + "</figure>"
        )
    return found, waiting


def with_pictures(lines, slug, pictures):
    """A chapter page's lines (already escaped) with each picture after the first paragraph under its heading,
    or straight under the heading when another heading follows it at once."""
    out, seen, pending, in_paragraph = [], {}, None, False
    for line in lines:
        h = atx(line)
        if pending and in_paragraph and not line.strip():
            out += ["", pending]
            pending, in_paragraph = None, False
        if h:
            if pending:
                out += [pending, ""]
                pending = None
            _, new = heading_id(h[1], seen)
            pending, in_paragraph = pictures.get((slug, new)), False
        elif pending and line.strip():
            in_paragraph = True
        out.append(line)
    if pending:
        out += ["", pending]
    return out


def yaml_string(text):
    return json.dumps(text, ensure_ascii=False)  # a JSON string is a valid YAML double-quoted scalar


def front_matter(fields):
    return "---\n" + "".join(f"{k}: {v}\n" for k, v in fields) + "---\n"


def main():
    if len(sys.argv) != 3:
        fail("usage: import-guide.py <user-guide.md> <site folder>")
    source, root = sys.argv[1], os.path.realpath(sys.argv[2])
    manual_dir = os.path.join(root, "manual")
    sitemap_path = os.path.join(root, "sitemap.xml")
    if not os.path.isfile(os.path.join(root, "_layouts", "manual.html")):
        fail(f"{root} is not the site folder (no _layouts/manual.html)")
    guide = open(source, encoding="utf-8").read()

    # --- Refuse what this tool cannot carry across safely -------------------------------------------------------
    if "{{" in guide or "{%" in guide:
        fail("the guide contains {{ or {%, which Jekyll would read as Liquid")
    if "\r" in guide:
        fail("the guide has Windows line endings")
    lines = guide.split("\n")
    for i, line in enumerate(lines):
        if re.match(r"^[ \t]*(=+|-+)[ \t]*$", line) and i and lines[i - 1].strip():
            fail(f"line {i + 1}: a line of = or - under text makes a heading this tool cannot see; add a blank line")
        if re.match(r"^[ \t]{0,3}(```|~~~)", line):
            fail(f"line {i + 1}: code blocks are not handled (a # inside one would be taken for a chapter)")
        if re.match(r"^[ \t]{0,3}\[[^\]]+\]:", line):
            fail(f"line {i + 1}: reference-style link definitions are not handled")
    if not lines or not lines[0].startswith("# "):
        fail("the guide does not start with its title as a heading")

    # --- Split into the preamble and chapters ------------------------------------------------------------------
    starts = [i for i, line in enumerate(lines) if i > 0 and line.startswith("# ")]
    if not starts:
        fail("the guide has no chapters (no headings of level 1 after the title)")
    preamble = lines[1 : starts[0]]
    intro = []
    for line in preamble:
        if atx(line):
            break
        intro.append(line)
    intro = "\n".join(intro).strip()

    chapters = []
    for n, start in enumerate(starts):
        end = starts[n + 1] if n + 1 < len(starts) else len(lines)
        body = lines[start + 1 : end]
        while body and not body[-1].strip():
            body.pop()
        if body and body[-1].strip() == "---":  # the rule the guide puts between chapters
            body.pop()
        while body and not body[-1].strip():
            body.pop()
        title = atx(lines[start])[1]
        chapters.append({"title": title, "plain": plain(title), "slug": slug_for(plain(title)), "body": body})

    slugs = [c["slug"] for c in chapters]
    for c in chapters:
        if not c["slug"]:
            fail(f"chapter '{c['title']}' gives an empty address")
        if slugs.count(c["slug"]) > 1:
            fail(f"two chapters would share the address /manual/{c['slug']}/")

    # --- Every heading: its id on the old one-page manual, and on its chapter's page now -------------------------
    # The old page is the guide as one document, as the old tool wrote it: its title renamed, then everything.
    # Angle brackets are escaped in the text (they are placeholders such as <name>), so ids are made from that.
    def escaped(text):
        return text.replace("<", "&lt;")

    old_seen = {}
    heading_id(escaped(MANUAL_TITLE), old_seen)
    for line in preamble:
        h = atx(line)
        if h:
            heading_id(escaped(h[1]), old_seen)
    headings = []
    for n, c in enumerate(chapters):
        new_seen = {}
        c["headings"] = []
        for line in [lines[starts[n]]] + c["body"]:
            h = atx(line)
            if not h:
                continue
            base, old = heading_id(escaped(h[1]), old_seen)
            _, new = heading_id(escaped(h[1]), new_seen)
            entry = {"chapter": n, "level": h[0], "text": h[1], "base": base, "old": old, "new": new}
            headings.append(entry)
            c["headings"].append(entry)
        h1s = [h for h in c["headings"] if h["level"] == 1]
        if len(h1s) != 1:
            fail(f"chapter '{c['title']}' would have {len(h1s)} headings of level 1")
        new_ids = [h["new"] for h in c["headings"]]
        if len(set(new_ids)) != len(new_ids):
            fail(f"chapter '{c['title']}' would have two headings with the same id")

    # --- Links: an anchor names a heading; the highest-level heading of that name wins, then the first ----------
    # (On the one-page manual the first heading of a name won, so a link to a chapter or topic could land on a
    # smaller heading of the same name earlier on. The guide's links name topics and chapters.)
    def target(anchor):
        same = [h for h in headings if h["base"] == anchor]
        if same:
            return min(same, key=lambda h: h["level"])  # min keeps the first of equals
        exact = [h for h in headings if h["old"] == anchor]
        return exact[0] if exact else None

    def href(h, here):
        if h["chapter"] == here:
            return "#" + h["new"]
        page = f"/manual/{chapters[h['chapter']]['slug']}/"
        return page if h["level"] == 1 else page + "#" + h["new"]

    unresolved = []

    def rewrite(line, here):
        def one(m):
            text, dest = m.group(1), m.group(2)
            if dest.startswith("#"):
                h = target(dest[1:])
                if not h:
                    unresolved.append(dest)
                    return m.group(0)
                return f"[{text}]({href(h, here)})"
            if re.match(r"^[a-z][a-z0-9+.-]*:", dest) or dest.startswith("/"):
                return m.group(0)  # https:, mailto: or already absolute
            return f"[{text}](/manual/{dest})"  # was relative to /manual/, which is now one level up
        return re.sub(r"\[([^\]]*)\]\(([^)\s]+)\)", one, line)

    for n, c in enumerate(chapters):
        c["body"] = [rewrite(line, n) for line in c["body"]]
        c["description"] = shortened(plain(first_paragraph(c["body"])))
        if not c["description"]:
            fail(f"chapter '{c['title']}' has no paragraph to describe it")
    if unresolved:
        fail("links that lead to no heading: " + ", ".join(sorted(set(unresolved))))

    # --- The pages ----------------------------------------------------------------------------------------------
    pictures, waiting = screenshots(root, chapters)
    pages = {}  # path relative to root -> content
    for n, c in enumerate(chapters):
        nav = ['<div class="chapter-nav" role="navigation" aria-label="Chapters">']
        # Always three cells (an empty one where there is no previous or next chapter), so each keeps its place.
        if n > 0:
            p = chapters[n - 1]
            nav.append(f'<a rel="prev" href="/manual/{p["slug"]}/">&larr; {html(p["plain"])}</a>')
        else:
            nav.append("<span></span>")
        nav.append('<a href="/manual/">All chapters</a>')
        if n + 1 < len(chapters):
            q = chapters[n + 1]
            nav.append(f'<a rel="next" href="/manual/{q["slug"]}/">{html(q["plain"])} &rarr;</a>')
        else:
            nav.append("<span></span>")
        nav.append("</div>")
        text = front_matter([
            ("layout", "manual"),
            ("title", yaml_string(f"{c['plain']} — {MANUAL_TITLE}")),
            ("description", yaml_string(c["description"])),
            ("permalink", f"/manual/{c['slug']}/"),
            ("generated", "tools/import-guide.sh"),
        ])
        page = escaped(lines[starts[n]] + "\n" + "\n".join(c["body"])).split("\n")
        text += "\n".join(with_pictures(page, c["slug"], pictures)) + "\n\n" + "\n".join(nav) + "\n"
        pages[f"manual/{c['slug']}/index.md"] = text

    contents = [f"# {MANUAL_TITLE}", ""]
    if intro:
        contents += [escaped(intro), ""]
    for c in chapters:
        contents.append(f"- **[{escaped(c['title'])}](/manual/{c['slug']}/)**: {escaped(c['description'])}")
        for h in c["headings"]:
            if h["level"] == 2:
                contents.append(f"  - [{escaped(h['text'])}](/manual/{c['slug']}/#{h['new']})")
    moved = {}
    for h in headings:
        if h["level"] == 1:
            moved[h["old"]] = [h["chapter"], ""]
        elif h["new"] == h["old"]:
            moved[h["old"]] = h["chapter"]
        else:
            moved[h["old"]] = [h["chapter"], h["new"]]
    script = (
        "<script>\n"
        "/* The manual used to be one page. An old link to a heading on it (/manual/#heading) goes to the chapter\n"
        "   page that heading is on now. Written by tools/import-guide.sh. */\n"
        "(function () {\n"
        f"  var chapters = {json.dumps(slugs, separators=(',', ':'))};\n"
        f"  var moved = {json.dumps(moved, ensure_ascii=False, separators=(',', ':'))};\n"
        "  var id = location.hash.slice(1);\n"
        "  try { id = decodeURIComponent(id); } catch (e) { return; }\n"
        "  if (!id || !Object.prototype.hasOwnProperty.call(moved, id)) return;\n"
        "  var to = moved[id], chapter = typeof to === \"number\" ? to : to[0], anchor = typeof to === \"number\" ? id : to[1];\n"
        "  location.replace(\"/manual/\" + chapters[chapter] + \"/\" + (anchor ? \"#\" + encodeURIComponent(anchor) : \"\"));\n"
        "})();\n"
        "</script>"
    )
    if "{{" in script or "{%" in script or "</script" in script[8:-9]:
        fail("the redirect script would not survive Jekyll")
    pages["manual/index.md"] = front_matter([
        ("layout", "manual"),
        ("title", yaml_string(CONTENTS_TITLE)),
        ("description", yaml_string(CONTENTS_DESCRIPTION)),
        ("generated", "tools/import-guide.sh"),
    ]) + "\n".join(contents) + "\n\n" + script + "\n"

    # --- Sitemap: the manual's block between the markers; a page keeps its date unless it changed ---------------
    sitemap = open(sitemap_path, encoding="utf-8").read()
    if sitemap.count(SITEMAP_BEGIN) != 1 or sitemap.count(SITEMAP_END) != 1:
        fail(f"sitemap.xml needs exactly one '{SITEMAP_BEGIN}' and one '{SITEMAP_END}'")
    head, rest = sitemap.split(SITEMAP_BEGIN)
    block, tail = rest.split(SITEMAP_END)
    old_dates = dict(re.findall(r"<loc>([^<]+)</loc><lastmod>([^<]+)</lastmod>", block))
    today = datetime.date.today().isoformat()
    entries = []
    for path in ["manual/index.md"] + [f"manual/{s}/index.md" for s in slugs]:
        url = SITE + "/" + path[: -len("index.md")]
        full = os.path.join(root, path)
        same = os.path.isfile(full) and open(full, encoding="utf-8").read() == pages[path]
        date = old_dates.get(url, today) if same else today
        entries.append(f"  <url><loc>{url}</loc><lastmod>{date}</lastmod></url>\n")
    indent = head[head.rfind("\n") + 1 :]
    pages["sitemap.xml"] = head + SITEMAP_BEGIN + "\n" + "".join(entries) + indent + SITEMAP_END + tail

    # --- Chapters the guide no longer has: only pages this tool wrote --------------------------------------------
    def written_here(page):
        text = open(page, encoding="utf-8").read()
        end = text.find("\n---\n", 4)
        return text.startswith("---\n") and end != -1 and MARK in text[4:end].split("\n")

    stale = []
    for name in sorted(os.listdir(manual_dir)) if os.path.isdir(manual_dir) else []:
        page = os.path.join(manual_dir, name, "index.md")
        if name in slugs or os.path.islink(os.path.join(manual_dir, name)) or not os.path.isfile(page):
            continue
        if os.path.dirname(os.path.dirname(os.path.realpath(page))) != os.path.realpath(manual_dir):
            fail(f"{page} is not inside {manual_dir}")
        if written_here(page):
            stale.append(page)

    # --- Write ---------------------------------------------------------------------------------------------------
    for path, text in pages.items():
        full = os.path.join(root, path)
        os.makedirs(os.path.dirname(full), exist_ok=True)
        with open(full, "w", encoding="utf-8") as f:
            f.write(text)
    for page in stale:
        os.remove(page)
        try:
            os.rmdir(os.path.dirname(page))
        except OSError:
            pass
        print(f"removed {os.path.relpath(page, root)}: the guide no longer has that chapter")
    words = sum(len(t.split()) for p, t in pages.items() if p != "sitemap.xml")
    print(f"manual written from {source}: {len(chapters)} chapters and the contents page ({words} words), "
          f"{len(moved)} old anchors redirected, sitemap.xml updated")
    if pictures or waiting:
        print(f"{len(pictures)} screenshots placed from {SCREENSHOTS}; "
              + (f"{len(waiting)} not taken yet: " + ", ".join(waiting) if waiting else "none waiting"))
    print("Commit manual/ and sitemap.xml together.")


if __name__ == "__main__":
    main()
