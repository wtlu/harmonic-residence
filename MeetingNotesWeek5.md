


---


# Meeting 5 - 02/01/2012 - Software Architecture Set-up #

Time: 11:11 am - 12:24 pm

Location: Media:scape @ Research Commons

Participants: Shiho, Wei-Ting, Julius

## Agenda ##

  * Takeaways from our meeting with Carol
  * Software architecture

## Updates ##
> Takeaways from meeting with Carol:
  * Think of ways to encourage/motivate use of application (history and voting)
  * History is unique to other applications
  * Harmonic gamifaction (harmonious compatibility/badges)
    * Not make it too competitive
    * Might not want to work for rewarding the person who gets most votes
  * Anonymity of voting
    * If you know who is voting for what
    * If it is completely unseen until presented (and is seen in history)
    * If anonymous but can see vote count
  * Friends - is it necessary to view list
  * Description of session
  * Level of detail of song information for voting
  * Volume control - 1 computer
  * Export to playlist
    * Mark out individual songs

Can we get money for the server?

**Database**

User Controller
  * Create user
  * Delete user
  * Change name

Group controller
  * Create group
  * add user
  * delete user
  * name group
  * delete group
  * associate session

Session controller
  * Create session
  * Add user
  * Delete user
  * Change status - accepted, pending, rejected session invite
  * Name session
  * Associate host
  * Add description
  * Add song history
  * Export songs
  * Add start time
  * Add end time
  * Open session

Song history
  * Add song trio
  * Create history
  * Export song (toString();)

## Action Items ##
  * Julius/Alex - Finish paper prototype document - reflection of testing
  * Wei-Ting/Shiho - Confirm architecture is correct
  * Wei-Ting - Draw up architecture. Ask about funding. finish team status report.
  * Julius/Alex - Finalize UI mockups
  * Shiho - set up survey qualtrics

Everyone:
  * Two good names
  * Survey for features (brainstorm ideas for questions to ask potential users on what they want for features and how it should be implemented)
  * Finish zero-feature release