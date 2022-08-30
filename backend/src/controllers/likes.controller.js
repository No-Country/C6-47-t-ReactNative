const services = require("../services");

const likePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  res.json(await services.likes.likePost(userId, postId));
};

module.exports = { likePost };
