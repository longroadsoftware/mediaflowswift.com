#!/bin/bash
# Publish a MediaFlowSwift release for the app's web updater (VideoProductionManager #560).
#
#   tools/publish-release.sh <notarized-and-stapled MediaFlowswift.app> <CHANGELOG.md>
#
# Two copies of each zip. The app's updater downloads the one on this site (manifest "url"),
# because it refuses redirects and GitHub Release assets always redirect. The website's Download
# button uses the GitHub Release copy (manifest "download"), because GitHub counts those downloads:
#   gh api repos/longroadsoftware/mediaflowswift.com/releases --jq '.[].assets[] | "\(.name) \(.download_count)"'
# Only the newest zip is kept in the repo; the Releases keep the history. The release is made first,
# so the manifest never points the button at a copy that is not there yet; if it cannot be made,
# the manifest leaves "download" out and the button falls back to the site copy. A re-run is safe.
# The What's New page (changes/index.html, and its sitemap line) is written from the same change log by
# tools/import-changelog.py before anything is published: a change log it cannot read, or whose newest
# version is not this one, stops the release here. downloads/CHANGELOG.md itself is copied unchanged.
# Run it AFTER stapling.
set -u
APP="${1:?the stapled .app}"
LOG="${2:?CHANGELOG.md}"
SITE="$(cd "$(dirname "$0")/.." && pwd)"
REPO="longroadsoftware/mediaflowswift.com"
WORK=$(mktemp -d)
trap 'rm -rf "$WORK"' EXIT

PLIST="$APP/Contents/Info.plist"
VERSION=$(/usr/libexec/PlistBuddy -c "Print :CFBundleShortVersionString" "$PLIST") || { echo "no version in $PLIST"; exit 1; }
BUILD=$(/usr/libexec/PlistBuddy -c "Print :CFBundleVersion" "$PLIST") || { echo "no build in $PLIST"; exit 1; }
[[ "$VERSION" =~ ^[0-9]+(\.[0-9]+){0,3}$ ]] || { echo "version '$VERSION' is not digits and dots"; exit 1; }
xcrun stapler validate "$APP" >/dev/null 2>&1 || { echo "$APP is not stapled; staple before publishing"; exit 1; }
python3 "$SITE/tools/import-changelog.py" "$LOG" "$SITE" --newest "$VERSION" \
  || { echo "the What's New page could not be made from $LOG; nothing was published"; exit 1; }

NAME="MediaFlowswift-$VERSION.zip"
ZIP="$WORK/$NAME"
ditto -c -k --norsrc --noextattr --keepParent "$APP" "$ZIP" || { echo "zip failed"; exit 1; }
SIZE=$(stat -f %z "$ZIP")
SHA=$(shasum -a 256 "$ZIP" | awk '{print $1}')
URL="https://mediaflowswift.com/downloads/$NAME"
TAG="v$VERSION"

# The counted copy for the website's button. A release that already exists is left alone.
if ! gh release view "$TAG" --repo "$REPO" >/dev/null 2>&1; then
  gh release create "$TAG" "$ZIP" --repo "$REPO" --title "MediaFlowSwift $VERSION" \
    --notes "Build $BUILD. Notarized. What is new: https://mediaflowswift.com/changes/#v${VERSION//./-}" \
    || echo "the GitHub Release failed; the Download button will use the site copy until it exists"
fi
DOWNLOAD_FIELD=""
if gh release view "$TAG" --repo "$REPO" --json assets -q '.assets[].name' 2>/dev/null | grep -qx "$NAME"; then
  DOWNLOAD_FIELD=",\"download\":\"https://github.com/$REPO/releases/download/$TAG/$NAME\""
fi

mkdir -p "$SITE/downloads" || exit 1
# One zip in the repo at a time: the old one goes, its GitHub Release stays.
find "$SITE/downloads" -name 'MediaFlowswift-*.zip' ! -name "$NAME" -delete
cp "$ZIP" "$SITE/downloads/$NAME" || { echo "zip copy failed"; exit 1; }
cp "$LOG" "$SITE/downloads/CHANGELOG.md" || { echo "change log copy failed"; exit 1; }
cat > "$SITE/downloads/latest.json" <<EOF
{"version":"$VERSION","build":$BUILD,"url":"$URL","size":$SIZE,"sha256":"$SHA","notesURL":"https://mediaflowswift.com/downloads/CHANGELOG.md","published":"$(date -u +%Y-%m-%d)"$DOWNLOAD_FIELD}
EOF
python3 - "$SITE/downloads/latest.json" "$SITE/downloads/$NAME" <<'PY' || exit 1
import hashlib, json, os, sys
m = json.load(open(sys.argv[1]))
assert m["build"] > 0 and len(m["sha256"]) == 64 and m["url"].startswith("https://mediaflowswift.com/downloads/"), m
assert os.path.getsize(sys.argv[2]) == m["size"], "size"
assert hashlib.sha256(open(sys.argv[2], "rb").read()).hexdigest() == m["sha256"], "hash"
assert "download" not in m or m["download"].startswith("https://github.com/longroadsoftware/mediaflowswift.com/releases/download/"), m
print("manifest ok:", m["version"], m["build"], m["size"], "bytes")
PY

cd "$SITE" || exit 1
git add -A downloads changes sitemap.xml || exit 1
if git diff --cached --quiet; then
  echo "nothing changed under downloads/ or changes/ (already published?)"
else
  git commit -q -m "release: MediaFlowSwift $VERSION (build $BUILD)" || exit 1
fi
git push -q || { echo "push failed; the files are committed locally, run the script again when online"; exit 1; }

echo "published $VERSION ($BUILD): $URL"
