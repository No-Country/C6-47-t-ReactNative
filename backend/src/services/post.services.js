const PostRepo = require('../Repository/PostRepo')

const Post = new PostRepo()

const getAll = async () => {
	return await Post.getAll()
}

const getById = async (id) => {
	return await Post.getById(id)
}

const addPost = async (object) => {
	return await Post.createObject(object)
}

const editPost = async (object) => {
	return await Post.updateObject(object)
}

const deletePost = async (id) => {
	return await Post.deleteById(id)
}

module.exports = {
	getAll,
	getById,
	addPost,
	editPost,
	deletePost,
}
