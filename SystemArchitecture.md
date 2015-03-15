**Table of Contents**


---


# System Architecture #

## High Level Block Diagram ##
![http://harmonic-residence.googlecode.com/hg/docs/architecture/HRHighLevelBlockDiagram.png](http://harmonic-residence.googlecode.com/hg/docs/architecture/HRHighLevelBlockDiagram.png)

_Figure 1: View Hierarchy_


---


## Diagrams ##

### UML Class Diagram ###

The Harmonic Residence Class Diagram can be seen below in Figure 2.

![http://harmonic-residence.googlecode.com/hg/docs/architecture/HRClassDiagram.png](http://harmonic-residence.googlecode.com/hg/docs/architecture/HRClassDiagram.png)
_Figure 2: Class Diagram_


The UML class diagram contains details about all of our major classes and their interactions within our system. As can be seen, we have modeled our class diagram to follow the Model View Controller architecture. Each Model object corresponds to a Controller object that contains functions for that Model. Each View object corresponds to a web page. Multiple View objects can make use of a Controller object.


### Database Model Diagram ###

<img src='http://harmonic-residence.googlecode.com/hg/docs/architecture/HRDatabaseModel.png' alt='DMD' width='900' height='550' />

The database model diagram shows the design of the MySQL database used by Harmonic Residence to keep track of users, the groups they belong to, the sessions they create and are in, and the music history.

This database schema will not change.

Highlights of the design:

  * Each user is represented by a tuple in the **User** relation, which includes a facebook id that is unique system wide and is used to track which users are involved in which music session.

  * **Group** contains a tuple for each user that belongs to a group. Each tuple contains a host\_id which indicates who the host of the group is.

  * **Session** keeps track of the session a group is or was in. Each tuple represent a unique session.


  * A tuple in the **History** relation is created every time a song is played, and each songs in that particular voting session is recorded. It's associated with a particular session and contains the votes and which song was played next.


## Design Patterns ##

### Model-View-Controller Architecture ###

The architecture of the entire application is based on the model-view-controller architecture. This design pattern allows application logic to be isolated from user input and content presentation, which allows better modularization of GUI / web-based applications. This design pattern was also chosen because the majority of web development frameworks are based it, and the use of a framework speeds up development and improves quality.

### Assumptions ###
  * Our class diagram is in the form of Model, View, Controller. Thus, we assume model will not have any functions, only atrributes. View will only have displaying a page. Controller will not have attributes and only have functions (since it only manipulates the data from the model).


---
