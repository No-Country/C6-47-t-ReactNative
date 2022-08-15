const servicePost = require('../services/post.services')

const getAll = async (req, res) => {
	res.json(await servicePost.getAll())
}

const getById = async (req, res) => {
	const resp = await servicePost.getById(req.params.id)
	res.status(resp.statusCode).json(resp.resp? resp.resp: {error:resp.error})
}

const addPost = async (req, res) => {
	//Falta hacer la verificación de los campos en la solicitud. [Ver ExpressValidator.js]
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
