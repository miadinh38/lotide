const assert = require('chai').assert;
const countOnly = require('../countOnly'); 

describe('countOnly', () => {
  it('should correctly count specified properties in an array', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const itemsToCount = {
      "Jason": true,
      "Karima": true,
      "Fang": true,
      "Agouhanna": false
    };

    const result1 = countOnly(firstNames, itemsToCount);

    const expectedOutput = {
      "Jason": 1,
      "Karima": 0,
      "Fang": 2,
      "Agouhanna": 0
    };
    assert.deepEqual(result1, expectedOutput);
  });

});
