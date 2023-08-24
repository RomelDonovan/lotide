const assertEqual = function(actual, expected) {
  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const countLetters = function(str) {
  // --- steps to take
  let removeSpace = str.split(" ").join("");
  const strLowercase = removeSpace.toLowerCase();
  // an object of letters
  let letterCounter = {};
  for (let letter of strLowercase) {
    // if wee see a letter, and its not in our object, create it with a value of 1
    if (!letterCounter[letter]) {
      letterCounter[letter] = 1;
    } else { // if we see a letter, and its in our object, increment it by + 1
      letterCounter[letter]++;
    }
  }
  return letterCounter;
};

console.log(countLetters("lighthouse in the house"));