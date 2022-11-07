#!/bin/bash
o='\033[0m'
r='\033[1;31m'
b='\033[1;36m'
bx='\033[2;7;36m'
w='\033[1;37m'
y='\033[1;33m'
g='\033[1;32m'

cd /home/container

# Make internal Docker IP address available to processes.
export INTERNAL_IP=`ip route get 1 | awk '{print $NF;exit}'`

# Print Node.js Version
rm -rf ./config
rm -rf ./npm
echo -e "${g}Node installed"

# Replace Startup Variables
MODIFIED_STARTUP=$(echo -e ${STARTUP} | sed -e 's/{{/${/g' -e 's/}}/}/g')
echo ":/home/container$ ${MODIFIED_STARTUP}"

# Run the Server
eval ${MODIFIED_STARTUP}
