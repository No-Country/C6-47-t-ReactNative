const servicePost = require('../services/post.services')

const getAll = async (req, res) => {
	const post = await servicePost.getAll()
    console.log(post)
    res.send('si anda')
}

const getById = async (req, res) => {
	const post = await servicePost.getAll()
}

const addPost = async (req, res) => {
	const post = await servicePost.getAll()
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
