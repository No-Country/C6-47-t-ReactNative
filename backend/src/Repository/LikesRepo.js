const Repository = require("./Repository");
const { Likes, Post, User } = require("../models/");
const { sequelizeErrorParser } = require("../utils/util");

class LikesRepository extends Repository {
  constructor() {
    super();
    this.model = Likes;
  }

  likePost = async (userId, postId) => {
    try {
      const post = await Post.findByPk(postId, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        raw: true,
      });
      if (post != null) {
        const findLike = await this.model.findOne({
          where: { userId, postId },
        });
        if (findLike == null) {
          const incrementLikes = await Post.update(
            { likesCount: post.likesCount + 1 },
            { where: { id: postId } }
          );

          const createLike = await this.createObject({
            liked: true,
            userId,
            postId,
          });
          return { message: "Post liked Successfully.", statusCode: 200 };
        } else {
          return { message: "User already liked this post.", statusCode: 401 };
        }
      }
      return { message: "Post not found.", statusCode: 404 };
    } catch (error) {
      return { message: sequelizeErrorParser(error), statusCode: 500 };
    }
  };

  dislikePost = async (userId, postId) => {
    try {
      const post = await Post.findByPk(postId, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        raw: true,
      });
      if (post != null) {
        const findLike = await this.model.findOne({
          where: { userId, postId },
          attributes: {
            exclude: ["createdAt", "updatedAt", "deletedAt"],
          },
          raw: true,
        });
        if (findLike) {
          const decrementLikes = await Post.update(
            { likesCount: post.likesCount + -1 },
            { where: { id: postId } }
          );

          const deleteLike = await this.deleteById(findLike.id);
          return { message: "Post disliked Successfully.", statusCode: 200 };
        } else {
          return { message: "User has no like in this post.", statusCode: 401 };
        }
      }
      return { message: "Post not found.", statusCode: 404 };
    } catch (error) {
      return { message: sequelizeErrorParser(error), statusCode: 500 };
    }
  };

  userLikes = async (userId) => {
    try {
      const likes = await this.model.findAll({
        where: { userId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "postId"],
        },
        include: [
          {
            model: Post,
            as: "post",
            attributes: { exclude: ["createdAt", "updatedAt", "deletedAt"] },
          },
        ],
      });
      return await likes;
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };

  userLikeByPostId = async (userId, postId) => {
    try {
      const likedPost = await this.model.findOne({
        where: { userId, postId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "userId", "postId"],
        },
      });
      if (likedPost !== null) return { liked: true };
      return { liked: false };
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}

module.exports = LikesRepository;
