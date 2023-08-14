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

module.exports = without;
