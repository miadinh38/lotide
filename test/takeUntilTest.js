const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

describe('takeUntil', function() {
  it('should return a new array until the callback condition is met', function() {
    const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
    const result1 = takeUntil(data1, x => x < 0);
    assert.deepEqual(result1, [1, 2, 5, 7, 2]);
  });

  it('should return a new array until the callback condition is met for strings', function() {
    const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
    const result2 = takeUntil(data2, x => x === ',');
    assert.deepEqual(result2, ["I've", "been", "to", "Hollywood"]);
  });

  it('should handle an empty input array', function() {
    const result = takeUntil([], x => x === ',');
    assert.deepEqual(result, []);
  });

});
