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
          exclude: ["createdAt", "updatedAt", "deletedAt", "password_hash"],
        },
        raw: true,
      });
      const checkLiked = await this.model.findOne({
        where: { userId, postId },
      });
      if (checkLiked == null) {
        const incrementLikes = await Post.update(
          { likes: post.likes + 1 },
          { where: { id: postId } }
        );

        const createLike = await this.createObject({
          liked: true,
          userId,
          postId,
        });
        return { message: "Post liked Successfully." };
      } else {
        return { error: "User already liked this post." };
      }
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };

  userLikes = async (userId) => {
    try {
      const likes = await this.model.findAll({
        where: { userId },
        attributes: {
          exclude: ["createdAt", "updatedAt"],
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
}

module.exports = LikesRepository;
