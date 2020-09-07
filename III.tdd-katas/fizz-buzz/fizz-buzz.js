const range = (number) => [...Array(number).keys()].map((n) => n + 1);

const isFizz = (num) => num % 3 === 0;
const isBuzz = (num) => num % 5 === 0;
const isFizzBuzz = (num) => num % 3 === 0 && num % 5 === 0;

module.exports = (number) =>
  range(number)
    .map((num) => {
      if (isFizzBuzz(num)) return "FizzBuzz";
      if (isFizz(num)) return "Fizz";
      if (isBuzz(num)) return "Buzz";
      return num;
    })
    .join(", ");
