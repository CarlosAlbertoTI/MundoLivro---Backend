const userRoutes = require('./routes/user')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()) // for parsing application/json

app.use(userRoutes)

app.listen(9000,()=>{
    console.info('http://localhost:3000')
})