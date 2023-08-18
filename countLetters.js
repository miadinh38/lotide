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


