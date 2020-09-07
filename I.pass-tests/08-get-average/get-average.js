// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
module.exports = (array) => {
  const nums = array.filter((n) => typeof n === "number");
  return nums.reduce((a, i) => a + i, 0) / nums.length;
};
