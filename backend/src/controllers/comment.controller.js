const services = require("../services");

const commentPost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  const { content } = req.body;
  const { statusCode, message } = await services.comments.commentPost(
    content,
    userId,
    postId
  );
  res.status(statusCode).json({ message });
};

module.exports = { commentPost };
