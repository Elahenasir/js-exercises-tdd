var removeVowelsForWords=require('./remove-vowels-in-array.js')
test('remove vowels from all words in array', function () {
    // Arrange
   var input= ["Irina", "Etza", "Daniel"]
    var expectedResult=[ 'I_i_a', 'E__a', '_a_ie_' ]
    // Act
   var result= removeVowelsForWords(input)
    // Assert
    expect(result).toEqual(expectedResult);
})

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: [ 'I_i_a', 'E__a', '_a_ie_' ]