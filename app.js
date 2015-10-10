var mraa = require('mraa');
var sys = require('sys');
var async = require('async');
var exec = require('child_process').exec;

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

function log(error, stdout, stderr) {
    console.log(stdout);
}


var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    var ssid = "eRobot-" + randomInt(1, 10000000).toString(16);
    var ip = "192.168.1.2";

    console.log("Ad-Hoc Enabled.");

    async.series([
        function(){
            exec("sh wpacli_ibss_open.sh "+ssid + "&& ifconfig wlan0 " + ip, log);
        },
        function(){
            exec("ifconfig wlan0 " + ip, log);
            console.log("IP: " + ip);
        }
    ]);


}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}