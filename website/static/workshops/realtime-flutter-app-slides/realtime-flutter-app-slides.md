👋😃, welcome to **building a realtime app whilst learning Flutter fundamentals**
- **2hr workshop:** including programming, questions, discussion and technical support
- **Slides:** [link.orth.uk/festival](https://link.orth.uk/festival) ([printable](https://orth.uk/workshops/realtime-flutter-app-slides/?print-pdf))
- by [Ben Butterworth](https://orth.uk)
<!--**Resources:** [link.orth.uk/festival](https://link.orth.uk/festival)-->
---
##### Step 1: Prepare dev environment
- Take a [keyboard shortcut](https://developer.android.com/studio/intro/keyboard-shortcuts) printout
- Install [Flutter](https://docs.flutter.dev/get-started/install) & [Android Studio](https://developer.android.com/studio/)
- **Optional (& macOS only):** Install [Xcode](https://developer.apple.com/xcode/)
- Confirm things are set up correctly: in terminal, run `flutter doctor`
--h
## Slides: [link.orth.uk/festival](https://link.orth.uk/festival)
<a href="https://link.orth.uk/festival"><img class="r-stretch" src="./qr-code.png"></a>

--h
<!-- .slide: data-background="#ded9fc" -->
#### Ben Butterworth - [https://orth.uk](https://orth.uk)
- Learns best by building things & helping others
- **Previous experience:** iOS, Android, RN and Flutter
    - Freelance Flutter development (apps and packages)
    - Flutter Developer job
    - small contributions to Flutter Engine and other Flutter packages
- **Job:** Software Engineer at [**Helsing**](https://helsing.ai/)
    - **Helsing:** AI to protect democracies
    - we are hiring: [jobs.lever.co/helsing](https://jobs.lever.co/Helsing)
    - Opinions are my own

--h
<!-- .slide: data-background="#0057B7" -->
# 🇺🇦

--h
<!-- .slide: data-background="#0057B7" -->
**Question:** Who has done mobile development before?
--v
<!-- .slide: data-background="#FFDD00" -->
**Question:** Who has installed Flutter before?
--v
<!-- .slide: data-background="#0057B7" -->
**Question:** Who has an up-to-date installation of Flutter
--v
<!-- .slide: data-background="#FFDD00" -->
**Question:** What are some nice mobile apps you have used?
--v
<!-- .slide: data-background="#0057B7" -->
**Question:** What properties do good apps have?

--h
# 🤓

## Building a realtime app whilst learning Flutter fundamentals
We will build a Q&A application for events like today.

--v
### Features 🙉 
Users can:
- **Ask** questions
- **Answer** questions
- Be **updated** when a question is asked or answered
- if we have time: **offline usage** <!-- .element: class="fragment" data-fragment-index="1" -->

--v
User can't (not today): 
- authentication (user accounts/login)
- rate limiting

--h
## Architecture 🏗

--h
## Picking technology 🤯
--v
**Question:** What packages have you enjoyed using?
--v
**Question:** What packages have you not enjoyed?

--h
## Process ♼

- Interactive workshop
- **15m:** Introduction
- **1hr30m:** threee **30 minute sprints**, each with:
  - 10 minute concepts and discussion
  - 10 minutes live coding
  - 10 minutes your coding & technical support
- **15m**: Summary, Q&A and technical support
- Ask for help and help each other

--h
## Sprint 1 🏃🏿‍♀️🏃‍♀️🏃🏃🏼‍♂️🏃🏼‍♂️🏃‍♀️🏃🏃🏼‍♂️🏃🏼‍♂️🏃‍♀️
--v
## Concept: Widgets ♟
--v
## Concept: Separation of concerns 🥅
--v
## Tasks ✅
  - Create flutter app
  - Architecture: Backend Service
  - UI: Create question
  - UI: Create question

--h
## Sprint 2 🏃🏿‍♀️🏃‍♀️🏃🏃🏼‍♂️🏃🏼‍♂️🏃‍♀️🏃🏃🏼‍♂️
--v
**Concept: Realtime behaviour**
## **Question:** What is realtime? ⏰
--v
## Different types ⏰⏱⌚️
- **Reliable vs unrealiable:** WebSockets, RTP, WebRTC, WebTransport
- **App state:** app is open vs closed
--v
## Tasks ✅opn
- Subscribe for updates to questions

--h
## Sprint 3 🏃🏿‍♀️🏃‍♀️🏃🏃🏼‍♂️🏃
--v
## Concept: Offline use ⚰️
--v
## Concept: Event sourcing 🎃
--v
## Tasks ✅
- Allow user to see questions whilst offline, even when app is restarted
- Allow users to ask question whilst offline

--h
## Summary 📖
--v
## We didn't cover: authn 🪪
Authentication
--v
## We didn't cover: rate limiting 🍼
Some users, applications or network conditions might overload your system. You might choose to reduce the load on your system, at the expense of their experience.
--v
## We didn't cover: GDPR 👮‍♀️
We need users consent, a privacy policy and probably some more things.
--v
## We didn't cover: offline usage 😩

--h
## Final Q&A 🙋🏽‍🙋🙋🏽‍♀️
- Fill out your feedback: [orth.uk/feedback](https://orth.uk/feedback)
- Technical support after this 😉

--h
## Technical support 🛠
