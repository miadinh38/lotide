const assert = require('chai').assert;
const findKey = require('../findKey');


describe('findKey', function() {
  it('should return the key with a matching value', function() {
    const result = findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    }, x => x.stars === 2);

    assert.strictEqual(result, "noma");
  });

  it('should return undefined for no matching value', function() {
    const result = findKey({
      "item1": { value: "abc" },
      "item2": { value: "def" },
      "item3": { value: "ghi" }
    }, x => x.value === "xyz");

    assert.isUndefined(result);
  });
});