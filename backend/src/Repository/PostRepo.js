const Repository = require('./Repository')
const { Post } = require('../models/')
// console.log(db)
// const Post = db.models.Post

class PostRepository extends Repository {
	constructor() {
		super()
		this.model = Post
	}
}

module.exports = PostRepository
