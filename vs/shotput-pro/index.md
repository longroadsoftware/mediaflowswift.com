---
layout: guide
title: "MediaFlowSwift vs ShotPut Pro: Which One Fits Your Workflow?"
description: "ShotPut Pro and MediaFlowSwift both prove a card copy with checksums. See what each does better, what each costs in US dollars, and which fits how you work."
published: "2026-11-05"
permalink: /vs/shotput-pro/
---
# MediaFlowSwift vs ShotPut Pro: Which One Fits Your Workflow?

<p class="vs-answer">Both prove a copy is good with a checksum before you trust it. ShotPut Pro, from Imagine Products, is an offload tool: it copies cards, checks the copies and writes a PDF report, on Mac or Windows. MediaFlowSwift copies and checks too, then keeps going: it sorts, reviews, archives and helps publish the footage.</p>

## What does each app actually verify?

MediaFlowSwift computes a SHA-256 checksum of every file it imports from a card, drive or folder. It then reads the whole copy back from the drive and compares the two. SHA-256 is the hash function set out in the US government's [Secure Hash Standard](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf). Right before Clear Card deletes anything from the card, it checks again from scratch.

ShotPut Pro describes itself as making "[lightning fast verified offloads and media focused PDF reports](https://imagineproducts.com/product/shotput-pro)". Its release notes list several checksum choices, including xxHash64 as the default, and support for ASC MHL, the hash list format kept by the American Society of Cinematographers' [ASC Media Hash List](https://theasc.com/mitc/asc-media-hash-list/) project.

## What does ShotPut Pro do better?

ShotPut Pro is built for the person on set whose job is the offload. It writes PDF offload reports with thumbnails, writes ASC MHL files, lets you pick the checksum, and saves destinations as presets. It runs on Windows as well as on Mac, and on Intel Macs as well as Apple silicon. Imagine Products has sold it for years, and many DITs and assistant editors already know it.

## What does MediaFlowSwift do better?

ShotPut Pro's own page centres on offloading, checking and reporting. It does not describe reviewing or sorting clips. MediaFlowSwift covers the work after the copy:

- **Categorize and review.** It gives each clip a category, files it into Category and Camera folders, and offers frame-accurate review with star ratings, tags and selects. See [how to review and pick selects on a Mac](/guides/review-and-pick-selects-on-a-mac/).
- **Free up space only after a proved copy.** Clear Card and Free Up Space delete nothing until every clip is proved copied. See [how to check footage copied before erasing a card](/guides/verify-footage-copied-before-erasing-card/).
- **Search by what was said.** It transcribes speech on your Mac, so you can find a clip by a word someone said in it. See [how to find a clip by what was said](/guides/search-video-by-what-was-said/).
- **Archive to numbered drives.** It records which clip went to which numbered drive. See [how to label and catalog archive drives](/guides/label-and-catalog-archive-drives-for-video/).
- **YouTube drafting.** Studio Pro drafts the title, description, chapters and tags from the finished video. See [how to write a YouTube title, description, chapters and tags](/guides/write-youtube-title-description-chapters-tags/).

## What are the limits on each side?

- MediaFlowSwift writes no MHL file and no DIT-style transfer report. If a client or studio asks for ASC MHL, ShotPut Pro covers it.
- MediaFlowSwift needs an Apple silicon Mac running macOS 13 or later. Versions for Intel Macs and for Windows are not out yet. ShotPut Pro runs on Intel and Apple silicon Macs and on Windows.
- MediaFlowSwift copies each import to one destination. Its second copy comes later, when you archive the project to another drive. See [how to keep two checked copies of a card](/guides/two-checked-copies-of-a-card-on-a-mac/).
- ShotPut Pro's own page lists no clip review, star ratings, speech search or YouTube publishing.

## How is each one priced?

<div class="tablewrap">
<table class="compare">
  <tr><th>What you can do</th><th>MediaFlowSwift</th><th>ShotPut Pro</th></tr>
  <tr><td colspan="3" class="group">Proving the copy</td></tr>
  <tr><td>Checksum verification on every card copy</td><td>&#10003;</td><td>&#10003;</td></tr>
  <tr><td>ASC MHL file and PDF offload report</td><td>&mdash;</td><td>&#10003;</td></tr>
  <tr><td colspan="3" class="group">Where it runs</td></tr>
  <tr><td>Intel Macs and Windows</td><td>&mdash;</td><td>&#10003;</td></tr>
  <tr><td colspan="3" class="group">After the copy</td></tr>
  <tr><td>Categorize, then file into Category and Camera folders</td><td>&#10003;</td><td>&mdash;</td></tr>
  <tr><td>Frame-accurate review, star ratings, tags</td><td>&#10003;</td><td>&mdash;</td></tr>
  <tr><td>Search clips by what was said</td><td>&#10003;</td><td>&mdash;</td></tr>
  <tr><td>Archive to numbered drives with a record of what went where</td><td>&#10003;</td><td>&mdash;</td></tr>
  <tr><td>Drafts YouTube titles, descriptions, chapters and tags (Studio Pro)</td><td>&#10003;</td><td>&mdash;</td></tr>
</table>
</div>

A dash means the feature is not offered, or is not listed on that app's own pages.

MediaFlowSwift's Studio plan is $49.99 a year, and Studio Pro is $99.99 a year. Both are also sold monthly, at $4.99 and $9.99. The full app runs free for 14 days, with no card needed. One key covers up to three Macs.

In US dollars, as listed on [ShotPut Pro's Mac page](https://imagineproducts.com/product/shotput-pro/mac) on 5 November 2026: a perpetual licence is $169. Extended update coverage is $59 a year per licence, or $70 a year paid as you go. A 30-day rental is $60. There is no free tier. The demo allows 10 offloads within 30 days. The licence is for one computer at a time.

## Which one should you pick?

Pick ShotPut Pro if your job ends at the offload and you need ASC MHL, PDF transfer reports, Windows or an Intel Mac. Pick MediaFlowSwift if you shoot and edit your own footage on an Apple silicon Mac and want one card to become one sorted, reviewed and archived project. [Try MediaFlowSwift free for 14 days](/download.html), with no card, and see which one fits how you work.

## Sources

<ul class="vs-sources">
  <li><a href="https://imagineproducts.com/product/shotput-pro">ShotPut Pro product page, Imagine Products</a></li>
  <li><a href="https://imagineproducts.com/product/shotput-pro/mac">ShotPut Pro for Mac, prices, demo limits and release notes</a> (prices checked 5 November 2026)</li>
  <li><a href="https://theasc.com/mitc/asc-media-hash-list/">ASC Media Hash List, American Society of Cinematographers</a></li>
  <li><a href="https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.180-4.pdf">Secure Hash Standard (FIPS 180-4), NIST</a></li>
  <li><a href="/manual/organizing-media/#how-mediaflow-verifies-copies">How MediaFlow verifies copies, MediaFlowSwift manual</a></li>
</ul>

[All guides](/guides/) &middot; [Hedge and OffShoot alternatives for Mac](/alternatives/hedge-offshoot/) &middot; [MediaFlowSwift vs OffShoot](/vs/offshoot/) &middot; [MediaFlowSwift vs Silverstack](/vs/silverstack/) &middot; [MediaFlowSwift vs Kyno](/vs/kyno/)
