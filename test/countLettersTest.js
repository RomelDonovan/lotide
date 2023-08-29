const countLetters = require("../countLetters");
const assertEqual = require("../assertEqual");

// Test Case
const results = countLetters("lighthouse in the house");
assertEqual(results.l, 1);
assertEqual(results.i, 2);