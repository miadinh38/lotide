const flatten = function(array) {
  let flatArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      flatArray = flatArray.concat(flatten(array[i]));
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};


module.exports = flatten;