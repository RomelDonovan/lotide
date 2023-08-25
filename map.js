const eqArrays = (first,second) => {
  for (let i = 0; i < first.length; i++) {
    if (first[i] !== second[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (actual, expected) => {
  if (!eqArrays(actual,expected)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
};

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]);

const results2 = map(words, word => word + ' ' + 'test');
assertArraysEqual(results2, ["ground test", "control test", "to test", "major test", "tom test"]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word[4]);
assertArraysEqual(results4, ['n','r', undefined, 'r', undefined]);