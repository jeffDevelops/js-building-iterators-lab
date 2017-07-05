var myEach = require('./myEach');
var myMap = require('./myMap');
var myReduce = require('./myReduce');
/* *********************************************************************
  You can edit this file
  It will make use of your code in myEach.js, myMap.js and myReduce.js
  To run it on the console do: `node index.js`
***********************************************************************/

/* myEach */

//
/*myEach(numArray, function print(element, index, arr) {
   console.log('inside myEach', element, index, arr);
 });*/

var numberArray = [1,2,3];
var stringArray = ["hi", "bye", "hello", "hey", "hola"];
var nothingInArray = [];
var undefinedArray = [undefined, undefined, undefined, undefined];
var booleanArray = [false, true, false];
function sum(current, previous) {
	return current + previous;
}
function concat(current, previous) {
	return current + " " + previous;
}
function opposite(boolean) {
	return !boolean;
}
myReduce(numberArray, sum, 0);
myReduce(stringArray, concat, 2);
myReduce(booleanArray, opposite);
myReduce(booleanArray, concat, 1);
myReduce(nothingInArray, sum, 1);
myReduce(undefinedArray, concat);



/* myMap */

/*var input = ["a","b","c"];
var output = myMap(input, function capitalize(v){
    return v.toUpperCase();
});
console.log('Testing myMap');
console.log(output);
console.log(output[0] === "A" && output[1] === "B" && output[2] === "C"); // assertion

console.log("the end");*/
