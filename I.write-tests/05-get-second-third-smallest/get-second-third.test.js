
var getSecondThird=require('./get-second-third.js');
test('find second and third numbers in array',function (){
var input=[90, 5, 11, 8, 6];
var expectedResult=[6, 8];
var result=getSecondThird(input);
expect(result).toEqual(expectedResult);
})




// example
// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed