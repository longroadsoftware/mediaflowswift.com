---
layout: guide
title: "Footage Missing After Moving to an External Drive?"
description: "MediaFlowSwift showing clips as missing after you moved your library to a new drive? Run Library Moved to repoint every project. Nothing is copied or deleted."
permalink: /guides/footage-missing-after-moving-to-external-drive/
---
# Footage Missing After Moving to an External Drive?

Your clips aren't lost — MediaFlowSwift just hasn't been told they moved. Choose Workflow → Repair → Library Moved… and it points every project at the new drive, checking each file before it changes anything.

You copied your whole projects folder to a new drive or network share yourself, by hand in the Finder, and now every project still points at the old location. That's exactly the case Library Moved is built for — as opposed to moving a project through MediaFlowSwift itself, which is a different command (Move Project).

## Why clips read Missing, not Not at destination

Before you've run Library Moved, a clip whose file has moved reads a plain red X — Missing:

> A red X in the Where column means MediaFlow cannot find the file; usually a drive or share is not mounted, or the file moved.

If the old drive itself isn't connected — unplugged, or not yet mounted — clips read Volume not connected instead, and nothing is called missing until the drive is back:

> Volume not connected — the drive or share the path names is not mounted right now. The file is neither checked nor called missing; its last known state stands until the drive is back.

Not at destination is a different symptom, and it shows up *after* Library Moved has already done its job, not before. It's what the old project file reads once the current copy has already been repointed to the new drive:

> If a whole project reads this way after a library was moved, you may have opened the old copy of the project: see After Moving Your Library to a New Drive.

So check what you're actually seeing. Missing, or Volume not connected if the old drive is unplugged, means you haven't run Library Moved yet — see the steps below. Not at destination across a whole project means you've opened the *old* copy after Library Moved already ran: don't run it again — open the current copy instead. On the Mac that ran Library Moved, opening that old file says "This is an old copy" and offers to open the current one; accept that offer.

## Fix it with Library Moved

1. Connect both drives — the old one and the new one — at the same time
2. Choose Workflow → Repair → Library Moved…
3. Set "Was in" to the folder your projects used to be in, and "Is now in" to the folder that holds the same projects now
4. Click Find Projects. Nothing is changed yet — MediaFlowSwift just lists what it found, and how many of each project's clips it sees at the same place under the new folder
5. Click Check and Point. Projects are checked one at a time, and you can stop partway through

If you share a database with other Macs, it has to be connected before Check and Point will start. The manual gives the reason: only the database records where an archived project was archived to, and that record is carried into the project before anything is written.

Here's what "checked" means, in the manual's own words:

> A clip is followed only if a file is at the same place under the new folder and is the same size. If the clip was checksummed when it was organized, the file at the new place is also read in full and compared, because Clear Card later trusts that checksum: same name and same size is not proof. A clip with no recorded checksum is followed on its size. A clip that is missing, a different size, or different inside keeps pointing where it did and is listed.

That last sentence matters: Library Moved won't just assume a same-named file in the same spot is the right one. For a clip that was organized with checksums on, it reads the whole file again and compares it before it will repoint the project. Clips it can't confirm are left exactly as they were, and listed, so you know which ones still need attention.

## What actually changes on disk

Nothing, until a clip passes its check:

> Nothing is copied, moved or deleted on either drive, and the old project file is not touched. Keep the old drive until you are satisfied; MediaFlowSwift does not use it again for a project that was fully followed.

The project itself is saved at the new location once its clips are confirmed, along with its destination and any proxies kept with it. The old project file keeps working too — open it later on the Mac that ran Library Moved and MediaFlowSwift says "This is an old copy" and offers to open the current one instead. Another Mac doesn't know that yet, and won't until Library Moved has been run on it the same way.

## If it's one clip, not a whole library

Library Moved is for a library you moved in one go. If just a handful of clips are missing — maybe you moved a few files by hand, separately from the rest — right-click a missing clip and choose Relink…, then pick the file yourself. The same menu offers Relink Missing Media…, which scans a whole folder for several missing clips by filename, matching by content against the recorded checksum when one exists, not just name and size.

## Read more

- [After Moving Your Library to a New Drive](/manual/project-management/#after-moving-your-library-to-a-new-drive) — the full Library Moved walkthrough, including what happens with a shared database and an editing-drive copy
- [Re-check files](/manual/organizing-media/#re-check-files) — the source of the "Not at destination" quote above
- [Relinking Missing Media](/manual/storage-maintenance/#relinking-missing-media) — fixing one clip, or a handful, instead of a whole library
- [Clips Showing as Missing](/manual/troubleshooting/#clips-showing-as-missing) — what a red X actually means and the ordinary causes
- [Understanding the Where Column](/manual/troubleshooting/#understanding-the-where-column) — every badge MediaFlowSwift shows and what each one means
