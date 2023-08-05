const assert = require('chai').assert;
const letterPositions = require('../letterPositions'); 

describe('letterPositions', () => {
  it('should correctly return letter positions in a string', () => {
    const input = 'hello';
    const expectedOutput = {
      'h': [0],
      'e': [1],
      'l': [2, 3],
      'o': [4]
    };

    assert.deepEqual(letterPositions(input), expectedOutput);
  });

  it('should return an empty object for an empty string', () => {
    const input = '';
    const expectedOutput = {};

    assert.deepEqual(letterPositions(input), expectedOutput);
  });

  it('should include all occurrences of a letter', () => {
    const input = 'mississippi';
    const expectedOutput = {
      'm': [0],
      'i': [1, 4, 7, 10],
      's': [2, 3, 5, 6],
      'p': [8, 9]
    };

    assert.deepEqual(letterPositions(input), expectedOutput);
  });
});
