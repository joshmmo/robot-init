Navigate to your home directory by type
cd ~

Clone this repository with the following command:
git clone https://github.com/joshmmo/robot-init.git

cd robot-init

Copy erobot.sh to /home/root
Copy erobot.service to /lib/systemd/system/

Make the erobot.sh executable
chmod +x /home/root/erobot.sh

Install the following node modules globally using these commands:
npm install -g shelljs
npm install -g path

Run the following commands to add erobot.service as a startup process
cd /lib/systemd/system
systemctl daemon-reload
systemcrl start erobot.service

Notes:
It is important that the following path is true:
/home/root/robot-init/app.js

The startup scripts rely on this directory structure.

The erobot.sh script calls the node.js script twice because for some reason the IP is not set the first time around.
I expect this to be a timing issue.

It is also important to note that when pin 13 is set to 1 (wifi enabled) it doesn't actually do anything. It just lets the edison board
connect to the wifi settings it already has when the 'configure_edison --wifi' command was run.