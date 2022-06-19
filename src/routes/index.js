const { celebrate, Joi, Segments } = require('celebrate');

const loginRouter = require("./login/")
const userRouter = require("./user/")
const bookRouter = require("./books/")

const router = require("express").Router()

router.use(loginRouter)
router.use(userRouter)
router.use(bookRouter)

module.exports = router
