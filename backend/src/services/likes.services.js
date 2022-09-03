const repositores = require("../Repository");

const Likes = new repositores.likes();

const likePost = async (userId, postId) => {
  const { statusCode, message } = await Likes.likePost(userId, postId);
  return { statusCode, message };
};

const dislikePost = async (userId, postId) => {
  const { statusCode, message } = await Likes.dislikePost(userId, postId);
  return { statusCode, message };
};

const userLikes = async (userId) => {
  const userLikes = await Likes.userLikes(userId);
  if (userLikes.error)
    return { statusCode: 500, error: "Internal Server Error" };
  if (userLikes.length == 0)
    return {
      statusCode: 400,
      message: "User has no post liked or user doesn't exist.",
    };
  return { statusCode: 200, userLikes };
};

const userLikeByPostId = async (userId, postId) => {
  const { error, liked } = await Likes.userLikeByPostId(userId, postId);
  if (error) return { statusCode: 500, error: "Internal Server Error" };
  return { statusCode: 200, liked };
};

module.exports = { likePost, dislikePost, userLikes, userLikeByPostId };
