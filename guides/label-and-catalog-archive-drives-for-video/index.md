---
layout: guide
title: "How to Label and Catalog Your Archive Drives for Video"
description: "MediaFlowSwift numbers every archive drive and keeps a record of what's on it, so labeling your shelf of USB drives takes one sticker, not a spreadsheet."
published: "2026-10-13"
updated: 2026-10-19
permalink: /guides/label-and-catalog-archive-drives-for-video/
---
# How to Label and Catalog Your Archive Drives for Video

MediaFlowSwift numbers every archive drive it sets up — USB #0001, USB #0002, and so on — the moment you use it for the first time, and it keeps its own record of which project landed on which drive. The catalog you need already exists in the app; File → Manage Archive Volumes is where you read it. Numbering a drive and keeping a record of what's on it is the same instinct behind the production industry's own [ASC Media Hash List specification](https://github.com/ascmitc/mhl-specification), which formalizes how footage is tracked from one checked copy to the next.

## When does a drive get numbered?

Plug in a blank or unused drive and choose Workflow → Archive to USB…. A drive that's never been used shows as not initialized:

> A drive that has never been used shows "(not initialized)". Select it, give it an optional label such as "Interviews 2026", and click Set Up. MediaFlow assigns the next number, one no other Mac sharing your database can take, and writes it to the drive in a hidden marker file. Numbers are permanent.

That number — USB #0001, #0002, and up — stays with the drive for as long as you use it. It's written into a hidden file on the drive itself, not just stored in MediaFlowSwift's database, so the drive carries its own identity even if you ever reinstall or move to a new Mac.

## Put the number on the shelf too

The app-side number is only useful if it matches what's written on the drive's case. The manual's own advice:

> Label each drive on the outside with its USB number so the numbers in the app match the shelf.

A plain sticker with "USB #0007" is enough. From then on, finding a project means looking it up in MediaFlowSwift first, seeing which numbered drive it's on, then walking to the shelf and finding that number.

## Where can I see what's on each drive?

File → Manage Archive Volumes is the catalog itself:

> File → Manage Archive Volumes lists every registered drive with its number, label, used space, and whether it is currently connected. Select a volume to edit its label, see capacity and creation date, and view the projects archived on it with their sizes.

So for each drive you get its number, your own label, how full it is, and the full list of projects on it with their sizes — without needing to connect the drive to check. Once a project has been archived, the project window shows the connection too: the Archive segment of the pipeline strip names the volume the project went to ("USB #0007"), with the date.

## Every copy on the shelf is checked before it counts

Cataloging a drive is only useful if what's on it is trustworthy. Archive to USB doesn't just copy files over:

> Every file is read back from the drive after it is written and compared with its original by checksum, so a file damaged on the way — even one that kept its size — fails the archive rather than being recorded.

Nothing is marked as archived, and nothing goes into the catalog, until that check has passed for every file.

## What doesn't the catalog cover?

A numbered drive only catalogs what Archive to USB actually copies, and that's narrower than "the project": it's the project folder, specifically.

> Only the project folder is copied; media organized to a destination outside the project folder is not included.

Your project's destination can be any folder — a network share, an external drive, a RAID. So if clips were organized somewhere outside the project folder itself, they won't be on the numbered drive, even though the project that references them is. The Archive sheet tells you how many clips, and how much data, are outside the project folder before archiving goes ahead:

> 3 clips (12.4 GB) are organized outside this project's folder and will not be on the archive drive.

That count can include clips that are imported but not yet organized, or missing, not only clips organized elsewhere on purpose — the sheet gives you a count and a size, not a list of names. Worth knowing before you label a drive and shelve it.

## Projects too large for one drive still get tracked

When a project doesn't fit on a single drive, Split Across Drives plans which folders go where and asks for each drive by number as it needs it. Each drive still carries its own note identifying the project, so a restore later knows exactly which numbered drives to ask for, and in what order.

## Archiving the same project again doesn't confuse the catalog

Shoots often come back to the same project more than once — an additional day of pickups, say — and the catalog has to keep tracking the right drive without creating duplicates or silently overwriting anything:

> If the drive already holds an archive of the project, the new archive is written beside it and checked first. Only when every file has passed is the old archive replaced. If the new archive fails or you cancel, the old one is left exactly as it was.

MediaFlowSwift also protects against an accidental step backward:

> MediaFlow will not replace an archive with one that holds fewer files. If the project really has shrunk because you removed clips on purpose, archive it to a different drive, or remove the old archive from the drive yourself first.

Two different projects can share a name — two client shoots both called "Trip," say. Each drive's folder carries its own hidden note identifying which project it actually belongs to, so MediaFlowSwift never merges or overwrites the wrong one. Instead it archives beside it under a name like "Trip (2)" and records that in the catalog.

## It needs a database to keep the record

The catalog lives in MediaFlowSwift's shared database, which is why archiving needs one connected:

> Archiving needs the shared database to record volumes and projects.

If you don't have one set up yet, Archive to USB offers to make a plain database file on this Mac in one click — it stays local to your Mac, is not an account, and is not shared with anyone unless you later choose to put it on a network share so other Macs can use it too.

## Read more

- [Archiving a Project to USB](/manual/project-management/#archiving-a-project-to-usb) — the full archiving workflow, including splitting a project across more than one drive
- [Managing Archive Volumes](/manual/project-management/#managing-archive-volumes) — the drive catalog itself: numbers, labels, capacity and what's on each one
- [Restoring an Archived Project](/manual/project-management/#restoring-an-archived-project) — how MediaFlowSwift finds the right numbered drive again later

## Other guides

- [How to Automate Video File Organization on Your Mac](/guides/automate-video-file-organization-on-mac/) — Category and Camera folders, sorted the same way every time.
- [Footage Missing After Moving to an External Drive?](/guides/footage-missing-after-moving-to-external-drive/) — why clips show as missing, and the command that repoints them.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
