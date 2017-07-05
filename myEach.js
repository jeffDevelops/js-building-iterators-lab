// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ForEach



function myEach(array, callback) {
  
  //  CODE INSIDE HERE   //
  for (var i = 0; i < array.length; i++) {
  	callback(array[i], i, array);
  }
}

// animals.myEach(howManyLegs);




/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myEach;
