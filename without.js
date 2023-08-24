const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const without = function(words, items) {
  const itemsToRemove = [];
  for (const word of words) {
    if (!items.includes(word)) {
      itemsToRemove.push(word);
    }
  }
  return itemsToRemove;
};

const words = ["hello", "world", "lighthouse"];
assertArraysEqual(words, ["hello", "world", "lighthouse"]);