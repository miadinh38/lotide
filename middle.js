
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


//Implement middle function
const middle = function(array) {
  let result = [];
  let middleIndex = Math.floor(array.length / 2);
  if (array.length > 2) {
    if (array.length % 2 === 0) {
      return [array[middleIndex - 1], array[middleIndex]];
    }
    return [array[middleIndex]];
  }
  return result;
};


//Test code

const array1 = [1, 2, 3, 4, 5];
console.log(middle(array1));
assertArraysEqual(middle(array1), [3]);


const array2 = [1, 2, 3, 4, 5, 6];
console.log(middle(array2));
assertArraysEqual(middle(array2), [3, 4]);


const array3 = [1];
console.log(middle(array3));
assertArraysEqual(middle(array3), [1]);
