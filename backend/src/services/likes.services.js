const repositores = require("../Repository");

const Likes = new repositores.likes();

const likePost = async (userId, postId) => {
  return await Likes.likePost(userId, postId);
};

module.exports = { likePost };
