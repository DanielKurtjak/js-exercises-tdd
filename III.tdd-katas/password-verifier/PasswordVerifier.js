const hasLowerCaseLetter = (word) => /[a-z]/.test(word);
const hasUpperCaseLetter = (word) => /[A-Z]/.test(word);
const hasDigit = (word) => /\d/.test(word);
const isNotNull = (word) => word !== null;
const isLongEnough = (word) => word.length > 8;

const isNotNullDelayed = (word) =>
  new Promise((resolve) => setTimeout(() => resolve(isNotNull(word)), 1000));

const isLongEnoughDelayed = (word) =>
  new Promise((resolve) => setTimeout(() => resolve(isLongEnough(word)), 1000));

const hasLowerCaseLetterDelayed = (word) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(hasLowerCaseLetter(word)), 1000)
  );

const hasUpperCaseLetterDelayed = (word) =>
  new Promise((resolve) =>
    setTimeout(() => resolve(hasUpperCaseLetter(word)), 1000)
  );

const hasDigitDelayed = (word) =>
  new Promise((resolve) => setTimeout(() => resolve(hasDigit(word)), 1000));

class PasswordVerifier {
  Verify(password) {
    if (!isNotNull(password)) return false;
    if (!isLongEnough(password)) return false;
    if (!hasLowerCaseLetter(password)) return false;
    if (!hasUpperCaseLetter(password)) return false;
    if (!hasDigit(password)) return false;
    return true;
  }

  async VerifyAdvance(password) {
    const mandatoryCondition = await hasLowerCaseLetterDelayed(password);
    if (!mandatoryCondition) return false;

    const condition1 = await isNotNullDelayed(password);
    const condition2 = await isLongEnoughDelayed(password);

    if (condition1 && condition2) return true; //Third mandatory already passed
    const condition3 = await hasUpperCaseLetterDelayed(password);
    const firstThree = condition1 + condition2 + condition3;
    if (firstThree === 2) return true; //Third mandatory already passed
    if (firstThree === 0) return false; //With last one there will only be two passing (last one and mandatory one)
    const condition5 = await hasDigitDelayed(password);
    return condition5; //This condition is a decider

    //One implemetation with speed increased
    // const mandatoryCondition = await hasUpperCaseLetter(password);
    // if (!mandatoryCondition) return false;

    // const coditions = [
    //   password !== null,
    //   password.length > 8,
    //   hasLowerCaseLetter(password),
    //   mandatoryCondition,
    //   hasDigit(password),
    // ];

    // return coditions.reduce((a, i) => a + i, 0) >= 3;
  }
}

module.exports = PasswordVerifier;
