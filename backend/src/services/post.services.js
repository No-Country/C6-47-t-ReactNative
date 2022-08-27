const repositories = require("../Repository");

const Post = new repositories.post();

const getAll = async () => {
  return await Post.getAll();
};

const getObjects = async (page, size) => {
  return await Post.getObjects(page, size);
};

const getById = async (id) => {
  const resp = await Post.getById(id);
  if (!resp) return { statusCode: 404, error: "Post not found." };
  else return { statusCode: 200, resp: resp };
};

const addPost = async (object) => {
  return await Post.createObject(object);
};

const editPost = async (object, id) => {
  const resp = await Post.updateObject(object, id);
  if (resp == 0) return { statusCode: 404, error: "Post not found." };
  else return { statusCode: 200, resp: "Post updated." };
};

const deletePost = async (id) => {
  const resp = await Post.deleteById(id);
  if (resp == 0) return { statusCode: 404, error: "Post not found." };
  else return { statusCode: 200, resp: "Post deleted." };
};

const getByTag = async (tag) => {
  const resp = await Post.getByTag(tag);
  return resp;
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
