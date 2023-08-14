// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} === ${expected}`);
//   }
// };

const countLetters = function(letters, lettersToCount) {
  const results = {};
  for (const letter of letters) {
    console.log(letter);
    if (lettersToCount[letter]) {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};

module.exports = countLetters;

// const result1 = countLetters("LHL", { "L": true, "H": true });

// assertEqual(result1["L"], 2);
// assertEqual(result1["H"], undefined);
// assertEqual(result1["H"], 1);
// assertEqual(result1["A"], undefined);


