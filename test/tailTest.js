const assert = require("chai").assert;
const tail = require("../tail");

const words = ["Yo Yo", "Lighthouse", "Labs"];
const result = tail(["Hello", "Lighthouse", "Labs"]);

describe("#tail", () => {
  it("returns tail.length", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns result[1,2] == \"Lighthouse\", \"Labs\"", () => {
    assert.deepEqual(result, ["Lighthouse", "Labs"]);
  });
  it("returns result[0] == \"Lighthouse\"", () => {
    assert.deepEqual(result[0], "Lighthouse");
  });
  it("returns result[1] == \"Labs\"", () => {
    assert.deepEqual(result[1], "Labs");
  });
  it("should compare words array length", () => {
    assert.deepEqual(words.length, 3)
  });
});