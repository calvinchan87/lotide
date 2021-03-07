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
console.log(results1);
console.log(words);
assertArraysEqual(eqArrays(results1, words), true); // => should FAIL

const testarray = ['g', 'c', 't', 'm', 't']
console.log(results1);
console.log(testarray);
assertArraysEqual(eqArrays(results1, testarray), true); // => should PASS

const testarray2 = ['g', 'c', 't', 'm', 't', 'd', 'b']
console.log(results1);
console.log(testarray2);
assertArraysEqual(eqArrays(results1, testarray2), true); // => should FAIL

const testarray3 = ['g', 'c', 't', 'm']
console.log(results1);
console.log(testarray3);
assertArraysEqual(eqArrays(results1, testarray3), true); // => should FAIL