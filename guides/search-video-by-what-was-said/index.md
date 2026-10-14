---
layout: guide
title: "How to Find a Clip by What Was Said in It on a Mac"
description: "Transcribe your clips on-device, then search every transcript at once for a word or phrase and jump straight to that line."
permalink: /guides/search-video-by-what-was-said/
---
# How to Find a Clip by What Was Said in It on a Mac

Transcribe your clips, then open any clip's Transcript tab, type a word or phrase into Search, and tick All clips. MediaFlowSwift searches every transcript in the project at once and lists the matching lines; click one to jump straight to it.

That's the feature. The rest of this page covers how transcription works, what it costs you in privacy, and the one thing it doesn't do — search by speech from the main search field.

## Transcribing a clip

> Transcribe turns the speech in your video clips into text using Apple’s speech recognition. The text is saved with each clip in the project file, and import analysis uses it as one of its signals when it proposes a category. Audio-only files are not transcribed.

To do a whole project at once, choose Workflow → Analyze… → Transcribe and let it run; the progress panel reports how many clips it got through. To do one clip, select it, open the Transcript tab of the metadata panel, and click Transcribe This Clip.

## Where the audio goes

Transcription happens on this Mac by default, and stays there unless you say otherwise:

> Speech is recognized on this Mac. Apple’s online recognition is used only if you turn it on in Settings › Privacy, and only for a language this Mac has no on-device model for.

The only case that leaves the Mac is a language your Mac has no on-device model for, and even then only if you've opted in:

> MediaFlow recognizes speech on this Mac when the Mac has an on-device model for your system language. When it does not, nothing is transcribed unless you have turned on online speech recognition in Settings › Privacy; with that on, the audio is sent to Apple. The Transcript tab says which applies before you start. No API key is needed either way.

The Transcript tab tells you, before you click Transcribe, which of the two applies to that clip — so you always know whether the audio is staying on this Mac or going to Apple before anything is sent.

## Searching across every clip

The Transcript tab's own Search box is what gets you a speech search across the whole project:

> - Search — type in the field to show only the lines containing every word you typed. Tick All clips to search every clip’s transcript instead; click a result to select that clip

That's the tool for "what did she say about the budget" across forty interview clips — type `budget`, tick All clips, and read down the list of lines it turns up without opening a single clip by hand first.

## Fixing a mishear

Speech recognition mishears names, places and technical terms more often than ordinary words, and a wrong word in a transcript stays wrong until you fix it:

> - Correct — edit a line and press Return. The words change and the line’s timing stays as it was. Clear a line and press Return to remove it, for a cough or a false start the recognizer heard as a word

Transcribe Again throws out your corrections along with the rest of the transcript, so fix names and terms once you're happy with the pass, not before.

## What the project-wide search field doesn't do

MediaFlowSwift's main search field — the one in the toolbar, Cmd+F — is a different search from the Transcript tab's, and it does not look inside a transcript:

> A clip is found by its file name, its notes, its tags, its category, the camera it came from and its scene.

So typing a line of dialogue into the toolbar search won't find it. If you want the words someone said, not the filename or the notes you wrote about the clip, the Transcript tab's own Search, with All clips ticked, is the one that reads what's actually in the transcript.

## Getting a transcript out of MediaFlowSwift

Once a clip is transcribed, you can take the text with you:

> - Export — save the transcript as SubRip (.srt) or WebVTT (.vtt) subtitles, or as plain text with timecodes. The file is named after the clip

## Read more

- [Speech Transcription](/manual/organizing-media/#speech-transcription) — transcribing, correcting and exporting a transcript, in full
- [Filtering and Searching](/manual/managing-assets/#filtering-and-searching) — what the toolbar search field looks at, and the sidebar and filter menu beside it

## Other guides

- [How to Review Footage and Pick Your Selects on a Mac](/guides/review-and-pick-selects-on-a-mac/) — rating and tagging clips with the keyboard.
- [How to Write Your YouTube Title, Tags and Chapters Faster](/guides/write-youtube-title-description-chapters-tags/) — a transcript is also where that draft starts.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
