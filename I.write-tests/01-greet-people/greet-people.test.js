var greetPeople = require('./greet-People.js');
test('print list of names prefixed with Hello', function () {
    // Arrange
var mentors = ['Irina', 'Ashleigh', 'Etza',];
var execpetedResult = 'Hello IrinaAshleighEtza';

    // Act
var result = greetPeople(mentors);
    // Assert
    expect(result).toEqual(execpetedResult);
})

