const { celebrate, Joi, Segments } = require('celebrate');
const router = require("express").Router()

bookController = require("../../controller/book.controller.js")

router.get('/book',
  // celebrate({
  //   [Segments.QUERY]: {
  //     title: Joi.string().required(),
  //     author: Joi.string().required(),
  //     categories: Joi.array().items(Joi.string()).required()
  //   }
  // }),
  bookController.getAll)

router.get('/user/:userId/book/:bookId',
  // celebrate({
  //   [Segments.PARAMS]: {
  //     id: Joi.string().required()
  //   }
  // }),
  bookController.getById)

router.post('/:userId/book',
  // celebrate({
  //   [Segments.BODY]: {
  //     title: Joi.string().required(),
  //     author: Joi.string().required(),
  //     categories: Joi.array().items(Joi.string()).required()
  //   }
  // }),
  bookController.create)

router.get('/user/:userId/book',
  // celebrate({
  //   [Segments.BODY]: {
  //     title: Joi.string().required(),
  //     author: Joi.string().required(),
  //     categories: Joi.array().items(Joi.string()).required()
  //   }
  // }),
  bookController.getAllFromUser)

router.put('/user/:userId/book/:bookId',
  //   // celebrate({
  //   //   [Segments.PARAMS] : {
  //   //     id: Joi.string().required()
  //   //   },
  //   //   [Segments.BODY] : {
  //   //     title: Joi.string().required(),
  //   //     author: Joi.string().required(),
  //   //     categories: Joi.array().items(Joi.string()).required()
  //   //   }
  //   // }),
  bookController.update)

router.delete('/user/:userId/book/:bookId',
  // celebrate({
  //   [Segments.PARAMS]: {
  //     id: Joi.string().required()
  //   }
  // }),
  bookController.delete)

module.exports = router