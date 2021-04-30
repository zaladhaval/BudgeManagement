#!/bin/sh
sh /opt/apache-tomcat/bin/shutdown.sh
cd /opt/superpunch-manager
git pull
rm -rf target
mvn clean compile install
rm -rf /opt/apache-tomcat/webapps/ROOT*
cp /opt/superpunch-manager/target/superpunch-inventory.war /opt/apache-tomcat/webapps/ROOT.war
sh  /opt/apache-tomcat/bin/startup.sh