const assert = require('chai').assert;
const without = require('../without');

describe('without', function() {
  it('should remove items from the source array', function() {
    const words = ["hello", "world", "lighthouse"];
    const filteredWords = without(words, ["lighthouse"]);
    assert.deepEqual(filteredWords, ["hello", "world"]);
  });

  it('should not modify the original array', function() {
    const words = ["hello", "world", "lighthouse"];
    const filteredWords = without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });

});

