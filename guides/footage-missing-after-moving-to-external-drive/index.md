---
layout: guide
title: "Footage Missing After Moving to an External Drive?"
description: "MediaFlowSwift showing clips missing after moving your library to a new drive? Run Library Moved to repoint every project. Nothing is copied or deleted."
published: "2026-10-13"
updated: 2026-10-20
permalink: /guides/footage-missing-after-moving-to-external-drive/
---
# Footage Missing After Moving to an External Drive?

Your clips aren't lost: your MediaFlowSwift projects still point at the old location. Choose Workflow → Repair → Library Moved…, set the old and new folders, and click Check and Point. MediaFlowSwift points every project at the new drive and checks each clip before it changes anything. Nothing is copied, moved or deleted on either drive.

Library Moved is built for one case. You copied your whole projects folder to a new drive or network share yourself, by hand in the Finder, and every project still points at the old location. Moving a project through MediaFlowSwift itself is a different command (Move Project).

## Why do clips read Missing, not Not at destination?

Before you've run Library Moved, a clip whose file has moved reads a plain red X — Missing:

> A red X in the Where column means MediaFlow cannot find the file; usually a drive or share is not mounted, or the file moved.

If the old drive itself isn't connected (unplugged, or not yet mounted), clips read Volume not connected instead. Nothing is called missing until the drive is back:

> Volume not connected — the drive or share the path names is not mounted right now. The file is neither checked nor called missing; its last known state stands until the drive is back.

An ejected drive can be mounted again with the Mount button in Disk Utility, as [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/mount-a-volume-thats-been-ejected-dskutl1027/mac) explains. A network share is mounted from the Finder with Go → Connect to Server ([Apple's Mac User Guide](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac)).

Not at destination is a different symptom from Missing. It means the file is somewhere other than the project's destination and isn't on a card, such as the folder you imported from or another drive.

> Not at destination — the file is somewhere other than the destination and not on a card, such as the folder you imported from or another drive. It is not lost; hover over it to see which drive. If a whole project reads this way after a library was moved, you may have opened the old copy of the project: see After Moving Your Library to a New Drive.

So check which badge you're actually seeing first. Missing means the files are no longer where the project expects them, and MediaFlowSwift hasn't been pointed at the new location yet. Volume not connected means the old drive is unplugged or not mounted. The steps below fix both.

If you copied the library and the old drive is still connected, the originals are still at the old paths. Clips may then read At destination or Not at destination rather than Missing until the old copy is gone.

Not at destination across a whole project *may* mean you've opened the old copy of the project instead. On the Mac that ran Library Moved, opening that old file says "This is an old copy" and offers to open the current one; accept that offer. On another Mac, or for a library moved before this version, choose Library Moved again with the same two folders and click Find Projects. Find Projects only notes which projects are already followed and changes nothing, so it's safe to run again. See [The Old Copy of a Project](/manual/project-management/#the-old-copy-of-a-project) for the full picture.

## How do I fix it with Library Moved?

1. Connect both drives — the old one and the new one — at the same time
2. Choose Workflow → Repair → Library Moved…
3. Set "Was in" to the folder your projects used to be in, and "Is now in" to the folder that holds the same projects now
4. Click Find Projects. Nothing is changed yet. MediaFlowSwift just lists what it found, and how many of each project's clips it sees at the same place under the new folder
5. Click Check and Point. Projects are checked one at a time, and you can stop partway through

If you share a database with other Macs, the database has to be connected before Check and Point will start. The manual gives the reason: only the database records where an archived project was archived to. That record is carried into the project before anything is written.

Here's what "checked" means, in the manual's own words:

> A clip is followed only if a file is at the same place under the new folder and is the same size. If the clip was checksummed when it was organized, the file at the new place is also read in full and compared, because Clear Card later trusts that checksum: same name and same size is not proof. A clip with no recorded checksum is followed on its size. A clip that is missing, a different size, or different inside keeps pointing where it did and is listed.

The checksum Library Moved compares is the SHA-256 one MediaFlowSwift records when it organizes a clip. [FIPS 180-4](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf) is the standard that defines SHA-256.

The last sentence of that quote matters: Library Moved won't just assume a same-named file in the same spot is the right one. For a clip organized with checksums on, Library Moved reads the whole file again and compares it before it repoints the project. Clips it can't confirm are left exactly as they were, and listed. You then know which ones still need attention.

<figure class="guide-figure"><img src="/images/guides/footage-missing-after-moving-to-external-drive.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Diagram of the Library Moved steps: copy the projects folder to a new drive in the Finder; choose Library Moved and set Was in and Is now in; Find Projects lists what it finds and changes nothing; Check and Point follows a clip only at the same place and size, reading it in full when a checksum was recorded; the project then points at the new drive. A clip that fails keeps its old path and is listed, and nothing is copied, moved or deleted." loading="lazy"><figcaption>Library Moved, step by step. Only clips that pass the check are repointed.</figcaption></figure>

## What actually changes on disk?

Nothing, until a clip passes its check:

> Nothing is copied, moved or deleted on either drive, and the old project file is not touched. Keep the old drive until you are satisfied; MediaFlowSwift does not use it again for a project that was fully followed.

The project itself is saved at the new location once its clips are confirmed, along with its destination and any proxies kept with it. The old project file keeps working too. Open it later on the Mac that ran Library Moved, and MediaFlowSwift says "This is an old copy" and offers to open the current one instead. Another Mac doesn't know that yet. It won't until Library Moved has been run on it the same way.

## If it's one clip, not a whole library

Library Moved is for a library you moved in one go. If just a handful of clips are missing, say a few files you moved by hand, right-click a missing clip and choose Relink…, then pick the file yourself. The same menu offers Relink Missing Media…, which scans a whole folder for several missing clips by filename. When a recorded checksum exists, Relink Missing Media matches by content against it, not just name and size.

## Read more

- [After Moving Your Library to a New Drive](/manual/project-management/#after-moving-your-library-to-a-new-drive) — the full Library Moved walkthrough, including what happens with a shared database and an editing-drive copy
- [Re-check files](/manual/organizing-media/#re-check-files) — the source of the "Not at destination" quote above
- [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media) — fixing one clip, or a handful, instead of a whole library
- [Clips Showing as Missing](/manual/troubleshooting/#clips-showing-as-missing) — what a red X actually means and the ordinary causes
- [Understanding the Where Column](/manual/troubleshooting/#understanding-the-where-column) — every badge MediaFlowSwift shows and what each one means

## Other guides

- [How to Label and Catalog Your Archive Drives for Video](/guides/label-and-catalog-archive-drives-for-video/) — numbered drives, and a record of what went where.
- [How to Automate Video File Organization on Your Mac](/guides/automate-video-file-organization-on-mac/) — Category and Camera folders, sorted the same way every time.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
