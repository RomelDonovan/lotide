const countLetters = function(str) {
  const removeSpace = str.split(" ").join("");
  const strLowercase = removeSpace.toLowerCase();
  const letterCounter = {};
  for (let letter of strLowercase) {
    if (!letterCounter[letter]) {
      letterCounter[letter] = 0;
    }
    letterCounter[letter]++;
  }
  return letterCounter;
};

module.exports = countLetters;