const Repository = require('./Repository')
const { Post } = require('../models/')

class PostRepository extends Repository {
	constructor() {
		super()
		this.model = Post
	}
}

module.exports = PostRepository