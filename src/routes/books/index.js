const { celebrate, Joi, Segments } = require('celebrate');
const router = require("express").Router()

bookController = require("../../controller/book.controller.js")

// Book
router.get('/book',
  // celebrate({
  //     [Segments.QUERY]: {
  //       title: Joi.string().required(),
  //       author: Joi.string().required(),
  //       categories: Joi.array().items(Joi.string()).required()
  //     }
  //   }),
  bookController.getAll)

router.get('/book/id/',
  // celebrate({
  //   [Segments.PARAMS] : {
  //     id: Joi.string().required()
  //   }
  // }),
  bookController.getById)

router.post('/book',
  // celebrate({
  //   [Segments.BODY]: {
  //     title: Joi.string().required(),
  //     author: Joi.string().required(),
  //     categories: Joi.array().items(Joi.string()).required()
  //   }
  // }), 
  bookController.create)

router.put('/book/:id',
  // celebrate({
  //   [Segments.PARAMS] : {
  //     id: Joi.string().required()
  //   },
  //   [Segments.BODY] : {
  //     title: Joi.string().required(),
  //     author: Joi.string().required(),
  //     categories: Joi.array().items(Joi.string()).required()
  //   }
  // }),
  bookController.update)

router.delete('/book',
  // celebrate({
  //   [Segments.PARAMS] : {
  //     id: Joi.string().required()
  //   }
  // }),
  bookController.delete)

module.exports = router