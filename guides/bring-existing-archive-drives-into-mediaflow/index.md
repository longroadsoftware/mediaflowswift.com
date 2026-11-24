---
layout: guide
title: "Bring Your Existing Archive Drives into MediaFlow"
description: "Catalog a drive you filled by hand so Search finds its clips and MediaFlow says which drive to pull off the shelf. Nothing on the drive is changed."
published: "2026-11-16"
updated: "2026-11-16"
permalink: /guides/bring-existing-archive-drives-into-mediaflow/
---
# Bring Your Existing Archive Drives into MediaFlow

Most people who shoot video already have a shelf of drives: a backup made in Finder, an old project copied off a dying laptop, a card dumped onto a drive years ago and never looked at again. Catalog Archive Drive brings one of those drives into MediaFlow without touching a single file on it.

## What does Catalog Archive Drive actually do?

Connect the drive and choose File → Catalog Archive Drive…. MediaFlow looks at what's on the drive — names, sizes and dates only — and works out which folders should become projects. Nothing is written until you confirm, and even then nothing already on the drive is moved, renamed, changed or deleted. MediaFlow only writes a record of what it found, so Search can find those clips afterward and the app can tell you which drive to go pull off the shelf.

## One project per folder, or the whole drive as one

You choose. A drive kept as one folder per shoot or per client becomes a project for each folder, with any clips lying loose at the top making one more. A drive that holds a single job can go in as one project for the whole drive. Clips sitting inside folders inside those folders are found either way. Only video, photo and sound files are cataloged; everything else, including another app's own library, is left alone.

## Checksums are optional, and slower

Turn on "Take checksums now" and MediaFlow reads every clip in full to fingerprint it, which can take hours on a large drive. Leave it off and clips are cataloged by name, size and date instead, which is much faster. Either way, nothing about the files themselves changes — checksums only affect how carefully MediaFlow looks at what's already there, and how certain it can later be that a clip on this drive is the same one it already knows from somewhere else.

## The marker is optional too

MediaFlow can write one small marker file at the top of the drive, plus a short note inside each project's folder listing its clips. Those two kinds of file are the only things Catalog Archive Drive ever writes to the drive itself, and only when you allow it. Turn the marker off, or catalog a read-only drive, and nothing at all is written there — MediaFlow instead remembers the drive by its own identity. A drive that already carries MediaFlow's marker keeps it; the marker itself is never rewritten.

## Does it check against Proof Copy receipts?

If you use Proof Copy to offload cards, its receipts land in the folder it copied into. With "Take checksums now" on, MediaFlow compares the receipt at the top of a project's folder with the clips it just read, and says if anything doesn't match, is missing, or couldn't be checked. With checksums off, receipts aren't read.

## What if I catalog the same drive twice?

A drive is cataloged once. Pick it again and MediaFlow says it's already cataloged, by its marker or by its own identity when it has none, and changes nothing. If cataloging stopped partway through, picking the drive up again finishes the rest under the same number, without reading the folders already recorded a second time.

## What happens with a clip I already have?

Some drives hold a backup of a backup — footage you already have, archived or not. MediaFlow doesn't record that clip twice. It's kept once, with every drive and project it's found on listed against it, so Search can show you each place a clip lives.

## Can I get a project back off the drive afterward?

Yes. Right-click a cataloged project and choose Restore from Archive…. MediaFlow copies the clips the catalog recorded into a folder you pick and checks each one as it comes back. It only works from the drive it actually recognizes as the one it cataloged.

## Cataloging a whole shelf at once

For more than one drive, File → Catalog a Stack of Drives… walks you through them one after another: plug one in, check the projects it will make, catalog it, and MediaFlow ejects it so you can plug in the next.

## Read more

- [Managing Archive Volumes](/manual/project-management/) — the drive catalog Catalog Archive Drive adds to.
- [How to Label and Catalog Your Archive Drives for Video](/guides/label-and-catalog-archive-drives-for-video/) — numbering and tracking drives MediaFlow archived to itself.
- [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/) — how MediaFlow checks a copy before anything is deleted.

## Other guides

- [How to Automate Video File Organization on Your Mac](/guides/automate-video-file-organization-on-mac/) — Category and Camera folders, sorted the same way every time.
- [Footage Missing After Moving to an External Drive?](/guides/footage-missing-after-moving-to-external-drive/) — why clips show as missing, and the command that repoints them.

[All guides](/guides/) — the full list.

## Bring your own shelf in

Catalog Archive Drive is built into MediaFlowSwift. [Download it](/download.html) to try the complete app for 14 days — no card up front, on a Mac with Apple silicon running macOS 13 or later.
