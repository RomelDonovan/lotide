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
  // logic to update results here
  // loop through the string
  for (let i = 0; i < sentence.length; i++) {
    console.log(sentence[i]);
    // if not in obj, add it as an array
    if (!results[sentence[i]]) {
      results[sentence[i]] = [];
    // if its already in the obj, add it to the existing array
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

assertArraysEqual(letterPositions("hello").e, [1]);