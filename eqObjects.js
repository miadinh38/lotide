const eqArrays = require('./eqArrays');

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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

module.exports = eqObjects;
