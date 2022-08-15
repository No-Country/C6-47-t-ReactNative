const { Router } = require('express')
const controller = require('../controllers/post.controller')
const { validatorPost } = require('../middleware/validatorPost')

const routerPost = Router()

routerPost.route('/post').post(validatorPost, controller.addPost).get(controller.getAll)

routerPost.route('/posts/:id').get(controller.getById).put(controller.editPost).delete(controller.deletePost)

module.exports = routerPost
