const takeUntil = (array, callback) => {
  let results = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      results = array.slice(0, i);
      return results;
    }
  }
  return results;
};

module.exports = takeUntil;