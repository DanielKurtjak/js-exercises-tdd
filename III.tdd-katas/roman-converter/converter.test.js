const { convertToOldRoman, convertToNewRoman } = require("./converter");

describe("Roman converter", () => {
  test.each([
    [125, "CXXV"],
    [3, "III"],
    [4, "IIII"],
    [7, "VII"],
    [18, "XVIII"],
    [22, "XXII"],
  ])("should convert '%d' to old roman '%s'", (tester, expected) => {
    const result = convertToOldRoman(tester);

    expect(result).toBe(expected);
  });

  test.each([
    [125, "CXXV"],
    [3, "III"],
    [4, "IV"],
    [7, "VII"],
    [18, "XVIII"],
    [22, "XXII"],
    [9, "IX"],
    [14, "XIV"],
    [44, "XLIV"],
    [99, "XCIX"],
    [400, "CD"],
    [944, "CMXLIV"],
    [2944, "MMCMXLIV"],
  ])("should convert '%d' to new roman '%s'", (tester, expected) => {
    const result = convertToNewRoman(tester);

    expect(result).toBe(expected);
  });
});
