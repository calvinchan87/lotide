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

const letterPositions = function(sentence) {
  const results = {};
  // logic to update results here
  
  for (x = 0; x < sentence.length; x++) {
    results[sentence[x]] = [];
  } 

  for (x = 0; x < sentence.length; x++) {
    results[sentence[x]].push(x);
  } 

  return results;
};

const string = "hello";

const result = letterPositions(string, { a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true, i:true, j:true, k:true, l:true, m:true, n:true, o:true, p:true, q:true, r:true, s:true, t:true, u:true, v:true, w:true, x:true, y:true, z:true })

console.log(result);
assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);