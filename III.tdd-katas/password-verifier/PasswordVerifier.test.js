const PasswordVerifier = require("./PasswordVerifier.js");

describe("PasswordVerifier", () => {
  let passwordVerifier;
  beforeEach(() => {
    passwordVerifier = new PasswordVerifier();
  });

  test("password should be larger than 8 chars", () => {
    const result = passwordVerifier.Verify("VeryLongPassword1");

    expect(result).toBe(true);

    const resutlShouldBeFalseFor8CharLongPass = passwordVerifier.Verify(
      "Exact8ch"
    );

    expect(resutlShouldBeFalseFor8CharLongPass).toBe(false);

    const result2 = passwordVerifier.Verify("Short1");

    expect(result2).toBe(false);
  });

  test("password should not be null", () => {
    const result = passwordVerifier.Verify(null);

    expect(result).toBe(false);
  });

  test("password should have one uppercase letter at least", () => {
    const result = passwordVerifier.Verify("VeryLongPassword1");

    expect(result).toBe(true);

    const result2 = passwordVerifier.Verify("verylongpasswordallsmallfails1");

    expect(result2).toBe(false);
  });

  test("password should have one lowercase letter at least", () => {
    const result = passwordVerifier.Verify("VeryLongPassword1");

    expect(result).toBe(true);

    const result2 = passwordVerifier.Verify("VERY_LONG_ALL_UPPER_FAILS1");

    expect(result2).toBe(false);
  });

  test("password should have one number at least", () => {
    const result = passwordVerifier.Verify("VeryLongPassword1");

    expect(result).toBe(true);

    const result2 = passwordVerifier.Verify("VeryLongPassword");

    expect(result2).toBe(false);
  });
});
