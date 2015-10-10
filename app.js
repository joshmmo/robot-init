var mraa = require('mraa');
var InfiniteLoop = require('infinite-loop');

var il = new InfiniteLoop;
var enableWifi = true;
var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

function checkNetworkSwitch() {
    var value = pin13.read();
    if (value == 1) {
        console.log("Wifi Enabled");
    } else {
        console.log("Ad-Hoc Enabled");
    }
}

il.add(checkNetworkSwitch, []);

il.run();
