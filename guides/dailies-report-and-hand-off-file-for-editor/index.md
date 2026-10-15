---
layout: guide
title: "How to Create a Dailies Report and a Hand-Off File"
description: "Generate Dailies builds a by-day report for a director to read. A separate export hands your organization to an editor's software."
permalink: /guides/dailies-report-and-hand-off-file-for-editor/
---
# How to Create a Dailies Report and a Hand-Off File

Choose Workflow → Plan & Deliver → Generate Dailies for a report a director or producer reads — organized by shooting day, with circle takes, ratings and notes. For a file your editor's software actually imports, use Workflow → Plan & Deliver → NLE Template Export or Report instead; which one depends on which editor they use.

These are two different jobs, and MediaFlowSwift keeps them as two different commands. The rest of this page is which one to run, and what each produces.

## The dailies report

> The Dailies Generator creates a report of your footage organized by shooting date, with optional grouping by scene and camera. It highlights circle takes and includes ratings, timecodes, and notes. Output is available in HTML, CSV, or plain text format.

1. Open a project with media clips
2. Choose Workflow → Plan & Deliver → Generate Dailies
3. Turn Group by Scene, Group by Camera, Circle Takes, Ratings, Timecodes and Notes on or off, as you want them in the report
4. Pick HTML (a dark-themed web page, styled for reading on a screen), CSV (for a spreadsheet) or Plain Text (for email or printing)
5. Click Generate Dailies and choose where to save it

The manual's own advice on getting a report worth sending:

> For the most useful dailies report, make sure clips have scene assignments, camera labels, and ratings before generating.

So rate and tag the day's footage — or run it through [Rapid Review](/guides/review-and-pick-selects-on-a-mac/) — before you generate, not after.

### A shorter version for a quick message

If you just need a wrap-up to paste into a text or an email at the end of the day, Workflow → Plan & Deliver → Day Summary… is faster than a full dailies report: pick a date, and it covers every clip imported that day (by import date, not capture date) — clip count, total duration and size, cameras, categories, how many are favorited or marked Hero, and any flagged Clipping, Low, Silent or Missing. Click Copy to put a plain-text version on the clipboard. For a printable per-scene breakdown, Generate Dailies is still the one to use.

## The hand-off file for an editor

A dailies report is for reading. A hand-off file is for an editor's software to open. MediaFlowSwift writes those from three different commands, and which one to use depends on the editor:

- **Final Cut Pro** — NLE Template Export with the Final Cut Pro target. It's the richest file: a library, events and keyword collections built from fields you choose, markers, notes, ratings and an optional empty timeline.
- **DaVinci Resolve** — Resolve imports FCPXML through File → Import → Timeline, but the version MediaFlowSwift writes may be newer than the one your Resolve accepts, so try the Final Cut Pro target on a small project first. The DaVinci Resolve target writes an edit decision list (.edl) instead, which carries much less.
- **Adobe Premiere Pro** — there is no Premiere Pro target yet. Premiere Pro can't open a Final Cut Pro .fcpxml file directly; Adobe's own help says to convert it first with a tool such as XtoCC, then import the converted XML. What survives that conversion is up to the converter, not MediaFlowSwift.
- **Any other tool, or a spreadsheet** — NLE Template Export with the CSV (Universal) target, or Report → CSV or EDL CSV.

What actually travels in an .edl is worth knowing before you promise your editor more than it carries:

> An EDL carries no file paths, so the editor must already have the clips to match the cuts against. Tags, select status and audio flags are not in the file at all.

The Final Cut Pro export is the one built to carry your organization — categories, scenes, ratings and notes — across to the editor intact. The manual says as much directly:

> For more control over what an editor receives, use NLE Template Export instead of the two hand-off formats here.

### How to run NLE Template Export

1. Open a project with imported media
2. Choose Workflow → Plan & Deliver → NLE Template Export
3. Select your target: Final Cut Pro, DaVinci Resolve, or CSV
4. Set the organization, clip filter and metadata options
5. Click Preview to see the file MediaFlowSwift would write, if you like
6. Click Export… and choose where to save

## Read more

- [Dailies Report](/manual/reports/#dailies-report) — the Generate Dailies options and output formats, in full
- [Day Summary](/manual/reports/#day-summary) — the one-screen version for a quick message
- [Choosing an Export for Your Editor](/manual/reports/#choosing-an-export-for-your-editor) — every hand-off format and exactly what each one carries
- [NLE Template Export](/manual/reports/#nle-template-export) — the richest hand-off, step by step

## Other guides

- [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) — rate and tag clips before you generate a dailies report.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
