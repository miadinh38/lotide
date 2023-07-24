const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
  }
};


const findKey = function(object, callback) {
  const keys = Object.keys(object); // return an array of keys in the object
  for (const key of keys) {  // using for...of to iterate over keys in array, not object
    if (callback(object[key])) {
    return key;
    }
  }
  return undefined; // return undefined if no matching element is found
};

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)

// Test Code

assertEqual(result, "Ora");
assertEqual(result, "noma");