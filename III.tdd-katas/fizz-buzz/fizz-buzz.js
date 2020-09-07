module.exports = (number) =>
  [...Array(number).keys()]
    .map((n) => {
      const num = n + 1;
      if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
      if (num % 3 === 0) return "Fizz";
      if (num % 5 === 0) return "Buzz";
      return num;
    })
    .join(", ");
