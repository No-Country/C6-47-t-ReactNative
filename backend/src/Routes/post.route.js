const { Router } = require('express')
const controller = require('../controllers/post.controller')

const routerPost = Router()

routerPost.route('/post').post(controller.addPost).get(controller.getAll)

routerPost.route('/post/:id').get(controller.getById).put(controller.editPost).delete(controller.deletePost)

module.exports = routerPost
