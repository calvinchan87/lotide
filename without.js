// FUNCTION IMPLEMENTATION
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(String.fromCodePoint(0x1F600) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F613) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) == JSON.stringify(array2)) {
    return true;
   } else return false;
};

const without = function(source, itemsToRemove) {
  let newArray = source;
  for (x = 0; x < source.length; x++) {
    newArray = newArray.filter(function(item) {
      return item !== itemsToRemove[x];
    })
  } return newArray;
};

// TEST CODE
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]) // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]) // => ["1", "2"]