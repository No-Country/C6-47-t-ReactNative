const Repository = require("./Repository");
const { Post, Tags } = require("../models/");
const serviceTag = require("../services/tag.services");
const { sequelizeErrorParser } = require("../utils/util");

class PostRepository extends Repository {
  constructor() {
    super();
    this.model = Post;
  }

  getByTag = async (tag) => {
    try {
      const tagObject = await serviceTag.getByName(tag);
      const tagId = tagObject.dataValues.id;
      return await this.model.findAll({
        where: { tagId: tagId },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        include: Tags,
      });
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };

  getWithLikes = async (id) => {
    try {
      // const likes = await
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}

module.exports = PostRepository;
