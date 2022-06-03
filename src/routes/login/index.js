const { celebrate, Joi, Segments } = require('celebrate');
const router = require("express").Router()

loginController = require("../controller/login.controller.js")

// Login
router.post('/login', celebrate({
  [Segments.BODY]: {
    email: Joi.email().required(),
    id: Joi.string().required(),
    username:Joi.string().required(),
    photoURL:Joi.string().required(),
  }
}), loginController.createOrLogin)


module.exports = router