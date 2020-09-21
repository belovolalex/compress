const express = require('express')
const app = express()
const config = require('./config')
const cors = require('cors')
const routes = require('./api/index')

app.use(cors())
app.use(config.api.prefix, routes())

app.listen(config.port, () => console.log('server has been started'))
