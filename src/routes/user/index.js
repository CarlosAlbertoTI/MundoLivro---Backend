const { celebrate, Joi, Segments } = require('celebrate');
const router = require("express").Router()

userController = require("../../controller/user.controller.js")


// User
router.get('/user/id:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required()
  }
}), userController.getById)

router.get('/user', userController.getAll)

router.put('/user',
  // celebrate({
  //   [Segments.PARAMS] : {
  //     id: Joi.string().required()
  //   },
  //   [Segments.BODY] : {
  //     name: Joi.string().required(),
  //     email: Joi.string().required()
  //   }
  // }),
  userController.update)

router.delete('/user/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required()
  }
}), userController.delete)


module.exports = router