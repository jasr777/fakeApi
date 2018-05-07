/* Users router */

const userRouter = require('express').Router();
const userController = require('./users.controller');

userRouter.get('/',userController.getAll)
userRouter.get('/:id', userController.getUser)
userRouter.post('/',userController.createUser)

module.exports = userRouter
