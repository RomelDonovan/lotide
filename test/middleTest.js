const middle = require("../middle");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays");

//test code
assertArraysEqual(eqArrays(middle([1]), [])); // => []
assertArraysEqual(eqArrays(middle([1, 2]), [])); // => []
assertArraysEqual(eqArrays(middle([1, 2, 3]), [2])); // => [2]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5]), [3])); // => [3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4]), [2, 3])); // => [2, 3]
assertArraysEqual(eqArrays(middle([1, 2, 3, 4, 5, 6]), [3, 4])); // => [3, 4]