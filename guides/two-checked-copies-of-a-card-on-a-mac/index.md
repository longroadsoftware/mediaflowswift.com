---
layout: guide
title: "How to Keep Two Checked Copies of a Memory Card on a Mac"
description: "Import and organize a card to your working drive, then archive the project to a second drive. Two checksum-verified copies, made one after the other."
published: "2026-10-13"
updated: 2026-10-19
permalink: /guides/two-checked-copies-of-a-card-on-a-mac/
---
# How to Keep Two Checked Copies of a Memory Card on a Mac

Import and organize the card to your working drive first, then archive that project to a second drive. That gives you two independently checksum-verified copies — made one after the other, not at the same time — and MediaFlowSwift checks each one before it counts.

This isn't a single button. It's two separate, verified steps, run in order, and it's worth understanding what each one actually proves. The pattern mirrors the chain-of-custody approach formalized in the production industry's own [ASC Media Hash List specification](https://github.com/ascmitc/mhl-specification), which production and post houses use to prove that nothing changed between successive copies of a shoot's media.

## Copy one: import, then organize

Importing is the first checked copy. As MediaFlowSwift copies each file off the card, it fingerprints the original and checks the result:

> As each file is copied, MediaFlow computes its SHA-256 checksum from the card, writes the copy to the drive, then reads the whole copy back from the drive, not from the Mac's memory, and compares the two. A copy that doesn't match is made once more; if it fails again, the import stops and names the file. Importing never deletes anything from the card.

SHA-256 is a cryptographic hash function standardized by NIST ([FIPS 180-4, Secure Hash Standard](https://nvlpubs.nist.gov/nistpubs/fips/nist.fips.180-4.pdf)); if even one bit differs between the original and the copy, the two checksums won't match.

Organize, which files that imported copy into its Category and Camera folder at your project's destination, checks it again against the same checksum:

> As MediaFlow copies a clip it computes a checksum of the original (SHA-256, a fingerprint of the file's contents). It finishes writing the copy to the destination before it checks it... On (the default; slower, safest) — the copy is read back in full from the destination. Its size and its SHA-256 must both match the original.

So by the time a clip reads "At destination," it's usually been checked twice: once against the card at import, once against that same checksum at organize. There's one exception. If the card was imported straight onto the same drive that holds your project's destination, Organize doesn't make a second copy at all — it just renames the file into place:

> A clip moved within one drive (imported onto the destination's own drive) is renamed, not copied, so nothing is read back, and it is saved as not checked in full.

That clip isn't checked a second time, but nothing is unproved either:

> The chain stays proved, because the bytes never move and the import's copy was proved.

## Copy two: archive to a second drive

The second checked copy comes from archiving to a separate USB drive — but only the project folder, specifically:

> Archive to USB frees your working storage by copying a finished project to a drive you can put on a shelf. It copies the whole project folder to a removable drive, checks the copy, and records where it went in the shared database.

That matters because your project's destination doesn't have to be inside the project folder — it can be any folder, including a NAS, an external drive, or a RAID. If it's outside the project folder, Archive to USB won't pick those clips up:

> Only the project folder is copied; media organized to a destination outside the project folder is not included.

MediaFlowSwift warns you before archiving goes ahead, with how many clips and how much data are outside the project folder, so this isn't a surprise:

> 3 clips (12.4 GB) are organized outside this project's folder and will not be on the archive drive.

If you see that warning and want those clips on the archive drive too, changing the project's destination on its own will not move them:

> Changing the destination never copies, moves or deletes a file. On its own it changes only where new organizing goes; clips you organized earlier still point at the files in the old folder unless you accept the offer described next.

What to do instead:

1. In the Finder, copy the organized folders into the project folder, keeping the folder layout they already have. Copy, don't move — a move would take away your only other copy of those clips before anything has checked the new one.
2. Choose Workflow → Repair → Change destination folder… and pick the folder you copied them into. MediaFlowSwift looks for each organized clip there, in the same folder it had under the old destination, and asks whether to point the project at what it finds.
3. For any clip it doesn't find, choose Workflow → Repair → Relink Missing Media…, then Workflow → Repair → Re-check files, and confirm the Where column shows nothing still missing.

Step 2 is not a name-and-size match:

> Same folder and same size is not proof that a file is the one you organized: cameras that split long recordings into chapters produce files of exactly the same size. So a clip that has a checksum recorded from when it was organized is read in full, and followed only if its contents are identical.

Keep the original folders until that check has finished. Once every clip lives inside the project folder, archiving copies everything, and that copy gets the same full check as the two before it:

> Every file is read back from the drive after it is written and compared with its original by checksum, so a file damaged on the way — even one that kept its size — fails the archive rather than being recorded.

With the destination inside the project folder, your working drive holds one verified copy, and the archive drive holds a second, independently verified one.

## One after another, not at once

MediaFlowSwift does not write a card to two drives at the same time. The sequence above is deliberate and sequential: card → working destination, checked; then working destination → archive drive, checked again. Each copy has to finish and pass its own check before the next one starts. The end result is the thing simultaneous offload is usually for: two checked copies on two drives. You get there a step at a time, and the card stays untouched until you clear it yourself.

## If a copy doesn't check out

Both steps retry automatically before they give up, and here they part ways. At import, a copy that doesn't match is made once more, and a second failure stops the whole import and names the file:

> A copy that doesn't match is made once more; if it fails again, the import stops and names the file. Importing never deletes anything from the card.

At organize, a second failure fails that one clip and leaves everything else alone:

> If the check fails, the copy is deleted and made again once; if it fails a second time, that clip is reported as failed and its source is left alone.

The same applies on the archive side. A file that fails its read-back comparison fails the archive outright, rather than being recorded as if it were fine. That way you never end up with a "verified" copy on the shelf that actually differs from the original.

## The card itself is a third copy, for a while

Nothing says you have to erase the card the moment you've made these two copies. Clear Card is a separate, deliberate step, and it runs its own check before it will delete anything:

> Clear Card reads each organized copy back in full and matches it against the recorded checksum before it deletes the card file. It never relies on the check made at organize time.

So in practice you often have three copies for a while — card, working drive, archive drive — until you choose to clear the card yourself.

## Where doesn't this checksum chain apply?

This checksum chain is specifically for cards, drives and folders. Importing from an iPhone or camera over USB works differently, because MediaFlowSwift can't see the original file the way it can on a card:

> Image Capture hands each file over itself, so MediaFlow can't compare the copy with the file on the phone, as it does for a card.

The manual is direct about what that means for the import record: phones get no such line. If you need two checked copies of footage that came off a phone, there's no equivalent claim to make here — only cards, drives and folders go through the full chain described above.

## Read more

- [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder) — the import checksum step in full
- [How MediaFlow Verifies Copies](/manual/organizing-media/#how-mediaflow-verifies-copies) — what Organize, Clear Card and Free Up Space each check, and when
- [Archiving a Project to USB](/manual/project-management/#archiving-a-project-to-usb) — the second checked copy, on a separate drive
- [Clear Card](/manual/organizing-media/#clear-card) — what has to be true before the card itself is cleared
- [Change destination folder](/manual/organizing-media/#change-destination-folder) — pointing a project at organized media you have copied somewhere else

## Other guides

- [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/) — what the checksum check proves before you format.
- [How to Label and Catalog Your Archive Drives for Video](/guides/label-and-catalog-archive-drives-for-video/) — numbered drives, and a record of what went where.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
