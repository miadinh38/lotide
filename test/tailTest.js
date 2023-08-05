const assertEqual = require('../assertEqual');
const tail = require('../tail');


// test code
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
const tailResult = tail(words);

assertEqual(words.length, 3);

assertEqual(tailResult.length ,2);
assertEqual(tailResult[0], "Lighthouse");