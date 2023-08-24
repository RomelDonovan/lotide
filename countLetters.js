const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(str) {
  let removeSpace = str.split(" ").join("");
  const strLowercase = removeSpace.toLowerCase();
  let letterCounter = {};
  for (let letter of strLowercase) {
    if (!letterCounter[letter]) {
      letterCounter[letter] = 1;
    } else {
      letterCounter[letter]++;
    }
  }
  return letterCounter;
};
// Test Case
const results = countLetters("lighthouse in the house");
assertEqual(results.l, 1);
assertEqual(results.i, 2);