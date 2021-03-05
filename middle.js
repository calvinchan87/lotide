// FUNCTION IMPLEMENTATION
const middle = function(anyArray) {
  let newArray = [];
  if (anyArray.length <= 2) {

  } else if (anyArray.length % 2 === 1) {
    newArray.push(anyArray[(anyArray.length - 1) / 2]);
  } else {
    newArray.push(anyArray[anyArray.length / 2 - 1]);
    newArray.push(anyArray[anyArray.length / 2]);
  } return newArray;
}

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

// TEST CODE
assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []
assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]