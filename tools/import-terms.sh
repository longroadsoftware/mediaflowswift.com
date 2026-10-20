#!/bin/sh
# Copy the app's terms of use into the site as terms.html.
#
#   tools/import-terms.sh [path/to/terms.md]
#
# The terms live in the app (VideoProductionManager #587, Services/Legal/TermsOfUse.swift). The app shows
# them on its agreement screen, and docs/legal/terms.md is generated from them
# (MEDIAFLOW_WRITE_TERMS=1 swift test --filter TermsOfUseTextTests), so the website and the app always say
# the same thing. Run this when a release that changes the terms is published, not before: the terms
# describe the app people can download. GitHub Pages renders terms.md through _layouts/legal.html at
# /terms.html.
set -e
SRC="${1:-../VideoProductionManager/docs/legal/terms.md}"
DIR="$(cd "$(dirname "$0")/.." && pwd)"
[ -f "$SRC" ] || { echo "terms not found at $SRC" >&2; exit 1; }
grep -q "^# Terms of use" "$SRC" || { echo "$SRC does not look like the terms" >&2; exit 1; }
{
  printf -- '---\nlayout: legal\ntitle: Terms & refunds\ndescription: \"The terms for using MediaFlowSwift: the licence for up to three Macs, the 14-day trial, what still works when a plan ends, payment through Paddle, and refunds.\"\npermalink: /terms.html\n---\n'
  # Links in the app point at the full address; on the site they stay on the site.
  sed -e 's#](https://mediaflowswift.com/#](/#g' "$SRC"
} > "$DIR/terms.md"
rm -f "$DIR/terms.html"
echo "terms.md written from $SRC ($(wc -l < "$SRC" | tr -d ' ') lines); terms.html is now generated from it"
