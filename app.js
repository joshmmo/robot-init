var mraa = require('mraa');

var pin13 = new mraa.Gpio(13);
pin13.dir(mraa.DIR_IN);
var value = pin13.read();
console.log(value);