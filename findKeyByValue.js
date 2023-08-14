const findKeyByValue = function(bestTVShowsByGenre, nameOfTVShow) {
  for (const key in bestTVShowsByGenre) {
    if (nameOfTVShow === bestTVShowsByGenre[key]) {
      return key;
    }
  }
};


module.exports = findKeyByValue;