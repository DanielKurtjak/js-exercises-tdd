const add = require("./calculator");

describe.only("Calculator", () => {
  test("should return zero for empty string as argument", () => {
    const result = add("");

    expect(result).toBe(0);
  });

  test('should handle when only one number is passed e.g. "1"', () => {
    const result = add("1");

    expect(result).toBe(1);
  });

  test('should pass for string with new line char like "1\\n2,3"', () => {
    const result = add("1\n2,3");

    expect(result).toBe(6);
  });

  test("should work with different delimiter", () => {
    const result = add("//;\n1\n2;3");

    expect(result).toBe(6);
  });

  test("should throw an error when negative number is passed", () => {
    expect(() => add("//;\n1\n-2;-3")).toThrowError(
      "negatives not allowed: -2, -3"
    );
  });

  test("should not ignore number 1000", () => {
    const result = add("//;\n1000\n2;3");

    expect(result).toBe(1005);
  });

  test("should ignore number bigger then 1000", () => {
    const result = add("//;\n1001\n2;3");

    expect(result).toBe(5);
  });
});
