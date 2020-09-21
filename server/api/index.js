const { Router } = require('express')
const compress = require('./routes/compress')

module.exports = () => {
  const app = Router()

  compress(app)

  return app
}