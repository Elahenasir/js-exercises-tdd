var words = ['mouse', 'giraffe', 'queen', 'window', 'bottle'];
function getMiddle(list) 
{
    if(list.length % 2 == 1){
        return list[(list.length-1)/2];
    }else{
       
        return  list.map((list=>[(list.length/2)]+list[(list.length/2 -1)])/2);
    }
}
module.exports = getMiddle;
let result=getMiddle(words);
  console.log(result);
