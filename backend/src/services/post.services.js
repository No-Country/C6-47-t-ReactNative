const repositories = require("../Repository");
const { User, Roles, Tags, Comment } = require("../models");

const Post = new repositories.post();

const getAll = async () => {
  return await Post.getAll();
};

const getObjects = async (filter, page, size) => {
  const include = [
    {
      model: User,
      as: "user",
      attributes: {
        exclude: [
          "password_hash",
          "refresh_token_hash",
          "createdAt",
          "updatedAt",
          "deletedAt",
          "roleId",
          "tagId",
        ],
      },
      include: {
        model: Roles,
        as: "role",
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      },
    },
    {
      model: Tags,
      as: "tag",
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
    {
      model: Comment,
      as: "comments",
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "postId", "userId"],
      },
    },
  ];
  const exclude = ["createdAt", "updatedAt", "deletedAt", "userId", "tagId"];
  return await Post.getObjects(filter, page, size, exclude, include);
};

const getById = async (id) => {
  const include = [
    {
      model: User,
      as: "user",
      attributes: {
        exclude: [
          "password_hash",
          "refresh_token_hash",
          "createdAt",
          "updatedAt",
          "deletedAt",
          "roleId",
          "tagId",
        ],
      },
      include: {
        model: Roles,
        as: "role",
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
      },
    },
    {
      model: Tags,
      as: "tag",
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt"],
      },
    },
    {
      model: Comment,
      as: "comments",
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "postId", "userId"],
      },
    },
  ];
  const exclude = ["createdAt", "updatedAt", "deletedAt", "userId", "tagId"];
  const resp = await Post.getById(id, include, exclude);
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
