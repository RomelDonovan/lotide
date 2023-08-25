const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅  Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑  Assertion failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const removeSpace = str.split(" ").join("");
  const strLowercase = removeSpace.toLowerCase();
  const letterCounter = {};
  for (let letter of strLowercase) {
    if (!letterCounter[letter]) {
      letterCounter[letter] = 0;
    }
    letterCounter[letter]++;
  }
  return letterCounter;
};
// Test Case
const results = countLetters("lighthouse in the house");
assertEqual(results.l, 1);
assertEqual(results.i, 2);