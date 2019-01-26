function findNeedle(words) {
    const index = words.findIndex(word => word === "needle");   
     return index;
}

module.exports = findNeedle;
// var words = ['house', 'train', 'slide', 'needle', 'book'];
// var result=findNeedle(words);
// console.log(result)