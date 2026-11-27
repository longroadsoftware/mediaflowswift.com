---
layout: guide
title: "How to Avoid Importing the Same Footage Twice on a Mac"
description: "MediaFlowSwift marks a card file Duplicate when it matches a clip already in the project by name and size, and skips it. Here's what counts as a match, and what doesn't."
published: "2026-11-27"
updated: "2026-11-27"
permalink: /guides/avoid-importing-duplicate-footage-twice-mac/
---
# How to Avoid Importing the Same Footage Twice on a Mac

If you import a card twice, by mistake or on purpose, MediaFlowSwift marks the files already in the project Duplicate and leaves them out. You don't have to spot the repeats yourself or compare folders by hand. The match is made on the file's name and size, not when you imported it, so it works whether the second import is minutes later or from the same card weeks on.

This only applies to files you bring in with File → Import…. It doesn't scan a drive for files you copied in some other way, and it can't tell two different clips apart if a camera happened to give them the same name and the same size.

## What makes MediaFlowSwift call a file a duplicate?

Here's the rule, from the manual:

> Files that are already in the project are marked Duplicate in the list. A file counts as already in the project when a clip there has the same name as the card file and exactly the same size, so a different clip that only shares its name, such as C0001.MP4 from a second card, is not marked. Two different clips that have the same name and exactly the same size, from two cards, are still marked Duplicate. A clip imported without a recorded size is still compared by name alone. A line at the bottom of the sheet says how many duplicates were detected, and they are skipped when you import.

So name and size both have to match. A camera that restarts its numbering on every card, as most do, will often hand you two different clips both called C0001.MP4. If they happen to be the same size too, MediaFlowSwift treats the second one as the same file and skips it. That's rare, but it's why the check isn't foolproof: it's a name-and-size match, not a byte-for-byte one.

Duplicates are skipped automatically. You don't untick anything, and nothing on the card is touched: Importing never deletes or changes files on the card. The Import sheet tells you the count, so you can see at a glance that your re-import of a card only brought in what was new.

## What if the same clip belongs in two projects?

That's a different case, and MediaFlowSwift treats it differently:

> A file already imported into another project is marked with that project's name, such as In Beach Day, or In Beach Day + 2 more when several projects have it; point at it to see them all. It is not skipped, because a clip can belong to two projects on purpose: untick it if you don't want it in this project too. A card, drive or folder file counts when a clip in the other project has its name and exactly its size, and an iPhone item when one has its name, size and the date the phone reports. With a shared database, every project in the database is looked at; without one, the projects in this Mac's projects list.

A clip belonging to two projects on purpose covers things like b-roll you shot once and want in both a short cut and the full documentary. MediaFlowSwift tells you it's already elsewhere, but leaves the choice to you: leave it ticked to bring it into this project too, or untick it to skip it here. Either way, nothing about the other project changes.

With a shared database on Studio Pro, this check looks at every project any Mac on the database has, not just projects on the Mac you're importing on. Without a shared database, it only knows about the projects already in this Mac's own projects list.

## Does importing from an iPhone work the same way?

Mostly, with one more thing checked. From the manual's iPhone import steps:

> An item already in the project is marked Duplicate and is skipped, matched by name, size and the date the phone reports for it; an item imported before this matching was added, or a card, drive or folder clip that happens to share its name, is still compared by name alone.

An iPhone match adds the date the phone reports for the item, on top of name and size, which makes an accidental false match less likely than with a card. MediaFlowSwift talks to the phone through Apple's [Image Capture framework](https://developer.apple.com/documentation/imagecaptureframework), which is also why a locked iPhone has to be unlocked and trusted before an import can see what's on it.

## If you're not sure a card is fully imported

The duplicate count at the bottom of the Import sheet is the quickest check: import the card again, and a number close to the card's full file count tells you the first import already got everything. If you want to confirm a specific clip made it into the project with a verified copy, not just that MediaFlowSwift recognized the file, that's a separate question answered by the Where column. See [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/) for what each badge there means.

## Read more

- [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder) — the full import walkthrough, including the Duplicates section quoted above
- [Importing from iPhone or Camera](/manual/importing-media/#importing-from-iphone-or-camera) — how the phone's reported date factors into the match
- [Where Imports Go](/manual/importing-media/#where-imports-go) — where a duplicate check looks, and how Also copy to interacts with it

## Other guides

- [How to Keep Two Checked Copies of a Memory Card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/) — a second copy as you import, or archived to a second drive later.
- [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/) — what gets checked before Clear Card will touch a card.

[All guides](/guides/) — the full list.

## Check your own cards for duplicates

Duplicate detection on import ships in MediaFlowSwift, the app this guide is about. [Download it](/download.html); the full app runs 14 days with no card asked for, on an Apple silicon or Intel Mac with macOS 13 or later.
