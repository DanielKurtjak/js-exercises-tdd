const PasswordVerifier = require("./PasswordVerifier.js");

describe("PasswordVerifier", () => {
  describe("with regular Verify", () => {
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

    test("password should have letters", () => {
      const failsForLongButAllNumbers = passwordVerifier.Verify("123456576788");

      expect(failsForLongButAllNumbers).toBe(false);
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

  describe("with regular advanced, more simple verify", () => {
    let passwordVerifier;

    beforeEach(() => {
      passwordVerifier = new PasswordVerifier();
    });

    test("password should be false if there are no lowercase letters", async () => {
      const result = await passwordVerifier.VerifyAdvance("VP1125415");

      expect(result).toBe(false);
    }, 1040);

    test("password not should pass if at least three conditions are met with mandatory one", async () => {
      const twoLowerCaseAndNotNull = "vvv";
      const result = await passwordVerifier.VerifyAdvance(
        twoLowerCaseAndNotNull
      );

      expect(result).toBe(false);
    }, 5500);

    test("password should pass in less then 4000ms if first three conditions are met", async () => {
      const notNullLongEnoughAndHasLowerCaseLetter = "abcdefghi";
      const result = await passwordVerifier.VerifyAdvance(
        notNullLongEnoughAndHasLowerCaseLetter
      );

      expect(result).toBe(true);
    }, 3100);

    test("password should pass if at least three conditions are met with mandatory one", async () => {
      const shouldPass = "vP1125415";
      const result = await passwordVerifier.VerifyAdvance(shouldPass);

      expect(result).toBe(true);
    }, 5500);
  });
});
