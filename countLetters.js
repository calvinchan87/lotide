// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F600) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F613) + ` Assertion Failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countLetters = function(gothrough, array) {
  const newArray = {};

  for (const item of gothrough) {
    if (array[item]) {
      if (newArray[item]) {
        newArray[item] += 1;
      } else {
        newArray[item] = 1;
      }
    }
  }
  return newArray;
}

const strings = "lighthouse in the house".split("");

const result = countLetters(strings, { a:true, b:true, c:true, d:true, e:true, f:true, g:true, h:true, i:true, j:true, k:true, l:true, m:true, n:true, o:true, p:true, q:true, r:true, s:true, t:true, u:true, v:true, w:true, x:true, y:true, z:true })

console.log(result);
assertEqual(result["l"], 2)
assertEqual(result["h"], 1)