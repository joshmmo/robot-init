var mraa = require('mraa');
var InfiniteLoop = require('infinite-loop');

var il = new InfiniteLoop;

//simple ++ counter example
var counter = 0;
//task you want to run infinitely
function addOne() {
    counter++;
    console.log(counter);
}

//add it by calling .add
il.add(addOne, []);

il.run();

//var pin13 = new mraa.Gpio(13);
//pin13.dir(mraa.DIR_IN);
//var value = pin13.read();
//console.log(value);
