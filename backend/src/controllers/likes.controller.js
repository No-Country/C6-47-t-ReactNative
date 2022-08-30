const services = require("../services");

const likePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  res.json(await services.likes.likePost(userId, postId));
};

const userLikes = async (req, res) => {
  const { userId } = req.params;
  res.json(await services.likes.userLikes(userId));
};

module.exports = { likePost, userLikes };
