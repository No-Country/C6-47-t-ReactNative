const services = require("../services");

const getAll = async (req, res) => {
  // Example url GET = http://localhost:8080/post
  res.json(await services.post.getAll());
};

const getObjects = async (req, res) => {
  //Example url GET = https://localhost:8080/post?page=0&size=1
  //Testear con query parameters: "page" y "size"
  const pageAsNumber = Number.parseInt(req.query.page);
  const sizeAsNumber = Number.parseInt(req.query.size);

  let page = 0;
  if (!Number.isNaN(pageAsNumber) && pageAsNumber > 0) {
    page = pageAsNumber;
  }

  let size = 5;
  if (!Number.isNaN(sizeAsNumber) && sizeAsNumber > 0) {
    size = sizeAsNumber;
  }

  res.json(await services.post.getObjects(page, size));
};

const getById = async (req, res) => {
  // Example url GET = http://localhost:8080/post/:id <- idPost
  const resp = await services.post.getById(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? resp.resp : { error: resp.error });
};

const addPost = async (req, res) => {
  // Example url POST = http://localhost:8080/post <- Need body userId, title & content
  // Falta hacer la verificación de los campos en la solicitud. [Ver ExpressValidator.js]✅
  const postToAdd = req.body;
  const newPost = await services.post.addPost(postToAdd);
  res.status(200).json({ post: newPost });
};

const editPost = async (req, res) => {
  // Example url PUT =  http://localhost:8080/post/:id <- Need idPost on params & body new values
  const resp = await services.post.editPost(req.body, req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

const deletePost = async (req, res) => {
  // Example url DELETE = http://localhost:8080/post/:id <- Need idPost on params
  const resp = await services.post.deletePost(req.params.id);
  res
    .status(resp.statusCode)
    .json(resp.resp ? { message: resp.resp } : { error: resp.error });
};

const getByTag = async (req, res) => {
  res.json(await services.post.getByTag("javascript"));
};

module.exports = {
  getAll,
  getById,
  addPost,
  editPost,
  deletePost,
  getObjects,
  getByTag,
};
