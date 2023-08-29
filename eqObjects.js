const eqArrays = require("./eqArrays");

const eqObjects = (object1, object2) => {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key in object1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    } else if ((typeof (object1[key]) !== typeof ({}) && typeof (object2[key]) !== typeof ({})) && (object1[key] !== object2[key])) {
      return false;
    } else if ((typeof (object1[key]) === typeof ({}) || typeof (object1[key]) === typeof ({})) && eqObjects(object1[key], object2[key]) === false) {
      return false;
    } else if (typeof (object1[key]) === typeof ({}) || typeof (object1[key]) === typeof ({})) {
      eqObjects(object1[key], object2[key]);
    }
  }
  return true;
};

module.exports = eqObjects;