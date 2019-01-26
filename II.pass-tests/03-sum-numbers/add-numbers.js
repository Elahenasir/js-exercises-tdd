function addNumbers(numbers) {
    var sum=0;
    for (i=0;i<numbers.length;i++){
      sum=numbers[i]+sum
    }
    return sum;
}
// var numbers = [9, 23, 10, 3, 8];
// var result=addNumbers(numbers);
// console.log(result)
module.exports = addNumbers;