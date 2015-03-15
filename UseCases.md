# Adding / Creating group session for listening #

Being able to add and create groups is an essential part of the Harmonic Residence application as it serves as the main component for users to be able to listen to music together.  Therefore, the mechanism by which users add and create groups must be robust and well defined.

| Goal | User Creates a group listening session |
|:-----|:---------------------------------------|
| Primary Actor | User |
| Scope | Entire system |
| Level | User |
| Precondition | User logged onto the Spotify with his/her account |
| Success end condition | User creates a group and successfully adds other users |
| Failure end condition | User does not create a group session |
| Trigger | User uses the "Create Session" feature on the front-end |

Main Success Scenario
  1. User logs into Spotify with his account
  1. Go to Harmonic Residence web application
  1. Visit the "Music" section
  1. Click "Create Session"
  1. User names the session
  1. User invites Friends
  1. Session is opened
  1. Friends accepts invites
  1. User and friends are now successfully in a group session

Extensions
  1. User attempts to create a session without being logged into Spotify
    1. System warns user and and prompts him/her to log onto a Spotify account

Variations
  * None

# Voting for Next Song #

Allowing users to vote for a song is one of the main features of the Harmonic Residence application since it allows users to collaboratively choose a song.  Therefore, the mechanism by which users add and create groups must be robust and well defined.

| Goal | User votes for the next song to be played |
|:-----|:------------------------------------------|
| Primary Actor | User |
| Scope | Entire system |
| Level | User |
| Precondition | Users are all a part of a currently active music session |
| Success end condition | User apply a single vote for the next song to be played, and a checkbox is shown on the song the user voted |
| Failure end condition | No failure (voting is not required) |
| Trigger | Selection of songs to be voted on are displayed |

Main Success Scenario
  1. Users who are all a part of a sessions are displayed three songs to choose from
  1. User votes for a preferred song by clicking on the song
  1. System shows the song gaining an additional vote

Extensions
  1. User attempts to vote for the same song more than once
    1. System warns user that the same song cannot be voted for more than once by a single user
  1. User attempts to vote for another song
    1. System will decrement the vote from the song user previously voted for and increment vote on the song user recently selected
Variations
  * None

# Review Song History During a Listening Session #

To be aware of what songs have previously played, the Harmonic Residence application will allow users to view song histories for individual sessions.  Therefore, the mechanism by which users add and create groups must be robust and well defined.

| Goal | View song history of previously played music within a session |
|:-----|:--------------------------------------------------------------|
| Primary Actor | User |
| Scope | Entire system |
| Level | User |
| Precondition | Users are all a part of a currently active music session, at least one song must have been completed |
| Success end condition | User are able to view what songs have already been played |
| Failure end condition | No song history is displayed (no songs have completed) |
| Trigger | First song of a session is completed; User hovers over the listening tree |

Main Success Scenario
  1. User listens to first song of the session
  1. First song completes
  1. System updates music history for current session
  1. User hover over the listening tree link
  1. System shows the song history

Extensions
  1. User attempts to view history without paying music first
    1. System notifies the user that a song must first be completed to show up in the history

Variations
  * None