var mraa = require('mraa');
var sys = require('sys');
var exec = require('child_process').exec;

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

function puts(error, stdout, stderr) {
    sys.puts(stdout);
    sys.puts(error);
    sys.puts(stderr);
}


var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    var ssid = "eRobot-" + randomInt(1, 10000000).toString(16);
    var ip = "192.168.1.2";
    exec("sh wpacli_ibss_open.sh "+ssid + "&& ifconfig wlan0 " + ip, puts);
    console.log("Ad-Hoc Enabled.");
    exec("ifconfig wlan0 " + ip, puts);
    console.log("IP: " + ip);
}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}