const middle = mid => {
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

module.exports = middle;