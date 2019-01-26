var LargestNumber=require('./largest-number.js');
test('find the largest number in array', function () {
var input= [3, 21, 88, 4, 36];
var expected= 88;
var result=LargestNumber(input);
expect(result).toEqual(expected);

})






// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed