const { celebrate, Joi, Segments } = require('celebrate');
loginController = require("../controller/login.controller.js")
userController = require("../controller/user.controller.js")
bookController = require("../controller/book.controller.js")

const router = require("express").Router()

// User
router.post('/user', loginController.create)
router.get('/user', userController.getAll)
router.put('/user/:id', userController.update)
router.delete('/user/:id', userController.delete)

// Book
router.get('/book', celebrate({
  [Segments.QUERY]: {
    title: Joi.string().required(),
    author: Joi.string().required(),
    categories: Joi.array().items(Joi.string()).required()
  }
}), bookController.getAll)
router.get('/book/:id', bookController.getById)
router.post('/book', bookController.create)
router.put('/book/:id', bookController.update)
router.delete('/book/:id', bookController.delete)

module.exports = router
