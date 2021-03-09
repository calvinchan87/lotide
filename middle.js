const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;