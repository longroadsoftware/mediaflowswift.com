---
layout: guide
title: "How to Label and Catalog Your Archive Drives for Video"
description: "MediaFlowSwift numbers every archive drive and keeps a record of what's on it, so labeling your shelf of USB drives takes one sticker, not a spreadsheet."
published: "2026-10-13"
updated: 2026-10-20
permalink: /guides/label-and-catalog-archive-drives-for-video/
---
# How to Label and Catalog Your Archive Drives for Video

Let MediaFlowSwift number the drives and keep the catalog. Archive to USB gives each drive a permanent number (USB #0001, USB #0002, and so on) when you set it up. MediaFlowSwift then records which project landed on which drive. File → Manage Archive Volumes shows that catalog, and one sticker with the number goes on the case.

The catalog you need already exists in the app, so no spreadsheet is required. Numbering a drive and keeping a record of what's on it is the same instinct behind the production industry's own [ASC Media Hash List specification](https://github.com/ascmitc/mhl-specification). ASC MHL formalizes how footage is tracked from one checked copy to the next.

## When does a drive get numbered?

Plug in a blank or unused drive and choose Workflow → Archive to USB…. A drive that's never been used shows as not initialized:

> A drive that has never been used shows "(not initialized)". Select it, give it an optional label such as "Interviews 2026", and click Set Up. MediaFlow assigns the next number, one no other Mac sharing your database can take, and writes it to the drive in a hidden marker file. Numbers are permanent.

The USB number (#0001, #0002, and up) stays with the drive for as long as you use it. MediaFlowSwift writes the number into a hidden file on the drive itself, not just into its database. The drive carries its own identity even if you ever reinstall or move to a new Mac.

## Put the number on the shelf too

The app-side number is only useful if it matches what's written on the drive's case. The manual's own advice:

> Label each drive on the outside with its USB number so the numbers in the app match the shelf.

A plain sticker with "USB #0007" is enough. From then on, finding a project means looking it up in MediaFlowSwift first and seeing which numbered drive it's on. Then you walk to the shelf and find that number.

The Library of Congress gives similar advice for keeping personal digital video. Its [Keeping Personal Digital Video](https://digitalpreservation.gov/personalarchiving/video.html) page says to write a brief description of your folder structure and videos, and to keep a copy with your important papers. The same page suggests checking saved video files at least once a year to make sure they still read.

## Where can I see what's on each drive?

File → Manage Archive Volumes is the catalog itself:

> File → Manage Archive Volumes lists every registered drive with its number, label, used space, and whether it is currently connected. Select a volume to edit its label, see capacity and creation date, and view the projects archived on it with their sizes.

For each drive, Manage Archive Volumes gives you its number, your own label, and how full it is. It also lists every project on the drive with its size, without needing to connect the drive. Once a project has been archived, the project window shows the link too. The Archive segment of the pipeline strip names the volume the project went to ("USB #0007"), with the date.

## Every copy on the shelf is checked before it counts

Cataloging a drive is only useful if what's on it is trustworthy. Archive to USB doesn't just copy files over:

> Every file is read back from the drive after it is written and compared with its original by checksum, so a file damaged on the way — even one that kept its size — fails the archive rather than being recorded.

Nothing is marked as archived, and nothing goes into the catalog, until that check has passed for every file.

<figure class="guide-figure"><img src="/images/guides/label-and-catalog-archive-drives-for-video.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Diagram of how an archive drive is numbered and cataloged: an unused drive shows not initialized; Set Up gives it the next number, such as USB #0007, written to the drive; Archive to USB copies the project folder, reads it back and compares checksums; File, Manage Archive Volumes lists the drive and its projects; a sticker with USB #0007 goes on the case. Nothing is recorded until every file passes." loading="lazy"><figcaption>From unused drive to numbered, cataloged and labeled. The record lives in MediaFlowSwift's database.</figcaption></figure>

## What doesn't the catalog cover?

A numbered drive only catalogs what Archive to USB actually copies. That's narrower than "the project": it's the project folder, specifically.

> Only the project folder is copied; media organized to a destination outside the project folder is not included.

Your project's destination can be any folder: a network share, an external drive, a RAID. If clips were organized somewhere outside the project folder, they won't be on the numbered drive, even though the project that references them is. The Archive sheet tells you how many clips, and how much data, are outside the project folder before archiving goes ahead:

> 3 clips (12.4 GB) are organized outside this project's folder and will not be on the archive drive.

The outside-the-folder count can include clips that are imported but not yet organized, or missing, not only clips organized elsewhere on purpose. The Archive sheet gives you a count and a size, not a list of names. Check the count before you label a drive and shelve it.

## Projects too large for one drive still get tracked

When a project doesn't fit on a single drive, Split Across Drives plans which folders go where. Split Across Drives asks for each drive by number as it needs it. Each drive still carries its own note identifying the project. A restore later knows exactly which numbered drives to ask for, and in what order.

## Archiving the same project again doesn't confuse the catalog

Shoots often come back to the same project more than once, for an extra day of pickups, say. The catalog has to keep tracking the right drive without creating duplicates or silently overwriting anything:

> If the drive already holds an archive of the project, the new archive is written beside it and checked first. Only when every file has passed is the old archive replaced. If the new archive fails or you cancel, the old one is left exactly as it was.

MediaFlowSwift also protects against an accidental step backward:

> MediaFlow will not replace an archive with one that holds fewer files. If the project really has shrunk because you removed clips on purpose, archive it to a different drive, or remove the old archive from the drive yourself first.

Two different projects can share a name, such as two client shoots both called "Trip." Each drive's folder carries its own hidden note identifying which project it actually belongs to, so MediaFlowSwift never merges or overwrites the wrong one. Instead MediaFlowSwift archives beside it under a name like "Trip (2)" and records that in the catalog.

## It needs a database to keep the record

The catalog lives in MediaFlowSwift's shared database, which is why archiving needs one connected:

> Archiving needs the shared database to record volumes and projects.

If you don't have a database set up yet, Archive to USB offers to make a plain database file on this Mac in one click. The database file stays local to your Mac and is not an account. It is not shared with anyone unless you later choose to put it on a network share so other Macs can use it too.

## Read more

- [Archiving a Project to USB](/manual/project-management/#archiving-a-project-to-usb) — the full archiving workflow, including splitting a project across more than one drive
- [Managing Archive Volumes](/manual/project-management/#managing-archive-volumes) — the drive catalog itself: numbers, labels, capacity and what's on each one
- [Restoring an Archived Project](/manual/project-management/#restoring-an-archived-project) — how MediaFlowSwift finds the right numbered drive again later

## Other guides

- [How to Automate Video File Organization on Your Mac](/guides/automate-video-file-organization-on-mac/) — Category and Camera folders, sorted the same way every time.
- [Footage Missing After Moving to an External Drive?](/guides/footage-missing-after-moving-to-external-drive/) — why clips show as missing, and the command that repoints them.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 13 or later, on a Mac with Apple silicon.
