/**
 * Validation utilities module.
 * Write tests for all exported functions in validators.test.js.
 */

/**
 * Validates that an email address has a valid format.
 * @param {string} email
 * @returns {boolean}
 */
function isValidEmail(email) {
  if (!email || typeof email !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
}

/**
 * Validates that a password meets minimum requirements:
 * at least 8 characters, one uppercase, one lowercase, one digit.
 * @param {string} password
 * @returns {boolean}
 */
function isStrongPassword(password) {
  if (!password || typeof password !== 'string') return false
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /\d/.test(password)
  )
}

/**
 * Validates that a value is a positive integer.
 * @param {unknown} value
 * @returns {boolean}
 */
function isPositiveInteger(value) {
  return Number.isInteger(value) && value > 0
}

/**
 * Validates that a string is not empty after trimming.
 * @param {unknown} value
 * @returns {boolean}
 */
function isNonEmptyString(value) {
  return typeof value === 'string' && value.trim().length > 0
}

/**
 * Validates that a date string is in ISO 8601 format (YYYY-MM-DD).
 * @param {string} dateStr
 * @returns {boolean}
 */
function isISODate(dateStr) {
  if (!dateStr || typeof dateStr !== 'string') return false
  return /^\d{4}-\d{2}-\d{2}$/.test(dateStr) && !isNaN(new Date(dateStr).getTime())
}

/**
 * Validates that a URL uses https protocol.
 * @param {string} url
 * @returns {boolean}
 */
function isHttpsUrl(url) {
  if (!url || typeof url !== 'string') return false
  try {
    const parsed = new URL(url)
    return parsed.protocol === 'https:'
  } catch {
    return false
  }
}

module.exports = {
  isValidEmail,
  isStrongPassword,
  isPositiveInteger,
  isNonEmptyString,
  isISODate,
  isHttpsUrl,
}
