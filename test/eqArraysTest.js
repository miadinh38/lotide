const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays.js');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), true);
