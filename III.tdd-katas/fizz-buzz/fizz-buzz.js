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
const isFizzBuzz = (num) => isFizz(num) && isBuzz(num);

module.exports = (number) =>
  range(number)
    .map((num) => {
      if (isFizzBuzz(num)) return "FizzBuzz";
      if (isFizz(num)) return "Fizz";
      if (isBuzz(num)) return "Buzz";
      return num;
    })
    .join(", ");
