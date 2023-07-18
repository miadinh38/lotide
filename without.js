
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
  
const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} === ${array2}`);
  }
};

const without = function(source, itemsToRemove) {
  let result = [];
  for (let a = 0; a < source.length; a++) {
    let isMatch = false;
    for (let b = 0; b < itemsToRemove.length; b++) {
      if (source[a] === itemsToRemove[b]) {
        isMatch = true;
        break;
      }
    }
    if (!isMatch) {
      result.push(source[a]);
    }
  }
  return result;
};


const words = ["hello", "world", "lighthouse"];
const filteredWords = without(words, ["lighthouse"]);
assertArraysEqual(filteredWords, ["hello", "world"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);