const { Router } = require('express')
const { compressValidationRules } = require('../middleware/compressValidation')
const { validate } = require('../middleware/validator')
const { compress, decompress } = require('../../services/compress')
const route = Router()

const routes = (app) => {
  app.use('/', route)

  route.get('/compress', compressValidationRules(), validate, (req, res) => {
    const compressedString = compress(req.query.string)
    res.send(compressedString)
  })
  route.get('/decompress', compressValidationRules(), validate, (req, res) => {
    const decompressedString = decompress(req.query.string)
    res.send(decompressedString)
  })
}

module.exports = routes