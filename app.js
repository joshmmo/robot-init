var mraa = require('mraa');

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    var ssid = "eRobot-" + randomInt(1, 10000000).toString(16);
    var ip = "192.168.1.2";

    console.log("Ad-Hoc Enabled.");

    //exec("sh wpacli_ibss_open.sh "+ssid + "&& ifconfig wlan0 " + ip, log);

    //exec("ifconfig wlan0 " + ip, log);

    var history = child_process.execSync('git log', { encoding: 'utf8' });
    process.stdout.write(history);

}

function randomInt(low, high) {
    return Math.floor(Math.random() * (high - low) + low);
}