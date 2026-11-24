---
layout: manual
title: "Publishing — MediaFlowSwift Manual"
description: "Choose your finished video, transcribe it, and get a title, description, chapters and tags. Upload the video in YouTube Studio, and MediaFlow applies…"
permalink: /manual/publishing/
generated: tools/import-guide.sh
---
# Publishing

## Preparing a Video for YouTube

*Choose your finished video, transcribe it, and get a title, description, chapters and tags. Upload the video in YouTube Studio, and MediaFlow applies them to it, with the thumbnail and captions.*

Prepare for YouTube works on the finished video you exported from your editor, not on the project’s clips. MediaFlow reads the file, transcribes what is said in it, and an SEO agent writes the words that go with it. You edit them. Then the video goes up in YouTube Studio, and MediaFlow applies what it prepared to it: the Into YouTube Studio strip above the tabs has Open YouTube Studio…, which opens YouTube’s upload page in your browser, and Apply to the Video I Uploaded…, which finds that video on your channel and sets the title, description with chapters, tags, thumbnail and captions on it. Copy Title, Copy Description and Copy Tags are there too, for pasting the words in by hand. That is how the video goes public: uploaded by you, in YouTube Studio, with no Google Cloud audit standing between you and the visibility you choose there. See Applying Your Details to the Video You Uploaded.

1. Choose Workflow → Prepare for YouTube…
2. Click Choose Video… and pick the exported video. MediaFlow shows its length and format. The file is only read; it is never changed and never sent anywhere
3. Click Transcribe, and allow speech recognition the first time macOS asks. A long video takes a few minutes. The line under the button says whether the audio stays on this Mac
4. At the top of Your brief, choose your channel from the Channel menu, or None. The first time, click Save as New… and describe your channel once: see Your Channel’s Voice under The SEO Agent. A new video starts with the channel you chose last
5. Fill in the rest of Your brief with what only you know about this video: who it is for, the tone for this video if it differs from the channel’s, and anything the description must include, one item per line, such as credits or a call to action. Under those, say what to say: the story of this video, the points to cover, and corrections for anything said wrong on camera; see What to Say under The SEO Agent. Each is a box under its name, with a grey example in it until you type; the example is never saved or sent
6. Under Links under the description, add this video’s links: the products in it, the guests featured and related videos. See Links Under the Description, below
7. Click Write with the SEO Agent. See The SEO Agent for what it does and what it sends. If a title, description or tags are already there, MediaFlow asks before replacing them
8. Edit anything you like. Click one of the other titles to use it instead. The checklist updates as you type
9. Click Open YouTube Studio… and upload the video there, with any title for now. Then click Apply to the Video I Uploaded…, confirm the video in the sheet, and click Apply. Or click Copy Title, Copy Description and Copy Tags in turn, or the small Copy beside each field, and paste each into the upload page; the links and chapters are added to the end of the description when you copy it

Open YouTube Studio… only opens a page in your browser, when you click it; MediaFlow sends nothing. Apply needs the YouTube sign-in described under Setting Up Your Google Client, which takes about ten minutes once. The Upload tab, last of the tabs and marked advanced, is a separate, optional path: while the Google project you signed in through has not passed Google’s audit, a video sent from there is a private copy for review, not the public video. See Uploading to YouTube.

Your draft is saved in the project’s folder, in Publish/publish-draft.json, a moment after each change and when you close the window. It moves, archives and restores with the project. A project that has not been saved yet has no folder, and the window says the draft cannot be kept until it has one. Choosing a different video clears the transcript, the chapters and the thumbnail’s frame, because they belong to the video they came from.

### Links Under the Description

Links have their own list, under Your brief. Each has a kind, a name and a web address: a product goes under Gear in this video, a featured guest under Featured, a related video under Watch next, and anything else under More links. The links every video carries, such as your website, your social pages and your shop, are saved once in the channel voice. They go under Find us after the agent writes with that voice, as the sign-off does: a description you write yourself, without the agent, gets your video’s links but not the voice’s. Once the agent has written with a voice, a change to that voice’s links goes in straight away, without writing again; another voice’s links go in the next time the agent writes with it. MediaFlow puts the links under the description itself, word for word, grouped by kind under those short headings, above the chapters and your sign-off. A kind with no links is left out. The Links box on the Words tab shows them as they will read.

When you are signed in to YouTube, Add From Your Uploads… lists your channel’s recent uploads, and each one you add goes under Watch next with its title. Each shows whether it is public, unlisted or private; viewers can’t open a private one. Nothing is written to YouTube.

A web address must start with https:// or http://, then a site name with a dot in it (such as example.com), with no spaces and no &lt; or >. A link whose address cannot be used is left out of the description, and the checklist marks it as something to fix: Apply and Upload wait until you fix the address or remove the link, under Links or in the channel voice. The links count toward the 5,000 characters YouTube allows. The agent is told only the links’ names, so it can say the links are below; it never writes a web address itself. One it writes in the description that is not one of your links, a link’s site name (such as example.com for example.com/shop) or in Must include is taken out, and the note under Write with the SEO Agent says which. That is any address starting https://, http:// or www., and any site name such as example.org. A file’s or a program’s name, such as clip.mov or Node.js, is left alone, and so is a site name ending like a file or a program (such as mysite.app).

If a description has affiliate links, switch on This description has affiliate links in the channel voice, and write your disclosure in your own words. After the agent writes with that voice, MediaFlow puts it at the top of the links. It does not write the wording for you.

YouTube makes the links in a video’s description clickable only once your channel has its advanced features, which come with a good channel history or by verifying your identity in YouTube Studio. Until then they show as plain text. In a Short’s description, YouTube never makes links clickable. Links typed into Must include before there was a list stay there and still work.

> **Tip:** You can use the checklist without the agent. Type your own title, description and tags, set the main phrase, and it checks them the same way.

See also: [Applying Your Details to the Video You Uploaded](#applying-your-details-to-the-video-you-uploaded), [The SEO Agent](#the-seo-agent), [The Publishing Checklist](#the-publishing-checklist), [Making a Thumbnail](#making-a-thumbnail), [Uploading to YouTube](#uploading-to-youtube), [Speech Transcription](/manual/organizing-media/#speech-transcription), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

## Applying Your Details to the Video You Uploaded

*Upload the video in YouTube Studio yourself; MediaFlow finds it on your channel, you confirm it, and it sets the title, description, chapters, tags, thumbnail and captions it prepared.*

Google holds every video uploaded through a Google Cloud project that has not passed its audit Private, which is why the Upload tab is the advanced path. A video you upload in YouTube Studio is not held: its visibility is yours to choose there, and nothing stops MediaFlow setting its details afterwards. So the way to publish is: upload in YouTube Studio, then click Apply to the Video I Uploaded… in the Into YouTube Studio strip above the tabs.

### Before the First Time

Apply signs in to YouTube with a Google client of your own, as the Upload tab does: see Setting Up Your Google Client, about ten minutes once. Turn on Sending to YouTube in Settings › Privacy, add the client, and sign in on the Upload tab. If you signed in with an earlier version, MediaFlow asks you to click Sign In Again… once: the permission it asked for before could upload but not change a video already on your channel. Google words the permission it asks for now as “See, edit, and permanently delete your YouTube videos, ratings, comments and captions”; MediaFlow uses it only to set the details on the video you confirm, and never deletes anything.

### Applying

1. Click Open YouTube Studio… and upload the finished video there. Any title will do for now; choose the visibility you want, or leave it Private until you have checked the result
2. Back in MediaFlow, click Apply to the Video I Uploaded…. MediaFlow reads your channel’s newest uploads, up to 25, and opens a sheet listing them, newest first, with each one’s picture, title, upload time, length, file name and visibility
3. The one that looks like your video is marked Looks like it, and the mark says why: the file YouTube recorded has the same name as the video you chose here (the newest such upload, so a second cut uploaded under the same name wins over the one applied to before); failing that, the video these details were applied to before; failing that, if you renamed the file, one uploaded today, or on the day the file was exported, of the same length to within two seconds. A video uploaded from the Upload tab, the private copy, is never marked. Check it, or choose another
4. Choose what else to set: the thumbnail from the Thumbnail tab, the transcript as captions, a change of visibility or a publish time, the category chosen on the Upload tab, and the recording date (the first clip’s date). By default the visibility and the category stay as you set them when you uploaded
5. Click Apply. Nothing is written before that

### What Apply Sets, and What It Never Touches

MediaFlow reads the video first and writes back what it read with only these changed: the title, the description with the chapters at its end, and the tags; the category too, if you tick it in the sheet. Tags you did not prepare are not cleared: with none in the draft, the video keeps its own. YouTube replaces every detail of a part it is sent, so reading first is what keeps the rest, such as the video’s default language, exactly as it was. The visibility, publish time and made-for-kids answer are sent only when you change the visibility in the sheet, and then the made-for-kids answer already on the video goes back as it was. The recording date is set only if you tick it. Nothing else on the video is sent: not the end screens, cards, playlists, comments, monetisation or translations, and MediaFlow never deletes a video, a comment or a rating.

- The thumbnail: the frame and words from the Thumbnail tab, exactly as Export Thumbnail would make them. It replaces the video’s current thumbnail, including one you uploaded in YouTube Studio; the picture beside each video in the sheet is the current one. YouTube accepts custom thumbnails only from a channel verified by phone (youtube.com/verify); if it refuses, MediaFlow says so, and the words are still on the video
- The captions: the transcript, line by line with its timings, as a caption track named MediaFlowSwift, in the language the transcript was made in, which is this Mac’s. The next Apply replaces that track; a track anybody added in YouTube Studio, or YouTube’s own automatic captions, is never touched. YouTube takes captions only once it has finished processing the video: if it refuses, wait a few minutes and click Apply again with only the captions ticked
- Read what the agent wrote before you apply it: a wrong name in a title is your name on a mistake

### Afterwards

The video is recorded as published, in Publish/upload-state.json in the project’s folder and in your shared database if you use one, with YouTube’s upload time: the Results tab lists it and reads its views and watch time, as for a video uploaded from here. Clicking Apply again marks the same video and updates it, so you can fix a title or add captions later. The Upload tab shows the video as uploaded, with Open This Video in YouTube Studio. An unfinished upload of the same file from the Upload tab is let go when you apply, and MediaFlow says so.

> **Tip:** Applying costs about 100 of your Google Cloud project’s 10,000 daily units, and about 450 more with captions: the words are 50, the thumbnail 50, listing the caption tracks 50 and a new caption track 400, or 450 to replace an earlier MediaFlowSwift track (500 with the listing). Finding the video costs 3. Statistics, read from the Results tab, need read-only permission to see your YouTube Analytics reports and, only with Sending to YouTube off, read-only permission to see your YouTube account.

### If Something Is Refused

- A video not found: it was deleted, or the Google account you signed in to does not manage the channel it is on. Click Sign In Again… and choose the account that does
- The allowance used up: your project’s 10,000 units reset at midnight Pacific time
- The thumbnail refused: the channel is not verified by phone; verify it at youtube.com/verify, then Apply again with only the thumbnail ticked
- The captions refused: the video is still being processed; wait and Apply again with only the captions ticked
- The permission missing: the sign-in is from an earlier version, or the permission was unticked at Google. Click Sign In Again… beside the message

See also: [Preparing a Video for YouTube](#preparing-a-video-for-youtube), [Setting Up Your Google Client](#setting-up-your-google-client), [Making a Thumbnail](#making-a-thumbnail), [How Your Videos Are Doing](#how-your-videos-are-doing), [Uploading to YouTube](#uploading-to-youtube), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

## The SEO Agent

*A model writes your title, description, chapters and tags in three passes, and checks its own work against YouTube’s rules before you see it.*

SEO means being found: in YouTube’s search, and chosen from the list of results. The agent works only from your video’s transcript, your brief and your channel’s voice. It is told never to invent facts, names, numbers or links, and never to promise what the video does not deliver.

### What It Does

1. Reads the transcript and works out what the video is, who it is for, and the main phrase: the few words someone would most likely type to find it
2. Writes a first draft: five titles that take different approaches, a description, chapters at the points where the subject changes, tags, and three suggestions for the words on the thumbnail. On a video longer than ten minutes it aims for a chapter every three to five minutes, to the end, and asks for no more than 20, so on a video longer than 100 minutes they are further apart
3. Checks the draft against the checklist, is given every fault it found, re-reads the draft as a viewer would, and revises. It always revises once, and again if something that must be fixed remains or its chapters stop before halfway through a long video

The window shows each pass as it happens, whether the model is thinking or writing, and the time so far. Stop stops it. Once there is a draft, Stop keeps the latest one, as a revision that cannot finish does, and the window says so; before then, Stop leaves the window as it was. Afterwards a line says what the agent changed on its last revision. A revision that makes the draft worse is not used, and one that loses every chapter keeps the chapters the draft had. Anything still wrong at the end shows in the checklist for you to fix: you have the last word. Each chapter is asked for at a time shown in the transcript, and starts where what is said there starts; a chapter at a moment where nothing is said is left out, except the first, which stays at 0:00 even when the video opens with no talk. If the model’s chapters break YouTube’s rules and cannot be repaired, none are added and the Chapters field says why. If your API key is rejected, the spending limit is reached, or the Privacy switch is turned off while it is working, the agent stops and says so.

### Your Channel’s Voice

Every video on a channel is written the same way: who you are, how you talk, the segments you always do, the sign-off and the hashtags. Save that once as a channel voice and the agent writes every video in it. Click Save as New… at the top of Your brief, give the channel a name, and fill in what applies; every box but the name can be left empty. Edit… changes the voice chosen, for every video that uses it the next time it is written. Voices are kept on this Mac, for every project, in Channel Voices in MediaFlowSwift’s Application Support folder.

- Who we are — one or two sentences about the people on camera
- How we talk — the channel’s usual tone. Tone for this video, in the brief, takes its place for one video
- Who it is for — the channel’s usual audience. Who it is for, in the brief, takes its place for one video
- Recurring segments — one per line. When the transcript has one, the agent names it in the description
- A title in our style — an example the agent learns from, not a template it fills in
- Sign-off — put at the end of every description word for word, except the characters &lt; and >, which YouTube does not accept
- Hashtags — up to three, on the description’s last line. When you copy or apply the description, the chapters go in above the sign-off, so the hashtags stay last
- Avoid — kept to on every video, together with the brief’s own Avoid
- Links on every video — your website, social pages and shop, under Find us, and This description has affiliate links, with your own disclosure. Like the sign-off, they go in after the agent writes. See Links Under the Description, under Preparing a Video for YouTube

MediaFlow adds the sign-off and hashtags to the description itself, after the agent writes: a model can drop or reword them. They are never sent to the model. Writing again puts them in once, not twice, unless the agent ends a sentence of its own with your sign-off: then it can show twice, so delete one. So can hashtags the agent puts straight onto its last word with no space, as in Pine Hollow.#rvlife; that is rare. If you edit them out, the checklist says so. The draft keeps a copy of the voice it was written with, so if the voice has changed since, or another channel is chosen, Your brief says which one the words were written with.

### What to Say

You know things the transcript doesn’t say clearly: what the story of this video is, which moments matter, and where you misspoke on camera. Tell the agent in your own words, in the last three boxes of Your brief. It is told to keep to them, and the checklist watches for the wrong words in a correction, but a model can still miss one, so read what it writes.

- The story — one or two lines, such as Alex drove up alone after work and deer came right up to our site. The agent is told to lead every title and the description’s first sentence with it
- Points to cover — one per line, such as 3 likes and 3 dislikes. The agent is told to cover each one the transcript supports
- Corrections — one per line, such as On camera we said Pine Lake; it’s Cedar Lake. A correction wins over the transcript: the agent is told to use the right fact and never write the wrong one

Write a correction as we said this; it’s that, or this → that, or this should be that, or it’s that, not this. Then the checklist watches for the wrong words: if they are still in the title or the description, chapters included, it is a must-fix item, the agent is told to fix it when it revises, and Apply and Upload wait until it is fixed. Your channel’s sign-off and hashtags at the end are not checked, because MediaFlow adds them itself. If the checklist is wrong about one, change the line or delete it. A correction written another way, such as the dump station was actually $20, still goes to the agent, but the checklist cannot watch for it. So does this should be that when this starts with the, a, our or the like, as in the dump station should be $20, because then this is what the line is about, not the wrong words; put wrong words that start that way in quotation marks. When a line starts with said, called or wrote and the right words repeat the wrong ones, as in Said Norris; it’s Norris Lake, the first word is read as part of the wrong words, as it is in a name like Says Creek, so the checklist looks for Said Norris, not Norris. When it is not part of the name, start the line with we said or I said.

### Which Model

The agent uses the model chosen under Writing for YouTube in Settings › Analysis: the model on this Mac, or Claude, ChatGPT or Gemini with your own API key. That is its own choice, apart from the model that sorts clips: writing reads text only, so it needs no model that sees pictures, and you can sort on this Mac and write with a paid provider, or the other way round. After an update from an earlier version it starts as the model you used before, until you change it. A paid provider writes noticeably better than a small model on this Mac, takes about a minute, and costs a few cents for a video. The model on this Mac is free and private but slow: allow ten to twenty minutes for a video, and longer for a long one, because the model reads the whole transcript before it writes and a slower Mac takes longer to read it. The window shows which pass it is on and the time so far. A small model sometimes cannot finish the revision. When that happens you get the latest draft, the window says so, and the checklist shows what is left to fix. The daily spending limit in Settings › Analysis applies, and the agent stops before a request that would pass it.

If the model doesn’t answer, the window says which model it asked and what to do next. A pass has no time limit while the model is still thinking or writing: the agent gives up only when the model goes quiet, saying nothing for a minute, or before its first word, while it reads the transcript, for two minutes, or at least five with the model on this Mac, and longer for a long transcript, which a slower Mac takes longer to read. Gemini answers all at once rather than as it writes, so with Gemini each pass has three minutes. A thinking model on this Mac, such as qwen3-vl:8b, thinks at length before every answer, so a video takes many times longer: choose its instruct edition, such as qwen3-vl:8b-instruct, under Writing for YouTube in Settings › Analysis. If you choose the thinking edition of Qwen 3-VL there, a warning under Model says so, and the list of models on this Mac marks the other models that think first. To know before you start, click Test under Writing for YouTube: it asks the model one short question and says how quickly it answered, or that it thinks before every answer and which model to choose instead.

### What Is Sent, and to Whom

With the model on this Mac, nothing leaves it. If you have pointed the local model at another computer on your network in Settings › Analysis, the transcript, the video’s length, your brief, the channel voice and the drafts go to that computer and no further; an address on the internet is refused. With a paid provider, the agent sends the transcript of the video you chose, the video’s length, your brief with what to say, the names of your links (never their web addresses), the channel voice you chose (but not its sign-off, hashtags, link addresses or affiliate disclosure), and then its own drafts for revision, to that provider. It never sends the video, its file name, or anything else in the project.

This is off until you turn it on. In Settings › Privacy, switch on “A model that writes your YouTube title, description and tags”. While it is off and a paid provider is chosen, Write with the SEO Agent tells you where the switch is and sends nothing. Under the switch, Now says which provider and model writing is set to at the moment.

> **Warning:** Read what it writes before you publish it. The agent works from a transcript, and speech recognition mishears names, places and technical words. A wrong name in a title is your name on a mistake.

Writing with the agent is part of Studio Pro; see Plans and Pricing. The plan puts no monthly limit on it: a paid provider bills your own account, within the daily spending limit you set, and a model on this Mac costs nothing.

See also: [Preparing a Video for YouTube](#preparing-a-video-for-youtube), [The Publishing Checklist](#the-publishing-checklist), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac), [Using AI to Suggest Categories](/manual/organizing-media/#using-ai-to-suggest-categories)

## The Publishing Checklist

*What the checklist checks, which items YouTube enforces and which are advice.*

The checklist beside the editor runs on whatever is in the fields, whether you or the agent wrote it. A red item is something YouTube enforces, that breaks a feature, or that you asked for in your brief. A grey item is advice.

### Must Fix

- Title — not empty, and no more than 100 characters
- Description — not empty, and no more than 5,000 characters, links and chapters included
- The characters &lt; and > — YouTube does not accept them in a title or a description
- Your brief — every line under Must include appears in the description, word for word
- Links — every link under Links, and in the channel voice, has a web address that starts with https:// or http://, then a site name with a dot in it, with no spaces, &lt; or >. One that cannot be used is left out of the description
- Corrections — the wrong words from a line under Corrections are not in the title or the description, chapters included, except your channel’s sign-off and hashtags at the end, which MediaFlow adds itself
- Chapters — the first starts at 0:00, there are at least three, none is shorter than 10 seconds, and none starts after the video ends. If any of these fails, YouTube shows no chapters at all
- Tags — no more than 500 characters in total, counted the way YouTube counts: commas included, and two extra for each tag that contains a space

### Advice

- Title length — past about 60 characters a title is cut off in search results, so the words that matter come first
- Main phrase — it appears in the title, early, and in the first 150 characters of the description, which is the part shown before “more”
- Capitals — a title written entirely in capitals is harder to scan
- Chapters on a long video — on a video longer than ten minutes, the last chapter starts in the second half and no stretch without a chapter is longer than a quarter of the video, so viewers can find their way through all of it. When its own chapters stop before halfway, the SEO Agent revises its draft again
- Tags — there are some, and none is repeated. Tags matter less than the title and description; they help with alternate wordings and misspellings
- Your channel’s sign-off and hashtags — still in the description after you edit it, when the words were written with a channel voice
- Affiliate disclosure — the channel voice says the description has affiliate links but has no disclosure written

The limits are YouTube’s. The advice is long-standing common ground about YouTube search, not a promise of how a video will rank.

See also: [Preparing a Video for YouTube](#preparing-a-video-for-youtube), [The SEO Agent](#the-seo-agent)

## Making a Thumbnail

*Pick a frame from your finished video, put a few words over it, simply or in the bold Place style, and export a thumbnail that meets YouTube’s specification.*

The Thumbnail tab of Prepare for YouTube makes the picture that goes with your title. It works from the finished video you chose; the video is only read. Nothing leaves this Mac.

1. Choose Workflow → Prepare for YouTube…, choose your finished video if you have not, and click the Thumbnail tab
2. Drag the Frame slider to the moment you want. The picture follows roughly while you drag and settles on the exact frame when you let go
3. Or click Suggest Frames. MediaFlow looks through the video, leaving out the first and last twentieth where titles, fades and end cards live, and offers 24 frames in a strip, the sharpest first, each with its time. Click one to use it
4. Look nearby then offers the frames 1, 2 and 4 seconds either side of the one you clicked, the sharpest first: for when the moment is right but the frame is a little soft. Click one to use it
5. Choose a style: Simple, a headline anywhere on the frame, or Place, described below
6. Type the words. Press Return for a second line; two lines is the most. If the SEO agent has written for this video, its suggestions appear as buttons under the field
7. In Simple, choose where the words sit, their colour, and whether they have a dark band behind them. In either style, Size makes the headline smaller than the largest that fits
8. Click Export Thumbnail…. MediaFlow offers the project’s Publish folder

### The Place Style

Place is the layout of a good travel or review thumbnail. The name is big, in a colour, with a dark outline (a white one if the name is black), on two lines if you press Return. Under it goes a smaller white line, about a third of the size, such as the state. Below them sits a badge, a rounded tag in red, yellow, blue or green, for a segment you always do, and a short hook goes in the top corner on the other side. Darken shades one side of the frame, left, right or bottom, so the words read over any picture, and the words sit on that side. None leaves the frame as it is.

- Everything is measured and made smaller to fit rather than cut off, and nothing overlaps
- The bottom-right corner is always left empty, because YouTube shows the video’s length there
- The line under the name, the badge and the hook are one line each
- The SEO agent’s suggestions appear under the name, the badge and the hook too. Click one to use it
- With a channel voice chosen in the brief, its recurring segments are offered under the badge. When you choose Place and the badge is empty, it starts as the first segment the video mentions

### What Is Exported

A JPEG, 1920 by 1080 pixels, the 16:9 shape YouTube asks for, and under its 2 MB limit. YouTube accepts 1280 by 720 at the least; the larger picture looks sharper on a TV. MediaFlow lowers the JPEG quality a step at a time until the file fits, which for nearly every frame means not at all. A vertical or square video is cropped to its middle, never squashed.

### Words That Can Be Read

- The words are as large as will fit, and are shrunk to fit rather than cut off
- They have a dark outline, or a white one around black words, so they hold against any picture. In Simple with the band off, a soft shadow lifts them off a bright background
- A thumbnail is seen small, often on a phone. Past about four words MediaFlow adds a note, because more is not read
- Let the words add to the title rather than repeat it: the stake, the result or the surprise. That is what the agent’s suggestions aim for, and they are only offered; your own words are never replaced

The frame, the words and their style are saved with your draft, so reopening the window shows the same thumbnail and exporting again gives the same file.

See also: [Preparing a Video for YouTube](#preparing-a-video-for-youtube), [The SEO Agent](#the-seo-agent)

## Uploading to YouTube

*Advanced and optional: send a private copy of the finished video to your channel for review from the Upload tab. The public video is uploaded in YouTube Studio, with the words MediaFlow prepared.*

### A Private Copy for Review

The Upload tab is the advanced, optional path, and what it sends is a private copy for review. Uploading goes through the Google project you signed in through, MediaFlowSwift’s own or yours if you use your own Google Cloud project, and Google restricts every video uploaded through a project made since July 2020 that has not passed its audit to private viewing, whatever visibility or publish time you choose. A project you made for yourself has not passed it. The lock cannot be lifted in YouTube Studio, and there is nothing to appeal. Only an audited project avoids it, for the uploads that come after, and a video already locked stays locked: Google’s own advice is to upload it again. Until the project you signed in through has passed it, treat an upload from here as a private copy for review, which you can see in YouTube Studio.

The public video is uploaded in YouTube Studio. Click Open YouTube Studio… in the Into YouTube Studio strip above the tabs of Prepare for YouTube, upload the file there, and paste in the title, description and tags that Copy puts on the clipboard. See Preparing a Video for YouTube.

### Sending the Private Copy

Uploading is off until you turn it on. Turn on Sending to YouTube in Settings › Privacy, add a Google client of your own (see Setting Up Your Google Client), and sign in. Nothing is sent until you click Upload and confirm.

1. Choose Workflow → Prepare for YouTube… and click the Upload tab
2. Click Sign In to YouTube…. Your browser opens at Google; sign in there and pick the channel. MediaFlow never sees your password. It asks for the one permission that can set a video’s details and captions as well as upload, which Google words as “See, edit, and permanently delete your YouTube videos, ratings, comments and captions”. MediaFlow uses it only to send the video and its thumbnail from here, and to set the details on the video you confirm with Apply; it never deletes anything
3. Choose the visibility: Private, Unlisted or Public. Or turn on Publish at a set time: the video goes up Private and YouTube makes it public at that time, which must be at least 15 minutes away. From a project that has not passed Google’s audit, neither takes effect: the video stays Private, as above
4. Answer Made for kids. YouTube requires the answer by law, and MediaFlow does not give it for you: the upload cannot start until you choose
5. Choose the category. Turn on Send the thumbnail from the Thumbnail tab if you made one; left off, YouTube picks a frame itself
6. Deal with anything listed in red. An upload does not start while the checklist on the Words tab has something that must be fixed
7. Click Upload to YouTube…. MediaFlow shows what is going, how large it is and the visibility you asked for. Click Upload to send it

### If Your Uploads Come Out Private

Google keeps every upload Private from any Google Cloud project made since July 2020 that has not passed its audit, whatever visibility is asked for. A project you have just made has not. The video is safely on your channel, and YouTube Studio cannot change that. Use it as the private copy it is: for review, for a last look at the words and the thumbnail. For the public video, upload the file in YouTube Studio with the words MediaFlow prepared. Google’s audit form is linked from the YouTube Data API page of your project; it is Google’s review of an app and how it uses YouTube, Google gives no time for it, and it does not unlock a video already uploaded.

### If Google’s Sign-In Service Is Busy

An upload renews your sign-in with Google as it goes, about once an hour on a long one. If Google’s sign-in service is busy just then, MediaFlow waits and asks again, for a minute or so, and the upload carries on. If it is still busy after that, the upload stops and says so: what was sent is kept, and Continue the Upload… carries on from there. Reading statistics asks only once.

### A Dropped Connection, or Stopping

The video is sent in pieces. If the connection drops, or YouTube is busy, MediaFlow waits, asks YouTube how much arrived, and carries on from there. It waits longer after each failure and gives up after ten in a row, a little over a quarter of an hour; being off the network altogether is simply waited out. If you click Stop or quit, what was sent is kept: the button reads Continue the Upload… next time, for about a week, unless you sign out. The upload starts again from the beginning if the video file has changed, or if you have changed the title, description, tags or settings, because an unfinished upload carries the words it was started with; MediaFlow tells you so before it begins. Only YouTube letting the upload lapse, a changed video or changed details, or your own Start Again… after an upload another account began, start it again: an expired or refused sign-in, signing in again, a full allowance or a dropped connection never do. A publish time is fixed when the upload starts, so for a large video on a slow connection choose a time well ahead.

### The Thumbnail

The thumbnail is sent after the video. YouTube accepts custom thumbnails only from a channel verified by phone (youtube.com/verify). If it is refused, the video is still up: MediaFlow says so, and Send the Thumbnail to This Video tries again without uploading the video again. You can also export the thumbnail and add it in YouTube Studio.

### If Your Sign-In Expires or Is Not Accepted

If your sign-in expires, or you remove MediaFlow’s permission at Google, MediaFlow says the sign-in has expired and offers Sign In Again… beside the message, which takes you straight to Google. If YouTube does not accept a sign-in, MediaFlow says so and offers the same. That usually means the Google account chosen has no YouTube channel, or is not the one that manages the channel you upload to: it is easy to pick the wrong one when Google asks you to choose an account. Click Sign In Again… and choose the account and channel you upload to; if you have no channel yet, create one at youtube.com first.

Either way MediaFlow lets that sign-in go, and the video’s details and any upload already under way are kept: after signing in, click Continue the Upload… and it carries on from where it stopped. There is no need to sign out, which would forget the unfinished upload. MediaFlow renews a sign-in YouTube did not accept only once, and never tries it again on its own: if YouTube still does not accept it after you have signed in again, MediaFlow says so again.

### Signing In Again Without Signing Out

While you are signed in, the Upload tab shows Sign In Again… beside Sign Out. It opens Google in your browser, as signing in does, and asks for what the switches in Settings › Privacy allow now. Use it to add permission to read statistics, to add the permission to upload after signing in for statistics only, or to choose another account. Unfinished uploads are kept, and Continue the Upload… carries on afterwards. Wherever MediaFlow says a sign-in lacks a permission, or that another account is needed, it offers the same button beside the message. It asks only for what the switches allow now: with Uploading off, the new sign-in will not upload, and when you turn Uploading on, MediaFlow asks you to sign in again for it.

If you untick the permission to upload at Google, tick only half of what statistics need, or the sign-in does not finish, the sign-in you had is kept as it was and nothing new is kept. Unticking the statistics permission is allowed: the new sign-in then uploads, without statistics. Signing in again does not cancel the permission you gave before, because Google cancels everything one account gave MediaFlow together, the new sign-in included; Sign Out later cancels it all. If you chose another account, you can remove MediaFlow from the first one at myaccount.google.com/permissions. The same goes for another account whose Sign In Again could not be used: MediaFlow does not hand that one back while your earlier sign-in is kept, so it may still list MediaFlow there.

### An Upload Begun with Another Account

An unfinished upload belongs to the Google account that began it. If you have signed in again since, with another account, YouTube may not let the new sign-in carry it on. MediaFlow then says so and stops that upload only: your sign-in is kept, and so is what was sent. Click Sign In Again… and choose the account that began it to carry on where it stopped, or click Start Again… to send the video from the beginning with the account you are signed in to now; the unfinished upload is let go once the new one is under way. If you already chose the account that began it and YouTube still will not carry it on, click Start Again: if YouTube does not accept that account at all, MediaFlow then says so. If YouTube does carry it on, the video goes to the channel it was begun on.

### What Is Kept

- Your sign-in is kept in the Keychain, never in a file. Sign Out forgets it, forgets any unfinished upload, and asks Google to cancel the permission. To add a permission or choose another account, use Sign In Again… instead, which keeps them. When an unfinished upload from about the last week is kept, in this project or another, Sign Out asks first and says how many would have to start again from the beginning; Cancel keeps them. Older ones are not counted: YouTube lets an unfinished upload go after about a week. If both YouTube switches are off in Settings › Privacy, Google is not contacted: MediaFlow says so, and you can remove it yourself at myaccount.google.com/permissions
- Removing the client secret in Settings stops any upload, signs you out the same way, and then forgets the secret. When an unfinished upload from about the last week is kept, it asks first in the same way
- Publish/upload-state.json in the project’s folder records which file went up, when, the video’s ID, and the words and settings it went up with, and, while an upload is unfinished, a random name for the sign-in that began it, which says nothing about your account. The address of an unfinished upload is kept in the Keychain, not in that file
- Uploading a video that has already gone up asks first, because it makes a second copy on your channel

### What the Database Records

When an upload finishes, MediaFlow adds the video to the shared database, if you use one. It is kept there, in the published_videos table, as the record of what you have published across all your projects. Nothing about it is sent anywhere else.

- The project, the video’s YouTube ID, its title and main phrase
- The file’s name and size, the video’s length and format
- When the upload started and finished, and how long it took from start to finish, stops included. If the app was closed as the last piece arrived, the finish is the moment MediaFlow next asked YouTube, and how long it took is left empty
- The visibility you asked for (recorded as scheduled when you set a publish time), that time, your made-for-kids answer and the category
- When it was to go live, as arranged: the end of the upload for a Public video, the set time for a scheduled one, or the end of the upload if that came later. It is left empty for Private and Unlisted videos. Whether it did go live, only YouTube can say, and the Results tab says live only once YouTube has: see How Your Videos Are Doing
- Whether the thumbnail was sent, and its words
- The length of the title and description, the tags and how many, the number of chapters, the number of words in the transcript, and which model wrote the words

These are the words and settings the video went up with, even if you edit the draft afterwards. If the database was not connected when the upload finished, the video is added the next time you open Prepare for YouTube for that project, or upload from it; a later upload does not push it aside. The visibility is what you asked for: MediaFlow’s permission cannot read your channel, so if Google kept a Public video Private, as it does from a project that has not passed its audit, or you changed a video’s visibility in YouTube Studio where that is allowed, the database does not know. Turning on statistics changes that: see How Your Videos Are Doing.

> **Tip:** Since 4 December 2025 an upload costs about 100 units, and since 1 June 2026 uploads have a daily allowance of their own, 100 a day, apart from the project’s 10,000 units for everything else; the thumbnail is 50 of those, and applying details to a video 50, with about 450 more for captions. Both allowances reset at midnight Pacific time.

Uploading, and reading results, are part of Studio Pro; see Plans and Pricing. The plan puts no monthly limit on them: they run on your own Google Cloud project, whose daily allowance is the only limit.

See also: [Setting Up Your Google Client](#setting-up-your-google-client), [How Your Videos Are Doing](#how-your-videos-are-doing), [Preparing a Video for YouTube](#preparing-a-video-for-youtube), [The Publishing Checklist](#the-publishing-checklist), [Making a Thumbnail](#making-a-thumbnail), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

## Setting Up Your Google Client

*Apply to the Video I Uploaded, and the advanced Upload tab, sign in through a Google Cloud project of your own. Making one takes about ten minutes and is free.*

This is for Apply to the Video I Uploaded, which sets the words, thumbnail and captions on a video you uploaded in YouTube Studio, and for the Upload tab, the advanced and optional path. You can publish without it: upload the video in YouTube Studio and paste in the words MediaFlow prepared, as Preparing a Video for YouTube describes.

Google requires every app that changes anything on YouTube to identify itself with a client. MediaFlow uses one that belongs to you, so what it does counts against your own allowance and nobody else stands between you and your channel. You do this once. Because the project is yours and has not passed Google’s audit, every video it uploads is kept Private by Google, and YouTube Studio cannot change that: an upload from the Upload tab is a private copy for review. A video you upload in YouTube Studio is not held, and Apply sets its details through this same client. See Applying Your Details to the Video You Uploaded and Uploading to YouTube.

1. In your browser, open console.cloud.google.com and sign in with the Google account that owns your channel
2. Create a project. Any name will do
3. Under APIs & Services › Library, find YouTube Data API v3 and click Enable. If you will read statistics, enable YouTube Analytics API too
4. From the menu, open Google Auth platform › Branding and click Get Started. Give the app a name and your email address, choose External for the audience, give your email address for contact, agree to Google’s user data policy, and click Create
5. Under Google Auth platform › Clients, click Create Client, choose the application type Desktop app, give it any name, and click Create
6. Copy the client ID and the client secret Google shows you
7. Under Google Auth platform › Audience, click Publish app and confirm, so that the publishing status reads In production. For a project that only you sign in to, this needs no review from Google. Left in Testing, Google ends every sign-in after seven days. If you leave it in Testing, add your own account under Audience › Test users: otherwise Google refuses the sign-in, and MediaFlow says it was declined
8. In MediaFlow, open Settings › Analysis. Under YouTube, paste the client ID, paste the secret and click Save

The client ID is kept in MediaFlow’s settings. The secret is kept in the Keychain, never in a file, the saved setup or a log.

### What to Expect at Sign-In

- Google shows a warning that the app is not verified, because the project is yours and has not been through Google’s review. Click Advanced, then continue
- If the publishing status is still Testing, Google ends the sign-in after seven days. MediaFlow then says your YouTube sign-in has expired, and Sign In Again… takes you straight to Google. The video’s details, and any upload already under way, are kept: after signing in, click Upload or Continue the Upload again. Publishing the app (step 7) stops this. The same happens if you remove MediaFlow’s permission at Google
- Until the project passes Google’s audit, YouTube keeps every upload through it Private, whatever visibility or publish time is chosen, and YouTube Studio cannot change that. See Uploading to YouTube

> **Warning:** The type must be Desktop app. A Web application client is refused at sign-in, because it does not allow the answer to come back to this Mac.

See also: [Uploading to YouTube](#uploading-to-youtube), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

## How Your Videos Are Doing

*The Results tab lists what you have published and, if you allow it, reads each video’s views, watch time and more from YouTube and keeps them over time.*

The Results tab of Prepare for YouTube shows the videos published with MediaFlow, uploaded from it or uploaded in YouTube Studio and given their details by Apply, from this project or from all of them: when each went up, its size and length, the visibility you asked for (for an applied video, the visibility it had when you applied) and when it was to go live, as arranged. This comes from your shared database and needs nothing from YouTube, so it says live only once YouTube has confirmed it; until then it reads to go live, or was to go live, and from a Google Cloud project that has not passed its audit that time never comes. Without a database connected, the tab says so.

### Reading Statistics from YouTube

This is off until you turn it on, and it needs read-only permission to see your YouTube Analytics reports. With Sending to YouTube off, it also needs read-only permission to see your YouTube account.

1. Turn on Reading your videos’ statistics from YouTube in Settings › Privacy
2. In your Google Cloud project, under APIs & Services › Library, enable YouTube Analytics API as well as YouTube Data API v3
3. On the Upload tab, click Sign In Again… if you are signed in, or Sign In to YouTube… if not. There is no need to sign out: unfinished uploads are kept, and Continue the Upload… carries on afterwards. With Sending to YouTube on, Google now asks for one more permission, read-only: View YouTube Analytics reports for your YouTube content. If you untick it at Google you can still upload, and the Results tab tells you statistics were not allowed, with Sign In Again… beside it. With Sending to YouTube off, Google asks for two read-only permissions instead, that one and View your YouTube account, because the permission to send, which already sees your channel, is not asked for. Ticking only one of those two is no use, so MediaFlow keeps nothing new and asks you to sign in again. A sign-in you already had is kept as it was; otherwise the new one is handed back, because Google cannot take back one permission alone
4. On the Results tab, click Read from YouTube Now

MediaFlow asks Google which channel you signed in to, then sends the YouTube IDs of the videos your database records as published with MediaFlow, and the span of dates from the first upload to today. Nothing else. These permissions would allow reading your whole channel; MediaFlow asks only about those videos. If your database is shared with someone who publishes to another channel, answers about their videos are set aside, not kept as yours. Reading statistics changes and deletes nothing.

You can turn on statistics without sending anything: with only that switch on, sign-in asks for the two read-only permissions alone (View your YouTube account, and View YouTube Analytics reports), and the Upload tab says the sign-in cannot upload. To apply details or upload later, turn on Sending to YouTube and click Sign In Again….

### What Is Read and Kept

- Views, likes and comments, as YouTube shows them now
- Hours watched, the average view as a time and as a share of the video, subscribers gained and shares, from YouTube Analytics. These run a day or two behind the counters, so a new video shows a dash at first
- The visibility the video really has, and when it really went public. If you asked for Public and YouTube has it Private, the tab says so: Google holds uploads Private from a Google Cloud project that has not passed its audit, and YouTube Studio cannot change that. The public video is uploaded in YouTube Studio; see Uploading to YouTube

Each reading is kept in the published_video_stats table of your database, about one a day for each video (never within 20 hours of the last), so you can see a video at a day, a week and a month. The tab shows the latest numbers and the views gained since the reading before. Reading again sooner updates nothing but the visibility. Statistics are read only when you click the button; nothing is read in the background.

> **Tip:** MediaFlow does not read impressions or click-through rate; look for them in YouTube Studio. The YouTube Studio link beside each video opens it there.

See also: [Uploading to YouTube](#uploading-to-youtube), [Setting Up Your Google Client](#setting-up-your-google-client), [Privacy: What Leaves This Mac](/manual/setup-network/#privacy-what-leaves-this-mac)

<div class="chapter-nav" role="navigation" aria-label="Chapters">
<a rel="prev" href="/manual/reports/">&larr; Reports</a>
<a href="/manual/">All chapters</a>
<a rel="next" href="/manual/project-management/">Project Management &rarr;</a>
</div>
