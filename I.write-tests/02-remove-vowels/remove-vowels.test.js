var removeVowels=require('./remove-vowels.js')
test('remove vowels from word', function () {

    // Arrange
var word='samuel';
var execpetedResult='_a_ue_'
    // Act
var result=removeVowels(word)
    // Assert
    expect(result).toEqual(execpetedResult);
})