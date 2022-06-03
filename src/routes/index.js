const { celebrate, Joi, Segments } = require('celebrate');

const loginRouter = require("./login/")
const userRouter = require("./user/")
const bookRouter = require("./books/")

const router = require("express").Router()

router.use(loginRouter)
router.use(userRouter)
router.use(bookRouter)

// // Login
// router.post('/login', celebrate({
//   [Segments.BODY]: {
//     email: Joi.email().required(),
//     id: Joi.string().required(),
//     username:Joi.string().required(),
//     photoURL:Joi.string().required(),
//   }
// }), loginController.createOrLogin)

// // User
// router.get('/user', userController.getAll)

// router.get('/user:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   }
// }), userController.getById)

// router.put('/user/:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   },
//   [Segments.BODY] : {
//     name: Joi.string().required(),
//     email: Joi.string().required()
//   }
// }),userController.update)

// router.delete('/user/:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   }
// }),userController.delete)

// // Book
// router.get('/book', celebrate({
//   [Segments.QUERY]: {
//     title: Joi.string().required(),
//     author: Joi.string().required(),
//     categories: Joi.array().items(Joi.string()).required()
//   }
// }), bookController.getAll)

// router.get('/book/:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   }
// }),bookController.getById)

// router.post('/book', celebrate({
//   [Segments.BODY]: {
//     title: Joi.string().required(),
//     author: Joi.string().required(),
//     categories: Joi.array().items(Joi.string()).required()
//   }
// }), bookController.create)

// router.put('/book/:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   },
//   [Segments.BODY] : {
//     title: Joi.string().required(),
//     author: Joi.string().required(),
//     categories: Joi.array().items(Joi.string()).required()
//   }
// }),bookController.update)

// router.delete('/book/:id', celebrate({
//   [Segments.PARAMS] : {
//     id: Joi.string().required()
//   }
// }),bookController.delete)

module.exports = router
