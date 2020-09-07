module.exports = (stringToEval) => {
  const hasDelimiter = stringToEval.startsWith("//");

  const delimiter = hasDelimiter
    ? stringToEval.substring(2, stringToEval.indexOf("\n"))
    : ",";

  const numString = hasDelimiter
    ? stringToEval.substr(delimiter.length + 3) //3 = "//".length = 2 & "\n".length = 1
    : stringToEval;

  const numbers = numString
    .replace("\n", delimiter)
    .split(delimiter)
    .map((n) => +n);

  const isNegatives = (n) => n < 0;
  const negatives = numbers.filter(isNegatives);

  if (negatives.length) {
    throw Error("negatives not allowed: " + negatives.join(", "));
  }

  const lowerThenOrEqualsTo1000 = (n) => n <= 1000;
  return numbers
    .filter(lowerThenOrEqualsTo1000)
    .reduce((num, sum) => (sum += num), 0);
};
