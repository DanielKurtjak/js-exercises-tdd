module.exports = (words) => {
  const mid = Math.floor(words.length / 2);
  return words.splice(mid, 1);
};
