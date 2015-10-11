var mraa = require('mraa');
var sys = require('sys');
var exec = require('child_process').exec;

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    console.log("Ad-Hoc Enabled.");
    var ssid = "eRobot-" + randomInt(1, 10000000).toString(16);
    exec("sh wpacli_ibss_open.sh "+ssid, puts);
    var ip = "192.168.1.2";
    console.log("IP Address: " + ip);
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}