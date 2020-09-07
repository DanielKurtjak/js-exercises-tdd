const range = (number) => [...Array(number).keys()].map((n) => n + 1);

module.exports = (number) =>
  range(number)
    .map((num) => {
      if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num;
    })
    .join(", ");
