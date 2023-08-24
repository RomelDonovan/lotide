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

const middle = function(mid) {
  let result = [];
  if (mid.length <= 2) {
    return [];
  } else if (mid.length % 2 !== 0) {
    result.push(mid[Math.floor(mid.length / 2)]);
    return result;
  }
  const midResult1 = mid.length / 2 - 1;
  const midResult2 = mid.length / 2;
  return [mid[midResult1], mid[midResult2]];
};

//test code
console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]