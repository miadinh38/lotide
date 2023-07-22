const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};


const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (const key of Object.keys(object1)) {
    const value1 = object1[key];
    const value2 = object2[key];
    if (Array.isArray(value1) && Array.isArray(value2)) { //check if value is array and pass to eqArrays function
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else if (value1 !== value2) { //if they are primitives, compare 2 values
      return false;
    }
  }
  return true;
};


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

// TEST CODE
const test1 = { a: '1', b: 2 };
const test2 = { b: 2, a: '1' };
assertObjectsEqual(test1, test2);



