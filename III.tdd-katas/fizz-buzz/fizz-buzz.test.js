const fizzbuzz = require("./fizz-buzz");

test("for 1 prints 1", () => {
  const result = fizzbuzz(1);
  expect(result).toEqual("1");
});

test("for 2 prints 1,2", () => {
  const result = fizzbuzz(2);
  expect(result).toEqual("1, 2");
});

test("for 3 prints 1, 2, Fizz", () => {
  const result = fizzbuzz(3);
  expect(result).toEqual("1, 2, Fizz");
});

test("for 5 prints 1, 2, Fizz, 4, Buzz", () => {
  const result = fizzbuzz(5);
  expect(result).toEqual("1, 2, Fizz, 4, Buzz");
});

test("for 20 prints 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz", () => {
  const result = fizzbuzz(20);
  expect(result).toEqual(
    "1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz, 16, 17, Fizz, 19, Buzz"
  );
});
