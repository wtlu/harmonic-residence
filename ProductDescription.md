![http://harmonic-residence.googlecode.com/hg/docs/logo/HRlogo.png](http://harmonic-residence.googlecode.com/hg/docs/logo/HRlogo.png)

---


## Introduction ##


Harmonic Residence is a music web application that enhances the group music listening experience. Listening to music as a group can be a hassle when members have different tastes in music. The host may be unsure of what kind of music his or her guests like, and even if the host does know their preferences, it may be difficult to find music that everyone will enjoy. Harmonic Residence will solve this problem by allowing all participants to join in a session to stream music that will enjoy.


## Target Audience ##

We are targeting a group of people in the same household that want to listen to music but have a difficult time reaching a consensus on what to listen to. These users will have Internet connection and a computer to access Harmonic Residence.

We are not targeting groups of people who are listening remotely from within their individual homes. While users may use this application to listen remotely, the main focus of this application is to help users in the same physical space enjoy music together.

## Major Features ##

  * Listen to music as a group by inviting friends into a session
  * Vote for next favorite song
  * Selects songs for you when votes tie or when there are no votes
  * View song history of a session
  * Save session history as a new playlist


## Visual Design Requirements ##

Harmonic Residence is about sharing the experience of listening to music together.  Doing this can bring about different feelings depending on the group of people and what music is being played.  We want to foster these experiences by presenting a visual design that is comfortable, engaging, and exclusive to our users.  To do this we will follow the guidelines outlined below:

  * Minimal text used on screen
  * Heavy use of Visuals
  * Dark Hues for premade color palette's (Purple, Gray, Black, White)
  * User customizable color palette's
  * Option to have color palette change with song
  * Moving between pages can be followed easily to lessen the cognitive load on users
  * Pages are clean and easy to read using white space effectively
  * Page fonts (colors dependent upon color palette):
    * Title: Helvetica Bold 32 pt
    * Heading 1: Helvetica Bold 24 pt
    * Heading 2: Helvetica Bold 24 pt Italic
    * Main Body: Helvetica Condensed 12 pt
    * Link: Helvetica Condensed 12 pt Underlined
  * Max 4 sections on page (i.e. main wrapper, navigation, etc)

By following these guidelines we want to accomplish the following goals:

  * Create a comfortable, exclusive, and engaging experience and design
  * Allow the user a customizable experience
  * Create easy and intuitive pathways for users to get the information they need

By following these guidelines and goals we believe we can accomplish our goals of giving our users an engaging experience that they would willingly share with their friends and family.


Harmonic Residence will use the Spotify API, and when we are designing the user interface, UI guidelines taken from the [Spotify UI Guidelines](http://developer.spotify.com/download/spotify-apps-api/guidelines/03_ui-guidelines.html) will be applied.


## Competition to Harmonic Residence ##

Some of the major competitors of Harmonic Residence are:

  1. **Auricle** - http://auricle.fm
![http://harmonic-residence.googlecode.com/hg/docs/product_description_images/Auricle.png](http://harmonic-residence.googlecode.com/hg/docs/product_description_images/Auricle.png)
    * Features:
      * Social music player powered by Rdio
      * Add people through Facebook
      * Chat with people in the same room
      * Links for lyrics, tabs, wiki
      * Requires tokens for queuing songs and creating rooms
      * Provides song recommendations on right sidebar
    * Pros:
      * Token system can make experience more engaging
      * Song recommendations for when users are stuck
      * Automatic song selection if there are no songs queued
      * (Supposed to) change song selection based on user preferences
    * Cons:
      * No basic controls other than volume
      * Visual design can be hard on the eyes based on album cover art
      * Not a lot of feedback after user queues song
      * Privacy issues - user automatically enters "lobby" room with strangers
      * Can't view song history
  1. **Facebook "Listen With"**
![http://harmonic-residence.googlecode.com/hg/docs/product_description_images/FacebookListenWith.png](http://harmonic-residence.googlecode.com/hg/docs/product_description_images/FacebookListenWith.png)
    * Features:
      * Use Facebook and partnered software to listen to what your friend is listening to in real time
      * Listen with up to 50 users at the same time
      * Chat with people in the same room
    * Pros:
      * Chat with your friends while listening to their favorite music
      * One DJ that changes the music the group listens to
      * Jump into what your friends are listenting to in real time
    * Cons:
      * Need to download specific application (the listen together feature is not built within Facebook)
      * Only 1 person can change songs, and it's only songs of that one user.
      * Can't view song history
  1. **Turntable.fm** - http://turntable.fm/
![http://harmonic-residence.googlecode.com/hg/docs/product_description_images/TurntableFM.png](http://harmonic-residence.googlecode.com/hg/docs/product_description_images/TurntableFM.png)
    * Features:
      * Create a room to begin listening session
      * Add songs through Turntable's library or upload it
      * Requires more than one user
      * Add people through Facebook/Twitter/link
      * Vote song as "Awesome" to reward DJ points
      * Vote song as "Lame" - the more "lame" votes, the more likelihood for skipping
      * Chat with people in same room
    * Pros:
      * Point system encourages engagment
      * Requires a certain number of "Lame" votes to skip song
      * Able to upload local song files to stream if not in Turntable's library
      * Can view song history
      * Can add/search for songs in turntable queue, spotify, amazon mp3, iTunes, Rdio
    * Cons:
      * Not every person gets to DJ (limited to 5 DJs per room?) so each person in room does not get to choose a song
  1. **Soundrop** - http://soundrop.com/
![http://harmonic-residence.googlecode.com/hg/docs/product_description_images/Soundrop.png](http://harmonic-residence.googlecode.com/hg/docs/product_description_images/Soundrop.png)
    * Features:
      * Spotify application
      * Allows users to drag and drop a playlist to start a "spot"
      * Can share "spot" with other by sharing link or sharing through Facebook
      * Each user gets to vote for as many songs as they want but each song is limited to one vote
      * Can chat with people in the "spot"
      * Can add individual tracks
    * Pros:
      * Play/pause capabilities
      * Can save queue as playlist
      * Can add tracks
    * Cons:
      * Cannot skip
      * Cannot view listening history

## Competitive Advantage ##

Although faced with stiff competitions, Harmonic Residence has a few key advantages that makes our application more appealing than the before mentioned competitors. The goal of Harmonic Residence is to foster relationships through the power of group listening. Our unique ability to vote for songs and view listening history make it compelling for users to have conversation and enjoy music at the same time.

## Non-Functional Requirements ##
  * Interface Requirements
    * Harmonic Residence will be using the existing Spotify APIs for its frontend interface for the user. It needs to stay consistent with Spotify API and UI Guidelines.
  * Performance Requirements
    * Security - Harmonic Residence will not disclose any personal information to either other users are the rest of the Spotify world. The users will be given an options to share how much information they want with potential book owners or friends.
    * Reliability - Harmonic Residence will maintain the integrity of the information provided by its users.


External Documentation for the users will be integrated in the UI (see UI diagrams) that contains, About , Help , and FAQ pages that will provide in-depth documentation for even first time users.