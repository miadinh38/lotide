const assert = require('chai').assert;
const countLetters = require('../countLetters');

describe('countLetters', function() {
  it('should count the occurrences of letters as expected', function() {
    const result = countLetters("LHL", { "L": true, "H": true });

    assert.strictEqual(result["L"], 2);
    assert.isUndefined(result["A"]);
    assert.strictEqual(result["H"], 1);
    assert.isUndefined(result["B"]);
  });

});

