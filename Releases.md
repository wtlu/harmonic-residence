**Table of Contents**


---

# About Releasing/Updating to a New Version #

In order to update a particular version, all that must be done is executing the following commands in the application directory on the server (e.g. /var/www/html/harmonicresidence/):

```
hg pull
hg update -r vX.X
```

Where X.X is the appropriate version number. For example, if one wanted to upgrade to v1.0, he would use the command:
```
hg update -r v1.0
```
There should not be conflicts during the update because no changes to the source should be made on the server.

In order to release a new version, developers will use the command hg tag --rev \**revisionNumber\** vX.X, where \**revisionNumber\** is the revision number you'd like to make a release on, and X.X is the newest version. For example, if you want to make a release version 0.7 on revision 06a3e9c7b927, you would use the command:
```
hg tag --rev 06a3e9c7b927 v0.7 
```
A table describing the versions can be found below.

# Releases #

| Release Version | Notes |
|:----------------|:------|
| 0.0 | Zero Feature Release |

# Wiki Releases #

| Release Version | Notes |
|:----------------|:------|
| zfr| Zero Feature Release of Wiki |