const Repository = require('./Repository')
const db = require('../models/')
const Post = db.models.Post

class PostRepository extends Repository {
	constructor() {
		super()
		this.model = Post
	}
}

module.exports = repositoryPost
