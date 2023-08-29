const letterPositions = require("../letterPositions");
const assertArraysEqual = require("../assertArraysEqual");
const eqArrays = require("../eqArrays")

assertArraysEqual(eqArrays(letterPositions("hello").e, [1]), true);