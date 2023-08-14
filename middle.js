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


module.exports = middle;