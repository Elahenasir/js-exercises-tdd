var getEven=require('./get-even-numbers.js');
test('find the even number in the array', function () {
var input= [22, 13, 73, 82, 4];
var expected= [22, 82, 4];
var result=getEven(input);
expect(result).toEqual(expected);

})
// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];