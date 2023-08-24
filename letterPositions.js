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
  let removeSpace = sentence.split("");
  const results = {};
  for (let i = 0; i < removeSpace.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);