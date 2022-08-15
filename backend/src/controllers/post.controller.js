const servicePost = require('../services/post.services')

const getAll = async (req, res) => {
	res.json(await servicePost.getAll())
}

const getById = async (req, res) => {
	const resp = await servicePost.getById(req.params.id)
	res.status(resp.statusCode).json(resp.resp ? resp.resp : { error: resp.error })
}

const addPost = async (req, res) => {
	//Falta hacer la verificación de los campos en la solicitud. [Ver ExpressValidator.js]✅
	const postToAdd = req.body
	const newPost = await servicePost.addPost(postToAdd)
	res.status(200).json({ post: newPost })
}

const editPost = async (req, res) => {
	const resp = await servicePost.editPost(req.body, req.params.id)
	res.status(resp.statusCode).json(resp.resp ? { message: resp.resp } : { error: resp.error })
}

const deletePost = async (req, res) => {
	const resp = await servicePost.deletePost(req.params.id)
	res.status(resp.statusCode).json(resp.resp ? { message: resp.resp } : { error: resp.error })
}

module.exports = {
	getAll,
	getById,
	addPost,
	editPost,
	deletePost,
}
