const Repository = require("./Repository");
const { Comment, Post } = require("../models/");
const { sequelizeErrorParser } = require("../utils/util");

class CommentsRepository extends Repository {
  constructor() {
    super();
    this.model = Comment;
  }

  commentPost = async (content, userId, postId) => {
    try {
      const post = await Post.findByPk(postId, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        raw: true,
      });
      if (post != null) {
        const incrementComments = await Post.update(
          { commentsCount: post.commentsCount + 1 },
          { where: { id: postId } }
        );

        const createComment = await this.createObject({
          content,
          userId,
          postId,
        });
        return { message: "Post commented Successfully.", statusCode: 200 };
      } else {
        return { message: "Post not found.", statusCode: 404 };
      }
    } catch (error) {
      return { message: sequelizeErrorParser(error), statusCode: 500 };
    }
  };
}

module.exports = CommentsRepository;
