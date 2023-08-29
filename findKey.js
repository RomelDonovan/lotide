const findKey = (obj, callback) => {
  for(let ele in obj) {
    if(callback(obj[ele])) {
      return ele;
    }
  }
  return undefined;
};

module.exports = findKey;