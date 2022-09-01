const services = require("../services");

const likePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  const { statusCode, message } = await services.likes.likePost(userId, postId);
  res.status(statusCode).json({ message });
};

const dislikePost = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  const { statusCode, message } = await services.likes.dislikePost(
    userId,
    postId
  );
  res.status(statusCode).json({ message });
};

const userLikes = async (req, res) => {
  const { userId } = req.params;
  const userLikes = await services.likes.userLikes(userId);
  res
    .status(userLikes.statusCode)
    .json(
      userLikes.message ? { message: userLikes.message } : userLikes.userLikes
    );
};

const userLikeByPostId = async (req, res) => {
  const { postId } = req.params;
  const userId = req.userId;
  const { statusCode, liked } = await services.likes.userLikeByPostId(
    userId,
    postId
  );
  res.status(statusCode).json({ liked });
};

module.exports = { likePost, userLikes, dislikePost, userLikeByPostId };
