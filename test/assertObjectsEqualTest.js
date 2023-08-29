const assertObjectsEqual = require("../assertObjectsEqual");

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject), true;
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" }); // Pass
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2" }); // Fail
assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "2", c: "1" }); // Fail