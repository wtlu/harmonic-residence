#!/bin/sh 
# 
# Author	: Wei-Ting Lu
# Purpose	: This script quickly gets the tar.gz files for the server
#				unloads it in /var/www/html

sudo su
cd /var/www/html/
rm -rf *
wget http://harmonic-residence.googlecode.com/hg/harmoniius-server/harmoniius-server.tar.gz
tar -zxvf harmoniius-server.tar.gz
