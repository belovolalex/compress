const { query } = require('express-validator')

const compressValidationRules = () => {
  return [
    query('string').isLength({ min: 2 }).withMessage('Length must be at least 2 characters')
  ]
}

module.exports = {
  compressValidationRules
}