const { validationResult } = require('express-validator')

const validate = (req, res, next) => {
  const errors = validationResult(req)
  const getExtractedErrors = () => {
    return errors.array().map(error => error.msg)
  }

  if (errors.isEmpty()) {
    return next()
  }

  return res.status(422).json({ errors: getExtractedErrors() })
}

module.exports = {
  validate
}