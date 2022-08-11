const servicePost = require('../services/post.services')

const getAll = async (req, res) => {
	res.json(await servicePost.getAll())
}

const getById = async (req, res) => {}

const addPost = async (req, res) => {
	const newPost = req.body.post
	return await servicePost.addPost(newPost)
}

const editPost = async (req, res) => {
	const post = await servicePost.getAll()
}

const deletePost = async (req, res) => {
	const post = await servicePost.getAll()
}

module.exports = {
	getAll,
	getById,
	addPost,
	editPost,
	deletePost,
}
