const express = require('express')
const router = express.Router()

const {loginController} = require('../controller/login.controller')


// define the home page route
router.post('/register', loginController)

module.exports = router