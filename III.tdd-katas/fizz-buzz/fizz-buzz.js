const range = (number) => [...Array(number).keys()].map((n) => n + 1);

const isFizz = (num) => {
  if (num % 3 === 0) return true;
  if (("" + num).indexOf("3") >= 0) return true;
  return false;
};
const isBuzz = (num) => {
  if (num % 5 === 0) return true;
  if (("" + num).indexOf("5") >= 0) return true;
  return false;
};

module.exports = (number) =>
  range(number)
    .map((num) => {
      if (isFizz(num) && isBuzz(num)) return "FizzBuzz";
      if (isFizz(num)) return "Fizz";
      if (isBuzz(num)) return "Buzz";
      return num;
    })
    .join(", ");
