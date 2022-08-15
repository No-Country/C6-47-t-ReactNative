const PostRepo = require('../Repository/PostRepo')

const Post = new PostRepo()

const getAll = async () => {
	return await Post.getAll()
}

const getById = async (id) => {
	const resp = await Post.getById(id)
	if(!resp) return { statusCode:404,error:'Post not found.'}
	else return { statusCode:200,resp:resp}
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
