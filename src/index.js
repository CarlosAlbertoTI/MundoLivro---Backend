const router = require('./routes')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
var cors = require('cors')

const port = 9000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json

app.use(router)

app.listen(port, () => console.log(`[${new Date().toLocaleTimeString()}] Servidor Rodando em http://localhost:${port}`))
