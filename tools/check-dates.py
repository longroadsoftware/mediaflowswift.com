#!/usr/bin/env python3
"""Check the published and updated dates on every article page against git history.

    python3 tools/check-dates.py [--fix]

Covers the guides, the blog posts and the comparison pages under /vs/. For each page it prints the published and
updated dates the page states (front matter for Markdown pages, the Article JSON-LD and the visible <time> tags
for the hand-written /vs/ pages) next to the date the file was first committed and the date its text last changed.
Commits that only touch the front matter, the JSON-LD, the date line, the header or the footer do not count as a
text change, so fixing a date never makes the page look changed again.

Flags a page when:
  - published or updated is missing,
  - published is not the date of the file's first commit,
  - updated is older than the last commit that changed the text (including updated == published while the text
    has changed since),
  - on a /vs/ page, the visible dates and the JSON-LD dates disagree.

--fix rewrites published/updated in the front matter of Markdown pages from git. /vs/ pages are only reported.
Exits 1 if anything is flagged.
"""
import json
import os
import re
import subprocess
import sys
from glob import glob

ROOT = os.path.realpath(os.path.join(os.path.dirname(__file__), ".."))
FIX = "--fix" in sys.argv[1:]


def git(*args):
    return subprocess.run(["git", "-C", ROOT, *args], capture_output=True, text=True, check=True).stdout


def split_front_matter(text):
    m = re.match(r"---\n(.*?)\n---\n?(.*)", text, re.S)
    return (m.group(1), m.group(2)) if m else ("", text)


def body_of(path, text):
    if path.endswith(".md"):
        return split_front_matter(text)[1].strip()
    m = re.search(r"<main.*?</main>", text, re.S)
    main = m.group(0) if m else text
    return re.sub(r'<p class="updated">.*?</p>', "", main, flags=re.S).strip()


def git_dates(path):
    """First commit date, and date of the last commit that changed the page's text."""
    log = git("log", "--follow", "--format=%H %as", "--name-only", "--", path).split("\n")
    commits, i = [], 0
    while i < len(log):
        if re.match(r"[0-9a-f]{40} \d{4}-\d\d-\d\d$", log[i]):
            sha, day = log[i].split()
            name = next((x for x in log[i + 1:i + 3] if x.strip()), path)
            commits.append((sha, day, name))
        i += 1
    if not commits:
        return None, None
    commits.reverse()  # oldest first
    first, last, prev = commits[0][1], commits[0][1], None
    for sha, day, name in commits:
        try:
            body = body_of(path, git("show", f"{sha}:{name}"))
        except subprocess.CalledProcessError:
            continue
        if prev is not None and body != prev:
            last = day
        prev = body
    return first, last


def as_day(value):
    return str(value).strip().strip("\"'")[:10] if value else None


def front_matter_dates(text):
    fm, _ = split_front_matter(text)
    get = lambda k: as_day((re.search(rf"^{k}:\s*(.+)$", fm, re.M) or [None, None])[1])
    return get("published"), get("updated")


def vs_dates(text):
    """(published, updated) from the Article JSON-LD, and the same pair from the visible <time> tags."""
    ld = (None, None)
    for block in re.findall(r'<script type="application/ld\+json">(.*?)</script>', text, re.S):
        data = json.loads(block)
        for node in data.get("@graph", [data]):
            if node.get("@type") == "Article":
                ld = (node.get("datePublished"), node.get("dateModified"))
    line = re.search(r'<p class="updated">(.*?)</p>', text, re.S)
    times = re.findall(r'<time datetime="([\d-]+)"', line.group(1)) if line else []
    shown = (times[0] if times else None, times[1] if len(times) > 1 else (times[0] if times else None))
    return ld, shown


def set_front_matter(path, text, published, updated):
    fm, body = split_front_matter(text)
    for key, value in (("published", published), ("updated", updated)):
        if re.search(rf"^{key}:", fm, re.M):
            fm = re.sub(rf"^{key}:.*$", f'{key}: "{value}"', fm, flags=re.M)
        else:
            fm = re.sub(r"^(title:.*)$", rf'\1\n{key}: "{value}"', fm, count=1, flags=re.M)
    with open(path, "w") as f:
        f.write(f"---\n{fm}\n---\n{body}")


pages = sorted(glob(os.path.join(ROOT, "guides", "*", "index.md")) + [os.path.join(ROOT, "guides", "index.md")]
               + [p for p in glob(os.path.join(ROOT, "blog", "*", "*", "*", "index.md"))]
               + glob(os.path.join(ROOT, "vs", "*", "index.html")))
flagged = 0
for path in pages:
    rel = os.path.relpath(path, ROOT)
    with open(path) as f:
        text = f.read()
    first, last = git_dates(rel)
    problems = []
    if path.endswith(".md"):
        published, updated = front_matter_dates(text)
    else:
        (published, updated), shown = vs_dates(text)
        if shown != (published, updated):
            problems.append(f"visible dates {shown} differ from JSON-LD")
    if not published:
        problems.append("no published date")
    elif first and published != first:
        problems.append(f"published should be {first} (first commit)")
    if not updated:
        problems.append("no updated date")
    elif last and updated < last:
        problems.append(f"updated should be {last} (text last changed)")
    if problems and FIX and path.endswith(".md") and first:
        set_front_matter(path, text, first, max(last, updated) if updated else last)
        problems = [p + " [fixed]" for p in problems]
    else:
        flagged += bool(problems)
    print(f"{'FLAG' if problems else 'ok  '} {rel}  published={published} updated={updated}  git first={first} "
          f"last text change={last}" + "".join(f"\n       - {p}" for p in problems))
print(f"\n{len(pages)} pages, {flagged} flagged")
sys.exit(1 if flagged else 0)
