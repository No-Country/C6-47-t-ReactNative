const repositories = require('../Repository')

const Post = new repositories.repositoryPost()

const getAll = async () => {
	return await Post.getAll()
}

const getById = async () => {
	return await Post.getById()
}

const addPost = async () => {
	return await Post.addPost()
}

const editPost = async () => {
	return await Post.editPost()
}

const deletePost = async () => {
	return await Post.deletePost()
}

module.exports = {
	getAll,
	getById,
	addPost,
	editPost,
	deletePost,
}
