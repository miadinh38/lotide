const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe('eqArrays', function() {
  it('should return true for equal arrays', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 3];
    const result = eqArrays(array1, array2);
    assert.isTrue(result);
  });

  it('should return false for non-equal arrays', function() {
    const array1 = [1, 2, 3];
    const array2 = [1, 2, 4];
    const result = eqArrays(array1, array2);
    assert.isFalse(result);
  });
});