const servicePost = require("../services/post.services");

const getAll = async (req, res) => {
  // Example url GET = http://localhost:8080/post
  res.json(await servicePost.getAll());
};

const getById = async (req, res) => {
  // Example url GET = http://localhost:8080/post/:id <- idPost
  const resp = await servicePost.getById(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? resp.resp : { error: resp.error });
};

const addPost = async (req, res) => {
  // Example url POST = http://localhost:8080/post <- Need body userId, title & content
  // Falta hacer la verificación de los campos en la solicitud. [Ver ExpressValidator.js]✅
  const postToAdd = req.body;
  const newPost = await servicePost.addPost(postToAdd);
  res.status(200).json({ post: newPost });
};

const editPost = async (req, res) => {
  // Example url PUT =  http://localhost:8080/post/:id <- Need idPost on params & body new values
  const resp = await servicePost.editPost(req.body, req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

const deletePost = async (req, res) => {
  // Example url DELETE = http://localhost:8080/post/:id <- Need idPost on params
  const resp = await servicePost.deletePost(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

module.exports = {
  getAll,
  getById,
  addPost,
  editPost,
  deletePost,
};
