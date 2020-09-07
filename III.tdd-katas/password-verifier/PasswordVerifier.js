class PasswordVerifier {
  Verify(password) {
    if (password === null) return false;
    if (password.length <= 8) return false;
    if (password.toLowerCase() === password) return false;
    if (password.toUpperCase() === password) return false;
    if (!/\d/.test(password)) return false;
    return true;
  }
}

module.exports = PasswordVerifier;
