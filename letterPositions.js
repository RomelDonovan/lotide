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

module.exports = letterPositions;