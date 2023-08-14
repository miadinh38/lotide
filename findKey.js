const findKey = function(object, callback) {
  const keys = Object.keys(object); // return an array of keys in the object
  for (const key of keys) {  // using for...of to iterate over keys in array, not object
    if (callback(object[key])) {
    return key;
    }
  }
  return undefined; // return undefined if no matching element is found
};

module.exports = findKey;

