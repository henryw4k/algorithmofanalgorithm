/////////////////////////////////////////////////////////////
// Find Median of unsorted integer stream
/////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
//
// Given a stream of unordered integers, Find the median of the stream
// any time we want it. We will be asked to find the median multiple times.
//
// For instance:

//
/////////////////////////////////////////////////////////////

var MedianStream = function () {
	this.array = [];
};

MedianStream.prototype = {
  insert: function (num) {
  	this.array.push(num);
  },
  getMedian: function () {
  	var sortedArray = this.array.sort(function(a,b) {return a - b});
  	return sortedArray[Math.floor(sortedArray.length / 2)];
  },
  size: function () {
  	return this.length;
  }
};


/////////////////////////////////////////////////////////////
// TESTS
/////////////////////////////////////////////////////////////
var mStream = new MedianStream();
mStream.insert(1);
mStream.insert(3);
mStream.insert(2);
mStream.getMedian(); // => 2
mStream.insert(5);
mStream.insert(4);
console.log(mStream.getMedian()); // => 3



var mStream = new MedianStream();

[1,5,2,3,41,2,5,234,56,3,2,1,2,3].forEach(function (num) {
  mStream.insert(num);
});

console.log('Median === 3? ', mStream.getMedian() === 3);
