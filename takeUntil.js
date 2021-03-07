const takeUntil = function(array, callback) {
  // ...
  let workingarray = [];
  for (i = 0; i < array.length; i++) {
    if (callback(array[i]) === false) {
      workingarray.push(array[i]);
    } else return workingarray;
  } return workingarray;
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

// TEST CODE
assertArraysEqual(eqArrays(results1, data1), true); // => should FAIL
assertArraysEqual(eqArrays(results1, [ 1, 2, 5, 7, 2 ]), true); // => should PASS
assertArraysEqual(eqArrays(results2, data2), true); // => should FAIL
assertArraysEqual(eqArrays(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]), true); // => should PASS