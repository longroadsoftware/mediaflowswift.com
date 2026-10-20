---
layout: guide
title: "How to Write Your YouTube Title, Chapters and Tags"
description: "MediaFlowSwift transcribes your finished video and drafts a title, description, chapters and tags from it. You edit the draft before anything goes live."
published: "2026-10-13"
updated: "2026-10-20"
permalink: /guides/write-youtube-title-description-chapters-tags/
---
# How to Write Your YouTube Title, Chapters and Tags

To write a YouTube title, description, chapters and tags in MediaFlowSwift, choose Workflow → Prepare for YouTube…, pick your exported video, and click Transcribe. Then click Write with the SEO Agent. The agent drafts five titles, a description, chapters and tags from the transcript and a short brief you fill in.

You edit the draft, upload the video yourself in YouTube Studio, then apply the finished words to the uploaded video from MediaFlowSwift. The rest of this page covers each step and what gets checked before anything can go live. It also covers what's sent where while the draft is being written.

## What does Prepare for YouTube work on?

> Prepare for YouTube works on the finished video you exported from your editor, not on the project’s clips. MediaFlow reads the file, transcribes what is said in it, and an SEO agent writes the words that go with it. You edit them.

1. Choose Workflow → Prepare for YouTube…
2. Click Choose Video… and pick the exported video — the file is only read, never changed or sent anywhere
3. Click Transcribe. A long video takes a few minutes
4. Fill in Your brief: who the video is for and the tone you want. Add anything the description must include, one item per line, such as links, credits or a call to action
5. Click Write with the SEO Agent
6. Edit anything you like. Click one of the other four titles to use it instead
7. Upload the video in YouTube Studio, then apply what you wrote to it

<figure class="guide-figure"><img src="/images/guides/write-youtube-title-description-chapters-tags.svg" width="720" height="260" style="max-width:100%;height:auto" alt="Process diagram in five steps: 1, choose the video exported from your editor, which is only read; 2, transcribe what is said in the video; 3, the SEO agent drafts titles, a description, chapters and tags; 4, you edit while the checklist flags what YouTube won't accept; 5, you upload in YouTube Studio, then Apply the words. A note says Apply needs Sending to YouTube turned on in Settings, Privacy." loading="lazy"><figcaption>Prepare for YouTube in MediaFlowSwift: the agent drafts, you edit and upload, and Apply puts the words on the uploaded video.</figcaption></figure>

## What does the agent actually do?

The SEO agent's first step:

> Reads the transcript and works out what the video is, who it is for, and the main phrase: the few words someone would most likely type to find it

From there, the SEO agent drafts:

> Writes a first draft: five titles that take different approaches, a description, chapters at the points where the subject changes, tags, and three suggestions for the words on the thumbnail

Then the SEO agent checks its own work and revises:

> Checks the draft against the checklist, is given every fault it found, re-reads the draft as a viewer would, and revises. It always revises once, and again if something that must be fixed remains

A revision that makes the draft worse is never used. Anything still wrong when the agent is done shows up in the checklist for you to fix yourself. You have the last word, not the agent.

## Where does the transcript go while it's writing?

In MediaFlowSwift, writing the draft is off until you turn it on. What gets sent depends on which model you've chosen in Settings › Analysis:

> This is off until you turn it on. In Settings › Privacy, switch on “A model that writes your YouTube title, description and tags”. While it is off and a paid provider is chosen, Write with the SEO Agent tells you where the switch is and sends nothing.

With the model that runs on this Mac, the transcript never leaves the Mac. One exception applies: if you've pointed that local model at another computer on your network, the transcript, the video's length and your brief go only as far as that computer.

A paid provider (Claude, ChatGPT or Gemini, with your own API key) receives more. The transcript, the video's length, your brief, and then the agent's own drafts for revision all go to that provider. The video itself, and its file name, never do.

## What has to be true before YouTube will show it?

The checklist beside the editor runs on whatever's in the fields, whether you wrote the words or the agent did. The red items are things YouTube enforces or that break a feature. The red items match what [YouTube's own help center documents for video titles and descriptions](https://support.google.com/youtube/answer/57404) and for [chapters](https://support.google.com/youtube/answer/9884579):

> - Title — not empty, and no more than 100 characters
> - Description — not empty, and no more than 5,000 characters, chapters included
> - The characters &lt; and > — YouTube does not accept them in a title or a description
> - Your brief — every line under Must include appears in the description, word for word
> - Chapters — the first starts at 0:00, there are at least three, none is shorter than 10 seconds, and none starts after the video ends. If any of these fails, YouTube shows no chapters at all
> - Tags — no more than 500 characters in total, counted the way YouTube counts: commas included, and two extra for each tag that contains a space

The tag count follows the [YouTube Data API's videos reference](https://developers.google.com/youtube/data/reference/rest/v3/videos). That reference gives tags a 500-character limit, counts the commas between tags, and counts a tag with a space as if it were wrapped in quotation marks. The same reference caps a title at 100 characters and rules out &lt; and > in a title or description.

Past the red items, the rest of the checklist is advice, not a YouTube rule. The grey items flag a title cut off in search past about 60 characters. They also check that your main phrase sits early in the title and within the first 150 characters of the description. Capitals that make a title harder to scan, and repeated tags, are flagged too.

## How do I get the words onto the video?

MediaFlowSwift never uploads the public video. You upload the video yourself, in YouTube Studio:

> That is how the video goes public: uploaded by you, in YouTube Studio, with no Google Cloud audit standing between you and the visibility you choose there.

Once the video is up, Apply to the Video I Uploaded… finds it on your channel, and you confirm which one. Apply sets the title, the description with chapters at its end, and the tags. Apply reads the video first, so nothing else on the video changes. Copy Title, Copy Description and Copy Tags are there too, if you'd rather paste the words in by hand.

Applying is off until you turn on Sending to YouTube in Settings › Privacy. Applying also needs a [Google client of your own](/manual/publishing/#setting-up-your-google-client), which takes about ten minutes to set up once.

## Read what it wrote before it goes out

The manual's warning about the SEO agent's draft:

> Read what it writes before you publish it. The agent works from a transcript, and speech recognition mishears names, places and technical words. A wrong name in a title is your name on a mistake.

## Read more

- [Preparing a Video for YouTube](/manual/publishing/#preparing-a-video-for-youtube) — the full workflow, step by step
- [The SEO Agent](/manual/publishing/#the-seo-agent) — what it does, which model writes it, and what's sent where
- [The Publishing Checklist](/manual/publishing/#the-publishing-checklist) — every check, red and grey, in full
- [Applying Your Details to the Video You Uploaded](/manual/publishing/#applying-your-details-to-the-video-you-uploaded) — what Apply changes on the video, and what it never touches

## Other guides

- [How to Find a Clip by What Was Said in It on a Mac](/guides/search-video-by-what-was-said/) — the same on-this-Mac transcription that feeds this draft.

[All guides](/guides/) — the full list.

## Try it on your own footage

MediaFlowSwift is the Mac app this guide describes. [Download it](/download.html) and the full app runs for 14 days, with no card asked for — macOS 14 or later, on a Mac with Apple silicon.
