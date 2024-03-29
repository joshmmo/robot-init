var mraa = require('/usr/lib/node_modules/mraa/mraa');
require('/usr/lib/node_modules/shelljs/global');
var path = require('path');
var appDir = path.dirname(require.main.filename);

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    console.log("Ad-Hoc Enabled.");
    var ssid = "eRobot-" + randomInt(1, 10000000).toString(16);
    exec("sh "+appDir+"/wpacli_ibss_open.sh "+ssid);
    var ip = "192.168.1.2";
    console.log("IP Address: " + ip);
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}