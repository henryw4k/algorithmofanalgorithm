/////////////////////////////////////////////////////////////
// LARGEST CONTIGUOUS SUM
// -----------------------------------------
// What is the largest contiguous (row of numbers) sum of an array of digits?
//
// EX:
// [1, 2, 3] => 6
// [1, 2,-2, 3] => 4
// [1, 2,-4, 1, 2, 3] => 6
//
/////////////////////////////////////////////////////////////



var largestContiguousSum = function (array) {
  // TODO: Implement
  var biggest = [];//total value before negative. Will return largest. 
  var currentIncrement = null;

  array.forEach(function(value, index){
  	if(value < 0 && currentIncrement) {
  		biggest.push(currentIncrement);
  	} 
	
	if(!currentIncrement){ 
		currentIncrement = value; 
	} else {
		currentIncrement += value;
	}
  
  });
  
	function getMaxOfArray(numArray) {
	  return Math.max.apply(null, numArray);
	}


  return getMaxOfArray(biggest);
};


var array = [10,22,3,4,-5,23,-100,5];
console.log('Pass? ', largestContiguousSum(array) === 57);
