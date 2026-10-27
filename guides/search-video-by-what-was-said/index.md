---
layout: guide
title: "How to Find a Clip by What Was Said in It on a Mac"
description: "Transcribe your clips on-device, then search every transcript at once for a word or phrase and select the clip it's in."
published: "2026-10-13"
updated: "2026-10-20"
permalink: /guides/search-video-by-what-was-said/
---
# How to Find a Clip by What Was Said in It on a Mac

To find a clip by the words spoken in it, transcribe your clips in MediaFlowSwift, then open any clip's Transcript tab. Type a word or phrase into Search and tick All clips. MediaFlowSwift searches every transcript in the project at once and lists the matching lines. Clicking a result selects that clip.

In the Transcript tab's Read view, clicking a line's time jumps the preview to that line. The rest of this page covers how MediaFlowSwift transcription works and what it costs you in privacy. It also covers one limit: the main toolbar search field does not search speech.

## How do I transcribe a clip?

> Transcribe turns the speech in your video clips into text using Apple’s speech recognition. The text is saved with each clip in the project file, and import analysis uses it as one of its signals when it proposes a category. Audio-only files are not transcribed.

To transcribe a whole project at once, choose Workflow → Analyze… → Transcribe and let it run. The progress panel reports how many clips it got through. To transcribe one clip, select the clip, open the Transcript tab of the metadata panel, and click Transcribe This Clip.

## Where does the audio go?

MediaFlowSwift transcribes on this Mac by default, and the audio stays on the Mac unless you say otherwise:

> Speech is recognized on this Mac. Apple’s online recognition is used only if you turn it on in Settings › Privacy, and only for a language this Mac has no on-device model for.

The on-device option uses Apple's own [Speech framework](https://developer.apple.com/documentation/speech/sfspeechrecognizer). Apple's Speech framework can recognize speech locally on a Mac that has the right language model installed.

Audio leaves the Mac in only one case: a language the Mac has no on-device model for, and only if you've opted in:

> MediaFlow recognizes speech on this Mac when the Mac has an on-device model for your system language. When it does not, nothing is transcribed unless you have turned on online speech recognition in Settings › Privacy; with that on, the audio is sent to Apple. The Transcript tab says which applies before you start. No API key is needed either way.

The Transcript tab tells you which of the two cases applies to a clip before you click Transcribe. You always know whether the audio stays on this Mac or goes to Apple before anything is sent.

## How do I search across every clip?

The Transcript tab's own Search box is what gives you a speech search across the whole project:

> - Search — type in the field to show only the lines containing every word you typed. Tick All clips to search every clip’s transcript instead; click a result to select that clip

The Transcript tab's Search is the tool for "what did she say about the budget" across forty interview clips. Type `budget`, tick All clips, and read down the list of matching lines. No clip has to be opened by hand first.

<figure class="guide-figure"><img src="/images/guides/search-video-by-what-was-said.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Process diagram in four steps: 1, transcribe with Workflow, Analyze, Transcribe, on this Mac by default; 2, in the Transcript tab type a word or phrase into Search and tick All clips; 3, click a result and MediaFlowSwift selects the clip with that line; 4, click the line's time in Read to jump the preview. A note says the toolbar search (Cmd+F) does not read transcripts and matches file name, notes, tags, category, camera and scene." loading="lazy"><figcaption>Searching speech in MediaFlowSwift goes through the Transcript tab, not the toolbar search field.</figcaption></figure>

## How do I fix a mishear?

Speech recognition mishears names, places and technical terms more often than ordinary words. A wrong word in a MediaFlowSwift transcript stays wrong until you fix it:

> - Correct — edit a line and press Return. The words change and the line’s timing stays as it was. Clear a line and press Return to remove it, for a cough or a false start the recognizer heard as a word

Transcribe Again throws out your corrections along with the rest of the transcript. Fix names and terms once you're happy with the pass, not before.

## What doesn't the project-wide search field do?

MediaFlowSwift's main search field (the one in the toolbar, Cmd+F) is a different search from the Transcript tab's. The toolbar search does not look inside a transcript:

> A clip is found by its file name, its notes, its tags, its category, the camera it came from and its scene.

Typing a line of dialogue into the toolbar search won't find the clip. For the words someone said, rather than the filename or your notes about the clip, use the Transcript tab's Search instead. With All clips ticked, the Transcript tab's Search is the one that reads what's actually in each transcript.

## How do I get a transcript out of MediaFlowSwift?

The Transcript tab exports a clip's transcript as a file:

> - Export — save the transcript as SubRip (.srt) or WebVTT (.vtt) subtitles, or as plain text with timecodes. The file is named after the clip

MediaFlowSwift's .vtt option follows the W3C's [WebVTT specification](https://www.w3.org/TR/webvtt1/). WebVTT is the open format browsers and most editing tools use for timed captions and subtitles.

## Read more

- [Speech Transcription](/manual/organizing-media/#speech-transcription) — transcribing, correcting and exporting a transcript, in full
- [Filtering and Searching](/manual/managing-clips/#filtering-and-searching) — what the toolbar search field looks at, and the sidebar and filter menu beside it

## Other guides

- [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) — rating and tagging clips with the keyboard.
- [How to Write Your YouTube Title, Chapters and Tags](/guides/write-youtube-title-description-chapters-tags/) — a transcript is also where that draft starts.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 13 or later, on a Mac with Apple silicon.
