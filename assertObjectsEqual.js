// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(String.fromCodePoint(0x1F600) + ` Actual: ${inspect(actual)} === Expected: ${inspect(expected)}`);
  } else {
    console.log(String.fromCodePoint(0x1F613) + ` Actual: ${inspect(actual)} !== Expected: ${inspect(expected)}`);
  }
};

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(objectA, objectB) {
  let arrayA = Object.keys(objectA);
  let arrayB = Object.keys(objectB);

  if (arrayA.length !== arrayB.length) {
    return false;
  }

  for (const item of arrayA) {
    if (Array.isArray(objectA[item]) && Array.isArray(objectB[item])) {
      let returnvalue = eqArrays(objectA[item], objectB[item]);
      if (returnvalue === false) {
        return false;
      }
    } else if (objectA[item] !== objectB[item]) {
      return false;
    }
  }

  return true;
};

const eqArrays = function(array1, array2) {
  if (JSON.stringify(array1) == JSON.stringify(array2)) {
    return true;
   } else return false;
}

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(ab, abc); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false