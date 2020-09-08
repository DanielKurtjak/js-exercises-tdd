const oldRomanPairs = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5, "V"],
  [1, "I"],
];

const newRomanPairs = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

const generateConvertor = (pairs) => (number) => {
  let romanNumber = "";
  let pair = 0;
  while (number) {
    const [arab, roman] = pairs[pair++];
    const whole = Math.floor(number / arab);
    if (whole > 0) {
      romanNumber += roman.repeat(whole);
      number -= whole * arab;
    }
  }

  return romanNumber;
};

module.exports = {
  convertToOldRoman: generateConvertor(oldRomanPairs),

  convertToNewRoman: generateConvertor(newRomanPairs),
};
