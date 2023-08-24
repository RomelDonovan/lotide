const eqObjects = function(object1, object2) {
  //console.log(Object.keys(shirtObject));
  const shirtArr1 = Object.keys(object1);
  const shirtArr2 = Object.keys(object2);
  // console.log(object1, object2);
  if (shirtArr1.length !== shirtArr2.length) {
    return false;
  }
  for (let shirt of shirtArr1) {
    if (typeof object1[shirt] !== typeof object2[shirt]) {
      return false;
    } else {
      return true;
    }
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  if (!eqObjects) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  } else {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
eqObjects(shirtObject , anotherShirtObject); // => true
assertObjectsEqual(eqObjects(shirtObject , anotherShirtObject), true); // => true