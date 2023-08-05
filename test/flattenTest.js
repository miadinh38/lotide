const flatten = require('../flatten');
const eqArrays = require('../eqArrays');

const assert = require('chai').assert;


describe('flatten', () => {
  it('should return a flattened array for a nested array with one level of nesting', () => {
    const input = [1, [2, 3], 4];
    const expectedOutput = [1, 2, 3, 4];
    assert.isTrue(eqArrays(flatten(input), expectedOutput));
  });

  it('should return a flattened array for a deeply nested array', () => {
    const input = [1, [2, [3, [4, 5], 6], 7]];
    const expectedOutput = [1, 2, 3, 4, 5, 6, 7];
    assert.isTrue(eqArrays(flatten(input), expectedOutput));
  });

  it('should return the same array for an already flat array', () => {
    const input = [1, 2, 3, 4];
    assert.isTrue(eqArrays(flatten(input), input));
  });
});