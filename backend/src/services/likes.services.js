const repositores = require("../Repository");

const Likes = new repositores.likes();

const likePost = async (userId, postId) => {
  return await Likes.likePost(userId, postId);
};

const userLikes = async (userId) => {
  return await Likes.userLikes(userId);
};

module.exports = { likePost, userLikes };
