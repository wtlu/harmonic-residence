# Harmonic Residence Documentation - For Developers #

**Table of Contents**


---


## How to Obtain Source Code ##

The repository and latest stable version we use for development can be obtained by running command below, assuming Mercurial is installed on the machine:

```
hg clone -u v0.0 https://harmonic-residence.googlecode.com/hg/ harmonicResidence
```

The source code is hosted on the project wiki http://code.google.com/p/harmonic-residence/.


---


## Directory Structure ##

In our root directory you will find various folders. The docs/ folder contains various images for our documentation located on our wiki

The tools/ folder contains various files such as testing scripts and setup scripts for developers

The HarmonicResidence/ folder is our application directory. Within the application directories are the css/ and script/ directories. The javascript files that runs the application are located in the script/ folder while the layout is contained in the css/ folder.

Documentation for developers can be obtained on the [project wiki](http://code.google.com/p/harmonic-residence/).


---


## How to Build ##

### Spotify Setup ###

NOTE: You must have a [Spotify Developer Account](http://developer.spotify.com/en/spotify-apps-api/developer-signup/) in order to run the program as a developer. You must also have a Facebook and Spotify account in order to test. You must also download the [Spotify Apps Preview Build](http://developer.spotify.com/en/spotify-apps-api/preview/) in order for the application to work.

In order to test the application on Spotify, one needs to first get the source from the repository (see above). Then copy the HarmomicResidence/ folder to the Spotify folder. For Windows it is located in My Documents folder (e.g. C:\Users\Tony\Documents\Spotify). On Mac OSX it is located in your home folder (e.g. ~/Spotify). If the folder does not exist, create one called Spotify in the said directory.

Then open the Developer's Build of Spotify and type "spotify:app:harmonicresidence" into the search bar. The application should start.

### Server Setup ###

These directions assume a clean CSE Linux VM.

  1. Get the scripts using the following commands
```
   wget http://harmonic-residence.googlecode.com/hg/tools/setup.tar.gz
   tar -zxvf setup.tar.gz
```
  1. Enter the following commands with administrator privileges
```
   sudo su
   sh ./INSTALL.sh
```
  1. Follow installation dialogue appropriately (NOTE: The following steps involve giving input to various parts of the setup process.)

  1. Ensure installation was successful by going to the following link on your web browser.
```
   http://localhost
```

### Facebook Setup ###

To set up the app on Facebook, follow these steps:

NOTE: If you're trying to continue developing Harmonic Residence, please contact Wei-Ting Lu at wtlu@uw.edu to get access to the application. If you want to set up a
completely new Facebook application, follow these steps.

  1. Make sure you have a Facebook account and are signed in
  1. Go to http://www.facebook.com/developers/apps.php
  1. Click on "Set up new app" at the top right corner of the page
  1. Provide an app name (e.g. Harmonic Residence), agree to the Facebook Terms, and click Create App
  1. Type in the words you see into the text field to security check
  1. In the next page, provide a description, icon, and add more users if needed



## Releasing a New Version ##

In order to update a particular version, you must obtain the source code (see above). Then do the following.

```
hg pull
hg update -r vX.X
```

Where X.X is the appropriate version number. For example, if one wanted to upgrade to v1.0, he would use the command:
```
hg update -r v1.0
```
There should not be conflicts during the update because no changes to the source should be made on the server.

Then copy the HarmonicResidence folder into your Spotify\ folder. For Windows it is located in My Documents folder. On Mac OSX it is located in your home folder.

In order to release a new version, developers will use the command hg tag --rev \**revisionNumber\** vX.X, where \**revisionNumber\** is the revision number you'd like to make a release on, and X.X is the newest version. For example, if you want to make a release version 0.7 on revision 06a3e9c7b927, you would use the command:
```
hg tag --rev 06a3e9c7b927 v0.7 
```
A table describing the versions can be found on our [Releases Table](Releases.md).

In order to release the application to the public. It must be approved by the Spotify Team. This is currently handled by Wei-Ting Lu. Please contact HarmonicResidence@uw.edu for more information on releasing with Spotify.

We will also update the latest build to the documentation.


---


## Bugs ##

The list of bugs can be accessed by clicking the "Issues" tab of the wiki. Instructions on how to resolve bugs can be found at http://code.google.com/p/support/wiki/IssueTracker under "Quick Start".