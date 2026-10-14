---
layout: guide
title: "Is It Safe to Erase Your Card After Importing on a Mac?"
description: "Checksums, not playback, prove a copy is safe. See how MediaFlowSwift checks a copy at import, at organize, and once more before Clear Card erases a card."
permalink: /guides/verify-footage-copied-before-erasing-card/
---
# Is It Safe to Erase Your Card After Importing on a Mac?

Yes to the clips MediaFlowSwift imported and checked — once each one has an organized copy that's been read back in full and matched against a checksum. On an ordinary card, Clear Card only scans the DCIM folder; on a card the camera laid out itself (Sony PRIVATE/M4ROOT, AVCHD and the like), it checks the whole card instead. Either way, import only ever takes certain formats, so some files are never imported or checked at all. Those you have to verify and copy yourself before you format.

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

Formatting the card afterwards happens in the camera, not in MediaFlowSwift. By that point Clear Card has checked every clip it imported and organized from the card — but, as the next section covers, that is not necessarily every file on the card.

The last of the three steps is the one worth noticing: Clear Card doesn't trust the earlier checks. It re-reads and re-compares every organized copy itself, immediately before it lets you delete anything.

The "Clear Card…" button appears beside Eject in the Import sheet, and the same action is available from the menu as File → Clear Card….

One exception is worth knowing on day one. On a card the camera laid out itself — a Sony card with a PRIVATE/M4ROOT folder, say — Clear Card deletes nothing at all. It checks every clip on the card and then tells you when the card is safe to format in the camera, which is where you would format that card anyway.

## What Clear Card never checks

On an ordinary card, Clear Card only scans the DCIM folder — nothing else on the card is looked at, checked, or counted. On a card the camera laid out itself (a Sony PRIVATE/M4ROOT card, an AVCHD card, and the like), Clear Card checks the whole card instead, and deletes nothing from it either way.

Import itself only takes certain formats, wherever it's scanning: MP4, MOV, M4V, AVI, JPG, JPEG, PNG, HEIC, DNG, WAV, MP3, AAC and M4A. Camera raw stills other than DNG (CR3, CR2, ARW, NEF, RAF, GPR), AVCHD's MTS and M2TS, Insta360's INSV and INSP, MXF, BRAW, R3D, and TIFF are left out — import never copies them, so Clear Card never has an organized copy to check them against. Import scans the whole source, including subfolders; it leaves files out by format, not by folder.

That matters most on a card the camera laid out itself: MTS or MXF clips on it have no verified copy, because MediaFlowSwift doesn't import those formats yet. Clear Card won't call that card safe to format while they're on it — it says "Not safe to format yet" and lists each one, so you know exactly what still needs copying by hand, in Finder, before you format.

So before you format any card: check it in Finder first, and copy out anything in an unsupported format that you want to keep. On an ordinary card, also check outside DCIM — Clear Card never looked there.

## Why the checks aren't all the same

Import's checksum check is always full — there's no setting for it. Clear Card's is always full too. The one step that can be lighter is Organize:

- **Organize** is governed by a setting: Settings › Storage › Organize Media has "Verify organized copies by reading them back (slower, safest)." With it off, MediaFlowSwift checks the size of the copy plus three 1 MB samples at the start, middle and end — much faster over a network, but it won't catch corruption outside those sampled ranges.
- **Import** and **Clear Card** both read the whole file back, whatever that setting says.

So Organize is the only step in the chain that can run on samples rather than a full read.

The manual's own advice: leave read-back verification on if you plan to clear cards. With it off, Organize only spot-checks each copy, so a damaged copy is caught at Clear Card instead — that clip stays on the card, with the reason listed, and has to be organized again before the card can be cleared.

This also means a verified copy and an organized copy aren't quite the same promise at every step. Only cards, drives and folders go through this checksum chain — importing from a phone or camera over USB works differently, and MediaFlowSwift can't make the same claim there.

## If a copy fails

Don't erase the card. Try the import again — a failed check usually means a bad read, a loose cable, or a card reader hiccup, and a second attempt from the same original often succeeds. If it keeps failing, the card or the connection is worth checking before you trust anything else from that shoot.

## Read more

- [How MediaFlowSwift verifies copies](/manual/organizing-media/#how-mediaflow-verifies-copies) — the full explanation of what each check proves.
- [Clear Card](/manual/organizing-media/#clear-card) — how clearing a card works, and what it scans.
- [Cards Laid Out by the Camera](/manual/organizing-media/#cards-laid-out-by-the-camera) — what "safe to format" does and doesn't cover on these cards.
- [Importing media](/manual/importing-media/) — the import steps in full, including what formats are left out.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
