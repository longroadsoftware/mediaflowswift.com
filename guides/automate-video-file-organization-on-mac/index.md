---
layout: guide
title: "How to Automate Video File Organization on Your Mac"
description: "MediaFlowSwift sorts clips into Category and Camera folders automatically, and Workflow Templates chain that with other steps into one command."
published: "2026-10-13"
updated: 2026-10-20
permalink: /guides/automate-video-file-organization-on-mac/
---
# How to Automate Video File Organization on Your Mac

To automate video file organization on a Mac, run Organize Media in MediaFlowSwift. Organize Media sorts every clip into Destination / Category / Camera / Filename folders, the same way every time. Workflow Templates chain Organize with other steps, so one command runs your whole routine. Copies and deletions still wait for your confirmation.

Re-filing after you change a clip's category or camera happens on its own, in the background. Here's what's actually automatic, and what you still choose.

## Folders happen on their own, every time

Once you've set up categories and cameras, Organize Media gives the same tidy layout every time, with no filing decisions left to make by hand:

> Organize Media copies your clips into a tidy folder layout at the project destination. The destination can be any folder: a network share, an external drive, a RAID, or a folder on this Mac. The layout is Destination / Category / Camera / Filename.

A fixed folder structure is also what the Library of Congress recommends for keeping digital video. Its [Keeping Personal Digital Video](https://digitalpreservation.gov/personalarchiving/video.html) page suggests descriptive file names and a folder structure for the videos you keep.

MediaFlowSwift also looks for shortcuts to avoid redoing work it's already done. If a clip's imported copy is already on the same drive as the destination, Organize skips copying it entirely:

> When a clip's imported copy is on the same drive as the destination and still matches the checksum its import took from the card... Organize renames it into place instead of copying it: seconds, and no extra space.

On macOS, moving a file within the same volume is a cheap rename rather than a byte-for-byte copy. Apple's developer documentation for [FileManager's move method](https://developer.apple.com/documentation/foundation/filemanager/moveitem%28at%3Ato%3A%29) draws the same line: when source and destination are not on the same volume, the item is copied first and then removed.

If you change a clip's category or camera later, you don't have to move the file yourself. MediaFlowSwift re-files it for you, in the background:

> When you change the category or the camera of an organized clip, MediaFlow moves its copy at the destination into the matching folder. This happens in the background, keeps any edit you make meanwhile, and only interrupts you if a file fails to move or you open another project before the move could be saved.

## How do you chain several steps with Workflow Templates?

For a routine you run every shoot day, Workflow Templates string several operations together under one command:

> A workflow template runs several operations in order, so you do not have to find each command yourself. Each step is the same operation you would start from the menu, with the same confirmations and the same progress window, and the template waits for it to finish before it starts the next.

Open the picker with Cmd+Shift+R, or choose Workflow → Run Workflow Template. Three built-in templates ship with MediaFlowSwift:

> - One-click Organize — Re-check files, check format conformance, organize all media, then show a summary. Organize here always means the whole project, whatever is selected. This copies to the project's destination; Archive to USB is a separate command
> - End of Day Wrap — Re-check files, generate a report, open Free Up Space, then show a summary. Free Up Space shows its usual preview: nothing is staged or deleted that you have not seen listed and confirmed
> - Relink & Repair — Re-check files, relink missing media, re-file folders by category, then show a summary

A workflow template doesn't skip your confirmations. When a step needs you to confirm a copy, choose a folder, or read a result, the template's own window steps aside. That step's ordinary window appears instead, same as if you'd run it on its own.

<figure class="guide-figure"><img src="/images/guides/automate-video-file-organization-on-mac.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Diagram in two rows. Top row: the One-click Organize workflow template runs Re-check files, Check format conformance, Organize all media, then Show a summary, in order. Bottom row: the folder layout Organize Media builds, Destination / Category / Camera / Filename. A note says changing a clip's category or camera later re-files its copy in the background." loading="lazy"><figcaption>The One-click Organize template's steps, and the folder layout its Organize step writes.</figcaption></figure>

## Batch tools for the busywork around organizing

Separate from Organize itself, the Proxy queue automates thumbnail and proxy generation across many clips at once. Right-click a clip or a selection and add it to the queue, then process the whole queue in one go:

> - Process Queue (Thumbnails) — Generate a thumbnail image for each queued clip
> - Process Queue (Proxies) — Generate a low-resolution MP4 proxy for each queued video. Photos and audio files are skipped
> - Process Queue (All) — Generate both

The Proxy queue is a different job from sorting clips into folders. Proxies make footage easier to scrub and preview; they don't change where files live. Apple's Final Cut Pro guide describes why editors use them: [proxy files increase editing performance and take up considerably less storage space](https://support.apple.com/guide/final-cut-pro/create-optimized-and-proxy-files-verb8e5f6fd/mac) than optimized files. The queue is the other place MediaFlowSwift lets you line work up and run it across many clips at once.

## Optional: let a model suggest categories first

If you'd rather not pick categories by hand after an import, MediaFlowSwift can ask a model to suggest them. Model suggestions are turned on in Settings › Analysis, separate from the Settings › Privacy switches. They are also ticked separately for each import:

> This checkbox asks an AI model to look at each imported video clip and propose one of your project's categories. It is off every time the sheet opens and applies to this import only, so no import uses a model unless you tick the box for it.

What the model receives depends on which model you choose. A model running on your own Mac sends nothing anywhere:

> With a model that runs on this Mac, nothing leaves the Mac and it costs nothing.

A paid provider sees a little more, and the manual is upfront that it costs money:

> With a paid provider (Claude, ChatGPT or Gemini), MediaFlow sends three small frames from each clip to that provider, together with your category list, the clip's camera, duration and place name, the opening words of its transcript when it has one, and your recent category corrections. The provider bills you for each clip.

Either way, nothing is applied to a clip automatically. Suggestions arrive as proposals you confirm yourself.

## Read more

- [Organizing Media to Storage](/manual/organizing-media/#organizing-media-to-storage) — the Category/Camera folder layout and what Organize actually does
- [Workflow Templates](/manual/organizing-media/#workflow-templates) — the three built-in templates and how to build a routine around them
- [Using the Proxy Queue](/manual/batch-operations/#using-the-proxy-queue) and [Processing the Proxy Queue](/manual/batch-operations/#processing-the-proxy-queue) — batch thumbnail and proxy generation
- [Importing from a Card, Drive or Folder](/manual/importing-media/#importing-from-a-card-drive-or-folder) — the "Ask a Model to Suggest Categories" checkbox quoted above, and what each option sends
- [Using a Model to Suggest Categories](/manual/organizing-media/#using-a-model-to-suggest-categories) — the fuller explanation of the same opt-in feature, including the daily spending cap

## Other guides

- [How to Label and Catalog Your Archive Drives for Video](/guides/label-and-catalog-archive-drives-for-video/) — numbered drives, and a record of what went where.
- [Is It Safe to Erase Your Card After Importing on a Mac?](/guides/verify-footage-copied-before-erasing-card/) — what the checksum check proves before you format.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
