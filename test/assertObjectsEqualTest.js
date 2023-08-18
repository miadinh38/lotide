const assertObjectsEqual = require('../assertObjectsEqual');

describe('assertObjectsEqual', function() {
  it('should pass for equal objects', function() {
    const test1 = { a: '1', b: 2 };
    const test2 = { b: 2, a: '1' };
    assertObjectsEqual(test1, test2);
  });

  it('should fail for non-equal objects', function() {
    const test1 = { a: '1', b: 2 };
    const test2 = { a: '1', b: 3 };
    assertObjectsEqual(test1, test2);
  });
});

