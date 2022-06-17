const router = require("express").Router()
const { celebrate, Joi, Segments } = require('celebrate');

const loginController = require("../../controller/login.controller")

// Login
router.post('/login',
    celebrate({
        [Segments.BODY]: {
            "email": Joi.string().email().required(),
            "id": Joi.string().required(),
            "username": Joi.string().required(),
            "urlPhoto": Joi.string().required(),
        }
    }),
    loginController.createOrLogin)


module.exports = router