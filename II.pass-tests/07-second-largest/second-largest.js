function secondLargest(Array){
   let arraySort=Array.sort((a, b) => b -a);
   if (arraySort[1]==arraySort[0]){
       return arraySort[2];
   }else {
   return arraySort[1]
   }
}
module.exports=secondLargest;
// var numbers = [2, 0, 23, 0 ,57, 57, 1];
// var result=secondLargest(numbers)
// console.log(result)