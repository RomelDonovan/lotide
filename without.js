const without = (words, items) => {
  const itemsToRemove = [];
  for (const word of words) {
    if (!items.includes(word)) {
      itemsToRemove.push(word);
    }
  }
  return itemsToRemove;
};

module.exports = without;