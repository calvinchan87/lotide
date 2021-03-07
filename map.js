const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, word => word[0]);

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

// TEST CODE
// assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
// assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), true); // => should FAIL
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => should PASS
// assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true); // => should FAIL

console.log(results1);
console.log(words);
assertArraysEqual(eqArrays((results1, words)), false); // => should PASS

const testarray = ['g', 'c', 't', 'm', 't']
console.log(results1);
console.log(testarray);
assertArraysEqual(eqArrays((results1, testarray)), true); // => should PASS