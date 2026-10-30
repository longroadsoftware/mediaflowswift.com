---
layout: post
permalink: /blog/2026/10/dailies-workflow-mac/
published: "2026-10-30"
updated: "2026-10-30"
og_image: "/images/blog/dailies-workflow-mac.png"
title: "Dailies Workflow: Card Offload to Editor Hand-Off on Mac"
seo_title: "Dailies Workflow on a Mac: From Card to Editor Hand-Off"
description: "A dailies workflow for Mac shooters: organize the day's footage, review and pick selects, write a dailies report, and hand off files your editor can open."
slug: "dailies-workflow-mac"
category: "workflow"
tags: ["dailies", "selects", "editor-hand-off", "workflow", "card-offload"]
keywords: "dailies workflow, dailies report, picking selects, editor hand-off, footage review on Mac"
takeaways:
  - "A dailies workflow runs in a fixed order: verified offload, second copy, organize, review and selects, then the dailies report and editor hand-off."
  - "Offload and verification come first, but the dailies work itself is turning a day of verified clips into decisions an editor can use."
  - "Keep the camera's own file names and add meaning with folders, tags, ratings and scene notes, so sidecar files and timecode reel names still match."
  - "Write the dailies report after review, not at offload, because ratings, circle takes and notes are what make the report worth reading."
  - "A report is for people to read and a hand-off file is for the editor's software to open, so most editors need both."
faq:
  - q: "What is the difference between a dailies report and an ingest log?"
    a: "An ingest log records the copy: which card, which clips, which drives, and whether each checksum matched. A dailies report records the decisions: what was shot each day, which takes are the good ones, and notes on problems. The log proves the footage is safe. The report tells the director and editor what is worth watching. Most shoots need both."
  - q: "Should I rename camera files before handing dailies to an editor?"
    a: "Usually not. Camera names such as GX010042 or C0001 tie each clip to its sidecar files, its chapters and the reel name an edit decision list uses. Make names unique with dated shoot and camera folders instead. Put meaning in tags, ratings and notes. If you must rename, do it once, before anything is imported into the editing software."
  - q: "Can I review dailies without proxies on an Apple silicon Mac?"
    a: "Often, yes. Many phone, action camera and drone clips play smoothly from the originals. The hard case is 10-bit 4:2:2 H.264 or HEVC from mirrorless cameras, which can be hard to play smoothly on some Macs. Footage on a network share can stutter too. Test a few clips first, and make proxies for whatever stutters."
  - q: "Do I need a dedicated DIT tool for a small shoot?"
    a: "Not for most solo or two-person shoots. Tools such as Silverstack Lab add on-set looks, audio sync by timecode and transcoded dailies for review platforms. A small crew mostly needs verified copies on two drives, quick review with ratings, a short report and a file the editor's software can open. Add a DIT tool when the production requires its deliverables."
  - q: "When can I erase the card during a dailies workflow?"
    a: "Only after every clip you need has a verified copy, ideally a second verified copy on another physical drive, and the log says where they are. The dailies report and hand-off don't change that rule. Review and selects can happen while the card stays full, and keeping it full a few more days costs little if you have spare cards."
sources:
  - title: "OffShoot, Hedge (checked October 2026)"
    url: "https://hedge.co/products/offshoot"
  - title: "Silverstack Lab, Pomfort (checked October 2026)"
    url: "https://pomfort.com/silverstacklab/"
  - title: "Silverstack XT, Pomfort (checked October 2026)"
    url: "https://pomfort.com/silverstackxt/"
  - title: "ASC Media Hash List specification, ASC MITC"
    url: "https://github.com/ascmitc/mhl-specification"
  - title: "FCPXML Reference, Apple Developer"
    url: "https://developer.apple.com/documentation/professional-video-applications/fcpxml-reference"
  - title: "Create a proxy-only project in Final Cut Pro for Mac, Apple Support"
    url: "https://support.apple.com/guide/final-cut-pro/create-a-proxy-only-project-vere88b1ee9f/mac"
---
A dailies workflow turns a day of camera cards into footage an editor can use. Offload and verify every card, then make a second copy. Organize the clips by shoot day and camera, and review them to pick selects. Write a short dailies report, then hand off the media with a file the editing software opens.

Offload and verification get only a short section here, because two other posts cover them in depth. [Video Ingest Workflow: When to Erase the Card](/blog/2026/10/video-ingest-workflow/) runs from card reader to the moment a card is safe to format. [Checksum Verification: Prove Your Card Copy Before Erasing](/blog/2026/10/checksum-verification-before-erasing-card/) explains hashes and failed checks. This post covers what happens after the copy: organizing, review, selects, the report and the hand-off.

## What does a dailies workflow look like from card to editor?

A dailies workflow has five stages. Each stage produces one thing the next stage depends on, so a gap shows up early instead of in the edit.

| Stage | Input | Done when |
|---|---|---|
| 1. Offload and verify | Camera, drone or phone cards | Every clip's checksum matches the card |
| 2. Second copy | The verified copy | A verified copy sits on another drive |
| 3. Organize | Verified footage | Clips sit in dated shoot and camera folders |
| 4. Review and selects | Organized clips | Good takes are rated, rejects are marked |
| 5. Report and hand-off | Rated clips | The editor has the media, a report and an import file |

Film crews use "dailies" for the day's footage, reviewed the next day. A solo creator's version is smaller, but the order is the same. The first two stages protect the footage. The last three turn it into decisions.

## How much offload and verification does a dailies workflow need?

Verification needs to be complete, not elaborate. A Finder drag tells you the copy finished, but it doesn't compare the copy with the card. A checksum tool hashes the card file and the copy and compares them. Matching SHA-256 values mean the bytes are identical.

Make a second verified copy on a different physical drive before you erase anything. On a Mac with MediaFlowSwift, that is an import and Organize to the working drive, then Archive to USB to a numbered drive. [How to Keep Two Checked Copies of a Memory Card on a Mac](/guides/two-checked-copies-of-a-card-on-a-mac/) walks through the sequence. MediaFlowSwift makes those copies one after the other, not to two drives at once.

The card can stay full while you review. Erasing it is a separate decision, covered in [How to Clear a Memory Card Without Losing Footage](/blog/2026/10/clear-memory-card-without-losing-footage/).

## How should dailies be organized for the edit?

Dailies folders work best organized by shoot date first, then camera. A layout such as `2026-10-24_Ski-Trip/GoPro/`, `iPhone/`, `Drone/` and `Nikon/` sorts by date and matches how editors group angles for multicam. Keep audio, reports and exports as siblings of the camera folders. Use the same layout on every drive, so a date folder means the same thing everywhere.

### Should you rename clips?

Camera file names are usually worth keeping. A GoPro's GX010042 is tied to its LRV proxy and THM thumbnail, and long recordings split into chapters such as GX010123 and GX020123. An edit decision list often uses the camera's name as the reel name. Renaming breaks those links, and two cards can still produce the same name.

Unique folders solve the collision problem without touching file names. Meaning goes in metadata instead: tags, ratings, notes and scene numbers. If a production insists on renaming, do it once, before the footage enters the editing software.

### How MediaFlowSwift files dailies

MediaFlowSwift's [Organize Media](/manual/organizing-media/#organizing-media-to-storage) copies clips into Destination / Category / Camera / Filename and keeps the camera's file name. Each copy is checked against the checksum taken from the card at import. [Tags](/manual/tags-categories/#working-with-tags) can be added to many clips at once. The [Scene Log](/manual/organizing-media/#logging-scene-shot-and-take) records scene, shot type, take and circle take.

The app doesn't rename clip files in bulk, which suits the advice above. For more folder layouts, see [How to Organize Video Footage](/blog/2026/10/how-to-organize-video-footage/) and [External Hard Drive Organization for Video](/blog/2026/10/external-hard-drive-organization-for-video/).

## How do you review dailies and pick selects?

Dailies review is about content, not color. The questions are simple. Is the shot in focus, is the framing right, is the audio usable, and is this the take worth cutting? Grading comes later, in the editor.

### Narrow the pile, then rate by keyboard

Selects go faster in short, focused passes. Filter to one camera or one scene, review it, then move on. Keyboard review keeps the pace up. J, K and L shuttle backward, stop and forward in Final Cut Pro, DaVinci Resolve and many other apps.

MediaFlowSwift has its own [Review sheet](/manual/video-preview-playback/#reviewing-clips-with-the-keyboard) (Workflow → Review, or Cmd+Opt+R). It plays clips with J/K/L and rates them with 1–5. X marks a Reject and C marks a circle take. Clips also carry a select status of Hero, Maybe or Reject, which the table can sort and filter.

[Smart Selects](/manual/organizing-media/#smart-selects) can score clips first, on this Mac, for sharpness, exposure, audio, a rough stability guess and composition. It suggests ratings, and nothing changes until you accept them. Sharpness is measured on one sample frame, so a clip that racks into focus can score low. [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) covers the whole routine.

### Make selects that travel

A select only helps if it reaches the editor. A screenshot or a memory doesn't count. Ratings, select status and notes need to travel in a file the editing software imports. MediaFlowSwift's Final Cut Pro export carries ratings as keywords, and clips rated four stars or more, or marked Hero, arrive as favorites.

### When playback stutters, use proxies

Playback on Apple silicon is smooth for many phone, GoPro and drone clips. The hard case is 10-bit 4:2:2 H.264 or HEVC from mirrorless cameras, which can be hard to play smoothly on some Macs. Clips on a network share can also pause. Test a few clips before a long session.

MediaFlowSwift makes low-resolution MP4 [proxies for review](/manual/batch-operations/#processing-the-proxy-queue), kept on this Mac. Review then plays the proxy instead of the original. Check focus on the original, because a proxy is softer. These proxies are for review in the app, not editing proxies for your NLE. The [Transcode](/manual/organizing-media/#transcode) pass suggests ProRes targets for the editor but doesn't convert anything.

## What goes in a dailies report, and when do you write it?

A dailies report goes out after review, not at offload. The report's value is the decisions in it: circle takes, ratings and notes. Proof of the copy belongs in the ingest log and checksum list, which you make at offload.

A useful dailies report includes:

- Shoot date, project and location
- Cameras and cards, with clip counts per camera
- Circle takes and top-rated clips, listed first for each day
- Scene, shot and take, where you logged them
- Notes such as "B-cam audio drops out on clip 042"
- Which numbered drives hold the footage

### Building the report in MediaFlowSwift

MediaFlowSwift doesn't write a report automatically during offload. Workflow → Plan & Deliver → [Generate Dailies](/manual/reports/#dailies-report) builds one on demand, organized by shooting date. It can group by scene and camera and include circle takes, ratings, timecodes and notes. It writes HTML, CSV or plain text.

For a quick end-of-day message, [Day Summary](/manual/reports/#day-summary) shows clip count, duration, size, cameras and flagged audio issues, ready to copy. The app doesn't write a checksum list or an MHL file, so it can't supply that part. [How to Create a Dailies Report and a Hand-Off File](/guides/dailies-report-and-hand-off-file-for-editor/) explains which output to send.

## How do you hand off dailies to an editor?

An editor hand-off has three parts: the media, something to read and something to import. Send the drive or upload, the dailies report, and a file the editing software opens. Add a checksum list so the editor can verify the copy on arrival.

### Pick the import file by editing app

Final Cut Pro reads FCPXML, Apple's [interchange format](https://developer.apple.com/documentation/professional-video-applications/fcpxml-reference) for events, clips and metadata. MediaFlowSwift's NLE Template Export writes an FCPXML file that opens in Final Cut Pro as a library with events, keyword collections, ratings, markers and notes. DaVinci Resolve imports FCPXML too, but the version may be newer than yours accepts, so test a small project.

Premiere Pro has no direct target. Adobe's help says to convert a Final Cut Pro file with a tool such as XtoCC first. A CSV clip list works for any other tool or spreadsheet. [Choosing an Export for Your Editor](/manual/reports/#choosing-an-export-for-your-editor) lists exactly what each file carries.

### Get the media there in one piece

A shipped drive often beats an upload for a full shoot, because raw camera files are large. Remote editors on a laptop can cut with proxies and relink later. Final Cut Pro, for example, can build a [proxy-only library](https://support.apple.com/guide/final-cut-pro/create-a-proxy-only-project-vere88b1ee9f/mac) that uses considerably less storage than the originals.

Checksum lists let the editor prove the copy without calling you. Make one with `shasum`, as the [checksum post](/blog/2026/10/checksum-verification-before-erasing-card/) shows, or with a tool that writes [ASC MHL](https://github.com/ascmitc/mhl-specification). Your card-erase decision should rest on your own two verified copies, not on the editor's.

## Which tools handle each stage of a dailies workflow?

Dailies tools differ mainly in how much of the pipeline they cover. Here is what each vendor's own page says, checked in October 2026.

| Tool | Offload and verify | Review and selects | Dailies output |
|---|---|---|---|
| [OffShoot](https://hedge.co/products/offshoot) (formerly Hedge) | Verified copies to several destinations at once; ASC MHL in Pro | Not its focus | Can start EditReady proxies and FoolCat reports, both Hedge apps |
| [Silverstack Lab](https://pomfort.com/silverstacklab/) | Checksum verification and ASC MHL, as in XT | Playback, QC, looks and grading | Audio sync, transcoded dailies, custom reports |
| [Silverstack XT](https://pomfort.com/silverstackxt/) | Checksum verification and ASC MHL | Playback, QC and basic color | Custom PDF reports, metadata exports |
| MediaFlowSwift | SHA-256, copy read back from the drive | Review sheet, ratings, Hero/Maybe/Reject | Generate Dailies, Final Cut Pro and CSV exports |
| Your editing app | No card verification | Full review and grading | Its own bins and keywords |

OffShoot runs on macOS and Windows and has a 10-day trial. Silverstack Lab and Silverstack XT each offer a free 10-day trial. More offload tools are compared in the [ingest post](/blog/2026/10/video-ingest-workflow/), and there is a side-by-side at [MediaFlowSwift vs OffShoot](/vs/offshoot/).

### Where MediaFlowSwift fits, and where it doesn't

MediaFlowSwift covers offload, organizing, review, selects and the report in one Mac app. Its limits matter for dailies. It applies no LUTs or looks, and it doesn't transcode editing proxies or upload to review platforms. It writes no checksum list or MHL file.

Several Macs can share projects through the [shared database](/manual/shared-database/). A database file works on either plan, and a database server that several Macs use at once is a Studio Pro feature. The app runs on Apple silicon Macs with macOS 13 or later. Windows and Intel Mac versions are coming.

## How does a solo dailies workflow differ from a studio pipeline?

A studio dailies pipeline has dedicated people. A DIT or data manager offloads and verifies, and a dailies operator syncs sound, applies the look and transcodes for review. Producers watch the dailies the next morning. Tools like Silverstack Lab are built for that job.

A solo creator can skip most of it. Looks can wait for the edit, and camera audio often makes separate sound sync unnecessary. Verification and two copies are the studio habits worth keeping, because a bad erase loses footage no reshoot replaces.

### A worked example: four cameras in one evening

A ski trip shot on GoPro, iPhone, drone and Nikon fits in one evening. Import each card into a project such as `2026-10-24_Ski-Trip`, with each copy checked against the card. MediaFlowSwift checks iPhone clips imported over USB as far as the phone allows. Nikon MOV or MP4 clips import, but NEF raw stills are left out, so copy those yourself.

Organize to the working drive, then Archive to USB to a numbered drive. If the cameras rolled together, [Audio Waveform Sync](/manual/organizing-media/#audio-waveform-sync) lines clips up by their sound. Review by camera, rate the keepers and mark rejects. Then run Generate Dailies and export for the editor.

The routine is the same with any toolset: verify, copy again, organize, review, report, hand off. Want those steps in one Mac app? [Download MediaFlowSwift](/download.html) and try it on a real card. Plans are on the [home page](/#plans).
