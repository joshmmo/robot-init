var mraa = require('mraa');
var sys = require('sys');
var exec = require('child_process').exec;

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);

var child;

function puts(error, stdout, stderr) {
    sys.puts(stdout)
}
exec("ls -la", puts);

var value = pin13.read();
if (value == 1) {
    console.log("Wifi Enabled");
} else {
    console.log("Ad-Hoc Enabled");
}
