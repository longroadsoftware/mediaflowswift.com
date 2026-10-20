---
layout: guide
title: "Is It Safe to Erase Your Card After Importing on a Mac?"
description: "Checksums, not playback, prove a copy is safe. See how MediaFlowSwift checks a copy at import, at organize, and once more before Clear Card erases a card."
published: "2026-10-13"
updated: "2026-10-20"
permalink: /guides/verify-footage-copied-before-erasing-card/
---
# Is It Safe to Erase Your Card After Importing on a Mac?

Yes, for the clips MediaFlowSwift imported and checked. Clear Card deletes a clip from the card only after its organized copy has been read back in full and matched against the SHA-256 checksum taken at import. Files MediaFlowSwift never imported, such as unsupported formats, are not covered. Check and copy those yourself before you format.

Clear Card's reach depends on the card. On an ordinary card, Clear Card only scans the DCIM folder. On a card the camera laid out itself (Sony PRIVATE/M4ROOT, AVCHD and the like), Clear Card checks the whole card instead. Import only ever takes certain formats, so some files are never imported or checked at all.

You just finished a shoot and want the card back for tomorrow. Here's exactly what has to be true before erasing the card is safe, and how MediaFlowSwift gets you there.

## The real risk: a copy that looks right but isn't

A copy can land with the right file name and the right file size and still have different data inside. A few bits can get dropped somewhere along the way. The file will often still open and play for a few seconds. You might not notice anything wrong until you're editing weeks later and a clip stutters, won't open, or goes black partway through.

Dragging files in Finder tells you the copy finished. It doesn't tell you the copy is intact, because Finder doesn't compare what landed on the drive against what's on the card.

## What actually proves a copy is good?

A real check compares a fingerprint of the copy with a fingerprint of the original. That fingerprint is a checksum, calculated from every byte of the file. MediaFlowSwift uses [SHA-256](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf), the hash function set out in the US government's own Secure Hash Standard. If the two checksums match, the files are identical. If they don't, something went wrong in the copy, and the original is still on the card to try again.

## How does MediaFlowSwift check a copy before you can erase a card?

Clearing a card in MediaFlowSwift is a separate, deliberate step from importing. Clear Card only offers to delete clips that already have an organized copy it can vouch for. Three checked steps get a clip there:

1. **Import.** As each file is copied, MediaFlowSwift computes its SHA-256 checksum from the card and writes the copy to the drive. It then reads the whole copy back from the drive, not from the Mac's memory, and compares the two. A copy that doesn't match is made once more; if it fails again, the import stops and names the file. Import never deletes anything from the card.
2. **Organize.** MediaFlowSwift files each clip into its Category and Camera folder at the project's destination. It checks that copy against the checksum taken from the card at import.
3. **Clear Card.** When you confirm, Clear Card reads each organized copy back in full and matches it against the recorded checksum before it deletes the card file. It never relies on the check made at organize time. It checks again, from scratch, right before anything is deleted.

Formatting the card afterwards happens in the camera, not in MediaFlowSwift. By that point Clear Card has checked every clip it imported and organized from the card. As the next section covers, that is not necessarily every file on the card.

The last of the three steps is the one worth noticing: Clear Card doesn't trust the earlier checks. Clear Card re-reads and re-compares every organized copy itself, immediately before it lets you delete anything.

The "Clear Card…" button appears beside Eject in the Import sheet. The same action is in the menu as File → Clear Card….

One exception is worth knowing on day one: cards the camera laid out itself. On a Sony card with a PRIVATE/M4ROOT folder, say, Clear Card deletes nothing at all. PRIVATE/M4ROOT is [a folder name Sony's own camera help guides describe](https://helpguide.sony.net/ilc/2630/v1/en/contents/proxy_shooting.html). Clear Card checks every clip on that card, then tells you when the card is safe to format in the camera. The camera is where you would format that card anyway.

<figure class="guide-figure"><img src="/images/guides/verify-footage-copied-before-erasing-card.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Diagram of five steps from card to Clear Card: a clip on the camera card; Import copies it to the drive and reads the whole copy back; the copy's SHA-256 checksum must match the card's; Organize files it into its Category and Camera folder and checks it again; Clear Card re-checks the organized copy in full and only then deletes the card file. A failed check never deletes the card file." loading="lazy"><figcaption>Every checked step a clip passes before Clear Card deletes it from the card. Files import never took are not part of this chain.</figcaption></figure>

## What does Clear Card never check?

On an ordinary card, Clear Card only scans the DCIM folder. Nothing else on the card is looked at, checked, or counted. On a card the camera laid out itself (a Sony PRIVATE/M4ROOT card, an AVCHD card, and the like), Clear Card checks the whole card instead. Clear Card deletes nothing from that kind of card either way.

Import itself only takes certain formats, wherever it's scanning: MP4, MOV, M4V, AVI, JPG, JPEG, PNG, HEIC, DNG, WAV, MP3, AAC and M4A. Several common formats are left out: camera raw stills other than DNG (CR3, CR2, ARW, NEF, RAF, GPR) and AVCHD's MTS and M2TS. Insta360's INSV and INSP, MXF, BRAW, R3D, and TIFF are left out too. Import never copies them, so Clear Card never has an organized copy to check them against. Import scans the whole source, including subfolders, and leaves files out by format, not by folder.

The format gap matters most on a card the camera laid out itself. MTS or MXF clips on that card have no verified copy, because MediaFlowSwift doesn't import those formats yet. Clear Card won't call the card safe to format while they're on it. It says "Not safe to format yet" and lists each one. You then know exactly what still needs copying by hand, in Finder, before you format.

So before you format any card, check it in Finder first. Copy out anything in an unsupported format that you want to keep. On an ordinary card, also check outside DCIM, because Clear Card never looked there.

## Why aren't the checks all the same?

Import's checksum check is always full; there's no setting for it. Clear Card's check is always full too. The one step that can be lighter is Organize:

- **Organize** is governed by a setting: Settings › Storage › Organize Media has "Verify organized copies by reading them back (slower, safest)." With it off, MediaFlowSwift checks the size of the copy plus three 1 MB samples at the start, middle and end. That is much faster over a network, but it won't catch corruption outside those sampled ranges.
- **Import** and **Clear Card** both read the whole file back, whatever that setting says.

So Organize is the only step in the chain that can run on samples rather than a full read.

The manual's own advice: leave read-back verification on if you plan to clear cards. With it off, Organize only spot-checks each copy, so a damaged copy is caught at Clear Card instead. That clip stays on the card, with the reason listed. It has to be organized again before the card can be cleared.

A verified copy and an organized copy therefore aren't quite the same promise at every step. Only cards, drives and folders go through this checksum chain. Importing from a phone or camera over USB works differently, and MediaFlowSwift can't make the same claim there.

## What if a copy fails?

Don't erase the card. Try the import again. A failed check usually means a bad read, a loose cable, or a card reader hiccup, and a second attempt from the same original often succeeds. If it keeps failing, check the card or the connection before you trust anything else from that shoot.

## Read more

- [How MediaFlowSwift verifies copies](/manual/organizing-media/#how-mediaflow-verifies-copies) — the full explanation of what each check proves.
- [Clear Card](/manual/organizing-media/#clear-card) — how clearing a card works, and what it scans.
- [Cards Laid Out by the Camera](/manual/organizing-media/#cards-laid-out-by-the-camera) — what "safe to format" does and doesn't cover on these cards.
- [Importing media](/manual/importing-media/) — the import steps in full, including what formats are left out.

## Other guides

- [How to Keep Two Checked Copies of a Memory Card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/) — getting a second checked copy, one step after the first.
- [How to Automate Video File Organization on Your Mac](/guides/automate-video-file-organization-on-mac/) — Category and Camera folders, sorted the same way every time.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
