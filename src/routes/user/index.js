const { celebrate, Joi, Segments } = require('celebrate');
const router = require("express").Router()

userController = require("../../controller/user.controller.js")

router.get('/user/id'
  , celebrate({
    [Segments.BODY]: {
      id: Joi.string().required()
    }
  })
  , userController.getById)

router.get('/user', userController.getAll)

router.put('/user',
  // celebrate({
  //   [Segments.BODY]: {
  //     info: Joi.string().required(),
  //     value: Joi.string().required(),
  //     id: Joi.string().required()
  //   }
  // }),
  userController.update)

router.delete('/user/:id', celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().required()
  }
}), userController.delete)


module.exports = router