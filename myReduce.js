// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, accumulator) {
//  CODE INSIDE HERE   //

		for (var i = 0; i < arr.length; i++) {
      if (accumulator === undefined && i === 0){
          accumulator = arr[i];
      } else { 
      	accumulator = callback(accumulator, arr[i], i, arr);
      }    
		}
		return accumulator;

  

	// var i = 0; //Initialize i for the for-loop

	// if (!initialValue) { //If no initialValue specified,
	// 	i = 0;	//Start iterating at the beginning of the array
	// 	console.log("i set to " + i);
	// } else {
	// 	i = initialValue; //Otherwise, start iterating at that particular element in the array
	// 	console.log("Initial value set to " + i);
	// }

	// var arrayType = typeof(arr[0]); //Check the type of the incoming array
	// var accumulator;

	// if (arrayType === "undefined") { 		//Set initial values for accumulator: here's where I'm having trouble...
	// 	accumulator = '';									//This seems fishy...
	// } else if (arrayType === 'null') {
	// 	accumulator = '';									//This seems fishy...				
	// } else if (arrayType === "string") {
	// 	accumulator = '';									//This seems perfectly logical! 
	// } else if (arrayType === "number") {	
	// 	accumulator = 0;									//This seems perfectly logical!
	// } else if (arrayType === "boolean") {	
	// 	accumulator = '';									//This one seems fishy...
	// }
	// console.log("i = " + i);
	
	// for(i; i < arr.length; i++) {				//Iterate over the array, the value of i changes based on whether initialValue was given
	// 	accumulator = callback(accumulator, arr[i], i, arr); 	//Run the callback each time the loop runs
	// 	console.log("i in the loop: " + i + "; Value of accumulator after each iteration: " + accumulator);
	// }
	// console.log("Accumulator after loop is finished: " + accumulator);
	// if ((typeof(accumulator) === 'undefined')) {	//Return 0 if accumulator is undefined. This helped me pass one of the mocha tests.
	// 	return 0;
	// } 
	// return accumulator;	//For all other accumulator values, return the accumulator
}


/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/


// export this function (you can ignore this for now)
module.exports = myReduce;
