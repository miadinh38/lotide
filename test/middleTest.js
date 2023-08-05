const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');

// test code

const array1 = [1, 2, 3, 4, 5];
console.log(middle(array1));
assertArraysEqual(middle(array1), [3]);


const array2 = [1, 2, 3, 4, 5, 6];
console.log(middle(array2));
assertArraysEqual(middle(array2), [3, 4]);


const array3 = [1];
console.log(middle(array3));
assertArraysEqual(middle(array3), [1]);
