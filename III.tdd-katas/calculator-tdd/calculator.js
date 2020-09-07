module.exports = (stringToEval) => {
  const hasDelimiter = stringToEval.startsWith("//");

  const delimiter = hasDelimiter ? stringToEval.split("\n")[0] : ",";

  const numString = hasDelimiter
    ? stringToEval.substr("//".length + delimiter.length - 1)
    : stringToEval;

  const numbers = numString
    .split(new RegExp(`[\n${delimiter}]`))
    .map((n) => +n);

  const negatives = numbers.filter((n) => n < 0);

  if (negatives.length) {
    throw Error("negatives not allowed: " + negatives.join(", "));
  }

  return numbers.filter((n) => n <= 1000).reduce((num, sum) => (sum += num), 0);
};
