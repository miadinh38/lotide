const assertEqual = require('./assertEqual');

const tail = function(array) {
  return array.slice(1);
};

// test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const tailResult = tail(words);

assertEqual(words.length, 3);

assertEqual(tailResult.length ,2);
assertEqual(tailResult[0], "Lighthouse");