const eqArrays = function(first,second) {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const letterPositions = function(sentence) {
  const results = {};
  for (const i in sentence) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);