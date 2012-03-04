#!/bin/sh 
# 
# Author	: Wei-Ting Lu
# Purpose	: This script sets up the CSE VM to serve Harmonic Residence's
#                 harmonii.us application

# check to see if helper scripts are there
if [ ! -e "httpd_patch.pl" ]; then
    echo "Couldn't find httpd_patch.pl"
    exit
fi

if [ ! -e "user_setup.sql" ]; then
    echo "Couldn't find user_setup.sql"
    exit
fi

if [ ! -e "media_db_setup.sql" ]; then
    echo "Couldn't find media_db_setup.sql"
    exit
fi

# install apache, etc...
/sbin/chkconfig httpd on
/sbin/service httpd start
system-config-firewall-tui
yum -y install mysql mysql-server
/sbin/chkconfig  mysqld on
/sbin/service mysqld start
yum -y install php php-mysql
/sbin/service httpd restart

# set up database using scripts

#echo "Enter mysql root user: "
#read mysql_root_user
#echo "$mysql_root_user password is root"
echo "Setting up db user..."
mysql -u root < ./user_setup.sql
echo "Setting up db tables..."
mysql -u root < ./media_db_setup.sql
mysqladmin password "root"

# clone the repository to /var/www/html
yum -y install mercurial
cd /var/www/html
hg clone https://harmonic-residence.googlecode.com/hg/ harmonic-residence

# restart apache
/etc/init.d/httpd restart
