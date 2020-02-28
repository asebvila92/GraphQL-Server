const jwt = require('jsonwebtoken');
const password = "andresvila" // this must be in .env

function getUser(token) {
  try {
    if (token) {
      return jwt.verify(token, password)
    }
    return null
  } catch (err) {
    return null
  }
}

function isAuthenticated(user) {
  if (user) return true
  return false
}

function generateToken(data) {
  return jwt.sign(data, password);
}

module.exports = {
  getUser,
  isAuthenticated,
  generateToken
}