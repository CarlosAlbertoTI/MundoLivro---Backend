const { celebrate, Joi, Segments } = require('celebrate');
loginController = require("../controller/login.controller.js")
userController = require("../controller/user.controller.js")
bookController = require("../controller/book.controller.js")

const router = require("express").Router()

// User
router.post('/user', celebrate({
  [Segments.BODY]: {
    email: Joi.string().required()
  }
}), loginController.create)

router.get('/user', userController.getAll)

router.put('/user/:id', celebrate({
  [Segments.PARAMS] : {
    id: Joi.string().required()
  },
  [Segments.BODY] : {
    name: Joi.string().required(),
    email: Joi.string().required()
  }
}),userController.update)

router.delete('/user/:id', celebrate({
  [Segments.PARAMS] : {
    id: Joi.string().required()
  }
}),userController.delete)

// Book
router.get('/book', celebrate({
  [Segments.QUERY]: {
    title: Joi.string().required(),
    author: Joi.string().required(),
    categories: Joi.array().items(Joi.string()).required()
  }
}), bookController.getAll)

router.get('/book/:id', celebrate({
  [Segments.PARAMS] : {
    id: Joi.string().required()
  }
}),bookController.getById)

router.post('/book', celebrate({
  [Segments.BODY]: {
    title: Joi.string().required(),
    author: Joi.string().required(),
    categories: Joi.array().items(Joi.string()).required()
  }
}), bookController.create)

router.put('/book/:id', celebrate({
  [Segments.PARAMS] : {
    id: Joi.string().required()
  },
  [Segments.BODY] : {
    title: Joi.string().required(),
    author: Joi.string().required(),
    categories: Joi.array().items(Joi.string()).required()
  }
}),bookController.update)

router.delete('/book/:id', celebrate({
  [Segments.PARAMS] : {
    id: Joi.string().required()
  }
}),bookController.delete)

module.exports = router
