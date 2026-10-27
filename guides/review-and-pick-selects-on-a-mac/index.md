---
layout: guide
title: "How to Review Footage and Pick Your Selects on a Mac"
description: "Rapid Review plays, rates and rejects clips by keyboard. Smart Selects scores each one first, so you review in quality order, not import order."
published: "2026-10-13"
updated: "2026-10-20"
permalink: /guides/review-and-pick-selects-on-a-mac/
---
# How to Review Footage and Pick Your Selects on a Mac

To review footage and pick selects on a Mac with MediaFlowSwift, open Rapid Review (Workflow → Review, or Cmd+Opt+R) and work by keyboard. Press J/K/L to shuttle, 1–5 to rate, F to favorite, X to reject and C to mark a circle take. MediaFlowSwift then filters and sorts your clips by those ratings and tags.

Rapid Review sets the star rating, the Reject tag and the circle take. A Hero or Maybe tag is set from outside Review. Every one of them can be filtered and sorted afterward. The rest of this page covers what each key does, and how to get your best takes to the top of the pile before you start.

## What is Rapid Review for?

> Rapid Review is a focused review sheet for evaluating clips quickly. Use the keyboard to play, rate, favorite, reject and move through your footage without touching the mouse.

Press `?` at any time in Rapid Review for an on-screen list of the keys. The keys you'll use most:

- **J / K / L** — shuttle reverse / stop / forward, pressing repeatedly to speed up (1×, 2×, 4×, 8×)
- **1–5** — set a star rating; **0** clears it
- **F** — toggle favorite
- **X** — toggle Reject; **C** toggles circle take
- **A** — accept the category and camera MediaFlowSwift proposed for this clip at import; **R** marks it a reject candidate
- **Down / Up Arrow** — next / previous clip in the queue

J, K and L as play-reverse, stop and play-forward are a long-standing editing convention. Apple documents the three keys in its [Final Cut Pro keyboard shortcuts guide](https://support.apple.com/guide/final-cut-pro/keyboard-shortcuts-ver90ba5929/mac). Blackmagic Design lists the same three keys in its [DaVinci Resolve 11 keyboard shortcuts](https://documents.blackmagicdesign.com/SupportNotes/DaVinci_Resolve_11_Mac_Keyboard_Shortcuts.pdf).

With auto-advance on (the default; press T to toggle it), Rapid Review moves to the next clip after a short delay. Rating a clip, favoriting it or rejecting it triggers the move, and so does pressing A or R. Taking a favorite or Reject back off, clearing a rating, or pressing C keeps you on the clip instead. A double-tap then never skips you past a clip you're still deciding on.

## What do Hero, Maybe and Reject mean?

A star rating and a select status are two different things in MediaFlowSwift. A clip can have either, both, or neither. The select status sorts clips three ways:

> - Hero (green) — Best takes, definitely using these
> - Maybe (orange) — Worth reviewing again, possible B-roll
> - Reject (red) — Definitely not using. Stored as “Kill”, which is what it used to be called

Set the select status with Cmd+Shift+H / M / K. Maybe has no Review key; inside Review, X toggles Reject and C toggles circle take instead. Once a status is set, the Table view's Select column sorts by it, and the toolbar's filter menu can show just your Heroes or just your Rejects. The sidebar's Smart Groups adds Reject candidates (clips marked with R) and Unreviewed (clips with an import proposal nobody has confirmed).

## Narrow the queue before you open Review

Rapid Review works through whatever the main window's current filter shows. Set that filter first, rather than reviewing everything in import order:

> For the fastest selects workflow: click the Review segment of the pipeline strip to show only unrated clips, open Review, and use 1–5 to rate each clip.

Filtering by category, scene or camera first turns one long review session into several short, focused ones. Review all of today's interview clips, then all of the drone shots, instead of switching context every few clips.

## Let Smart Selects go first

Smart Selects scores every clip before you look at it, so you can review in quality order instead of import order:

> Smart Selects, once called AI Smart Selects, scores every clip on five measures and suggests a star rating. It runs on this Mac and needs no internet connection.

Smart Selects weighs sharpness, exposure, audio, a rough stability guess and composition. It then sorts the results by overall quality score. You accept ratings one clip at a time or click Accept All, and nothing is set until you do.

The one case worth knowing about:

> Sharpness analysis samples a single frame near the start of each clip. Clips that start out of focus but later become sharp may receive a lower sharpness score than expected.

A clip that racks focus in its first second can score lower than it deserves. Give a clip like that a second look before you trust the number over your own eyes, especially near your cutoff.

Smart Selects also proposes circle takes on its own:

> A clip that scores above 85% overall is proposed as a Circle Take. Nothing changes until you Accept that clip or click Accept All. Accepting a Circle Take also marks the clip Hero with five stars.

Run Smart Selects, accept what looks right, then open Rapid Review on what's left. Rapid Review is where you make the calls a score can't.

<figure class="guide-figure"><img src="/images/guides/review-and-pick-selects-on-a-mac.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Process diagram in four steps: 1, narrow the queue by filtering by category, scene or camera, or by showing unrated clips; 2, optionally run Smart Selects, which scores five measures and suggests ratings you accept; 3, review in Rapid Review with J/K/L to shuttle, 1–5 to rate, F to favorite, X to reject and C for a circle take; 4, sort and filter by star rating and by select status Hero, Maybe or Reject. A note says rating and select-status changes undo with Edit, Undo (Cmd+Z)." loading="lazy"><figcaption>The selects workflow in MediaFlowSwift: narrow the queue, let Smart Selects score it, rate by keyboard in Rapid Review, then sort by what you decided.</figcaption></figure>

## Can I undo these changes?

Category, rating and select-status changes in MediaFlowSwift go through Edit → Undo (Cmd+Z), including changes made with the Rapid Review shortcuts. Each undo step is named for what it did: "Undo Rate ★4 on 12 Clips", for instance. Clear a rating with Cmd+0 or Edit → Set Rating → Clear Rating. Clear a status with Edit → Select → Clear Status, on as many selected clips as you like.

## Read more

- [Reviewing Clips with the Keyboard](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard) — every Rapid Review key, and how auto-advance decides when to move on
- [Star Ratings & Selects](/manual/managing-clips/#star-ratings--selects) — ratings, Hero/Maybe/Reject, and where each one shows up in the app
- [Smart Selects](/manual/organizing-media/#smart-selects) — the five quality measures and how circle takes get proposed
- [Undo and Redo](/manual/managing-clips/#undo-and-redo) — what can and can't be undone after a review session

## Other guides

- [How to Create a Dailies Report and a Hand-Off File](/guides/dailies-report-and-hand-off-file-for-editor/) — circle takes and ratings, laid out by shooting day.
- [How to Find a Clip by What Was Said in It on a Mac](/guides/search-video-by-what-was-said/) — finding a clip by a line in it, not just its filename.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 13 or later, on a Mac with Apple silicon.
