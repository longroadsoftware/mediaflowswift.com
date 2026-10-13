---
layout: guide
title: "Is It Safe to Erase Your Card After Importing on a Mac?"
description: "Checksums, not playback, prove a copy is safe. See how MediaFlowSwift checks a copy at import, at organize, and once more before Clear Card erases a card."
permalink: /guides/verify-footage-copied-before-erasing-card/
---
# Is It Safe to Erase Your Card After Importing on a Mac?

Yes — once every clip on the card has an organized copy that's been read back in full and matched against a checksum. A clip that plays for a few seconds doesn't tell you that; only a checksum compare does.

You just finished a shoot and want the card back for tomorrow. Here's exactly what has to be true before that's safe, and how MediaFlowSwift gets you there.

## The real risk: a copy that looks right but isn't

A copy can land with the right file name and the right file size and still have different data inside, because a few bits got dropped somewhere along the way. The file will often still open and play for a few seconds. You might not notice anything wrong until you're editing weeks later and a clip stutters, won't open, or goes black partway through.

Dragging files in Finder tells you the copy finished. It doesn't tell you the copy is intact — Finder doesn't compare what landed on the drive against what's on the card.

## What actually proves a copy is good

A real check compares a fingerprint of the copy with a fingerprint of the original — a checksum, calculated from every byte of the file. If the two match, the files are identical. If they don't, something went wrong in the copy, and the original is still sitting on the card to try again.

## How MediaFlowSwift checks a copy before you can erase a card

Clearing a card in MediaFlowSwift is a separate, deliberate step from importing — and it only offers to delete clips that already have an organized copy it can vouch for. Three checked steps get a clip there:

1. **Import.** As each file is copied, MediaFlowSwift computes its SHA-256 checksum from the card, writes the copy to the drive, then reads the whole copy back from the drive — not from the Mac's memory — and compares the two. A copy that doesn't match is made once more; if it fails again, the import stops and names the file. Import never deletes anything from the card.
2. **Organize.** MediaFlowSwift files each clip into its Category and Camera folder at the project's destination, and checks that copy against the checksum taken from the card at import.
3. **Clear Card.** When you confirm, Clear Card reads each organized copy back in full and matches it against the recorded checksum before it deletes the card file. It never relies on the check made at organize time — it checks again, from scratch, right before anything is deleted.

Formatting the card afterwards happens in the camera, not in MediaFlowSwift, so there is nothing for the app to check at that point. What it checks is everything that came before it.

The last of the three steps is the one worth noticing: Clear Card doesn't trust the earlier checks. It re-reads and re-compares every organized copy itself, immediately before it lets you delete anything.

The "Clear Card…" button appears beside Eject in the Import sheet, and the same action is available from the menu as File → Clear Card….

One exception is worth knowing on day one. On a card the camera laid out itself — a Sony card with a PRIVATE/M4ROOT folder, say — Clear Card deletes nothing at all. It checks every clip on the card and then tells you when the card is safe to format in the camera, which is where you would format that card anyway.

## Why the checks aren't all the same

Import's checksum check is always full — there's no setting for it. Clear Card's is always full too. The one step that can be lighter is Organize:

- **Organize** is governed by a setting: Settings › Storage › Organize Media has "Verify organized copies by reading them back (slower, safest)." With it off, MediaFlowSwift checks the size of the copy plus three 1 MB samples at the start, middle and end — much faster over a network, but it won't catch corruption outside those sampled ranges.
- **Import** and **Clear Card** both read the whole file back, whatever that setting says.

So Organize is the only step in the chain that can run on samples rather than a full read.

The manual's own advice: leave read-back verification on if you plan to clear cards. Clear Card is thorough no matter what, but letting Organize run on samples only means more gets caught later, in editing, instead of here.

This also means a verified copy and an organized copy aren't quite the same promise at every step. Only cards, drives and folders go through this checksum chain — importing from a phone or camera over USB works differently, and MediaFlowSwift can't make the same claim there.

## If a copy fails

Don't erase the card. Try the import again — a failed check usually means a bad read, a loose cable, or a card reader hiccup, and a second attempt from the same original often succeeds. If it keeps failing, the card or the connection is worth checking before you trust anything else from that shoot.

## Read more

- [How MediaFlowSwift verifies copies](/manual/organizing-media/#how-mediaflow-verifies-copies) — the full explanation of what each check proves.
- [Clear Card](/manual/organizing-media/#clear-card) — how clearing a card works.
- [Importing media](/manual/importing-media/) — the import steps in full.
- [Download MediaFlowSwift](/download.html) to try it.
