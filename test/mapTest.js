const assert = require('chai').assert;
const map = require('../map');
const eqArrays = require('../eqArrays');

describe('eqArrays', function() {
  it('should return true for equal arrays', function() {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it('should return false for unequal arrays', function() {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, 4]));
  });
});

describe('map', function() {
  it('should correctly apply callback to each item', function() {
    const words = ["ground", "control", "to", "major", "tom"];
    const result = map(words, word => word.toUpperCase());
    assert.deepEqual(result, ["GROUND", "CONTROL", "TO", "MAJOR", "TOM"]);
  });
});