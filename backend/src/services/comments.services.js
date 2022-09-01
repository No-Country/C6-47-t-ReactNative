const repositores = require("../Repository");

const Comment = new repositores.comments();

const commentPost = async (content, userId, postId) => {
  const { statusCode, message } = await Comment.commentPost(
    content,
    userId,
    postId
  );
  return { statusCode, message };
};

const userCommentsByPostId = async (userId, postId) => {
  return await Comment.userCommentsByPostId(userId, postId);
};

module.exports = { commentPost, userCommentsByPostId };
