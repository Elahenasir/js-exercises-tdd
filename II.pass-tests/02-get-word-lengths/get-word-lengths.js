var getWordLengths = function (someWords) {
    for (var i = 0; i < someWords.length; i ++){
        someWords[i]=someWords[i].length
    }
return someWords
};
// var words = ['sun', 'potato', 'roundabout', 'pizza'];
// var a=getWordLengths(words)
// console.log(a);
module.exports = getWordLengths;