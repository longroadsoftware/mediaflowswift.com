---
layout: manual
title: "Batch Operations — MediaFlowSwift Manual"
description: "Mark clips for thumbnail and proxy generation by adding them to the Proxy queue, and take them out again."
permalink: /manual/batch-operations/
generated: tools/import-guide.sh
---
# Batch Operations

## Using the Proxy Queue

*Mark clips for thumbnail and proxy generation by adding them to the Proxy queue, and take them out again.*

The Proxy queue is a list of clips you have marked for thumbnail and proxy generation. Queue the clips first, then process the whole queue in one go.

### Adding to the Queue

- Right-click a clip, or a selection of clips, and choose Add to Proxy queue
- Or select the clips and turn on Add to Proxy queue in the Workflow Tools tab of the metadata panel

### Seeing What Is Queued

Select Proxy queue in the sidebar’s Library section, or choose Proxy queue from the toolbar filter menu, to list only the queued clips. The Workflow Tools tab shows the number queued.

### Removing from the Queue

- Right-click a queued clip and choose Remove from Proxy queue
- Or click Clear in the Workflow Tools tab to empty the entire queue

Processing does not empty the queue. Clips stay queued until you remove them.

See also: [Processing the Proxy Queue](#processing-the-proxy-queue)

## Processing the Proxy Queue

*Generate thumbnails and low-resolution proxy videos for every clip in the Proxy queue, and where they are stored.*

With clips in the Proxy queue, use the buttons in the Workflow Tools tab of the metadata panel to process them:

- Process Queue (Thumbnails) — Generate a thumbnail image for each queued clip
- Process Queue (Proxies) — Generate a low-resolution MP4 proxy for each queued video. Photos and audio files are skipped
- Process Queue (All) — Generate both

A progress bar shows the name of the clip being processed. Click Cancel to stop processing; clips already finished keep their files.

### Where the Files Go

Proxies are saved in MediaFlow’s Application Support folder in your Library, in a Proxies folder for each project, each named after its clip’s own ID (a long string of letters and numbers, then _proxy.mp4), so two clips with the same file name from different cards, such as C0001.MP4, each keep their own proxy. A proxy made by an earlier version was named after the clip’s file, so another clip of the same name may have replaced it. When a project opens, MediaFlow looks at each such proxy. It is kept only if it is in this project’s own Proxies folder, no other clip in the project uses it or has a name that would have given it the same name (in any mix of capitals), it is the clip’s length to within a frame, and, where the clip’s picture size is known, it is the same shape and no larger. If the original can be reached, its pictures at a quarter, half and three quarters of the way through must also look like the proxy’s; then the proxy is renamed to the clip’s own name and is the clip’s from then on. If the original can’t be reached, for example away from home, the proxy plays until you quit, without being renamed, and is looked at again the next time the project opens with the original back. A project open only to read plays a proxy it keeps but never renames it. Any other old proxy is not played, nor is one a duplicated project’s clip still points to in the project it was copied from: the Proxy status line says “May be another clip’s”, and Make Proxy, or processing the clip again, makes a new one once the original can be reached. They belong to this Mac: they are not stored in the project folder and do not move with the project. The Metadata tab lists each clip’s Thumbnail and Proxy paths under Generated Files, with a Proxy status line saying whether one has been generated.

### What proxies are for

Once a clip has a proxy, the preview, the pop-out player and Review play the proxy instead of the original. It is a much smaller file on this Mac’s own drive, so it starts at once and scrubs smoothly, where a large original on a network drive may not. A small badge at the top-left of the player says Proxy or Original and lets you switch. It switches at the same moment in the clip and keeps your In and Out marks, and your choice holds for the clips you look at next.

- Use Play Original before judging focus, noise or fine detail: a proxy is lower resolution and more compressed than the clip
- In and Out marks, subclips and exports always refer to the original. The proxy has the same length and timing, so a mark made while watching it lands in the same place
- If the original has been replaced since the proxy was made, the proxy is out of date and is not used; generate it again
- If the original is on a drive that is not connected, the proxy is played regardless, and the badge says the original is not reachable. This is the one way to watch a clip whose drive is on the shelf

### Clips on a Network Drive

A clip on a network share or another network drive is read across the network as it plays, and macOS does not read ahead for a file the way it does for a stream, so a short pause on the network is a pause in the picture. A large clip, such as 4K footage, over a wireless connection is where this shows. When the preview is playing such a clip and it has no proxy, a badge at the top-left says Over the network:

- Make Proxy — Makes a proxy for this clip now, without touching the Proxy queue. When it is finished the preview changes to the proxy at the same moment in the clip
- All Clips — Makes a proxy for every video in the project that has none, one after another. Each is kept as it is finished, so you can carry on working, and Cancel in the Workflow Tools tab keeps what was made

Making a proxy reads the whole clip once, so expect roughly a third of the clip’s length over a wireless connection; after that, playback does not depend on the network. The original is never changed. A wired connection to the drive helps playback of the originals themselves, in MediaFlowSwift and in your editor.

See also: [Using the Proxy Queue](#using-the-proxy-queue), [Extracting Thumbnails and Subclips](/manual/video-preview-playback/#extracting-thumbnails-and-subclips)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/video-preview-playback/">&larr; Video Preview &amp; Playback</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/tags-categories/">Tags &amp; Categories &rarr;</a>
</div>
