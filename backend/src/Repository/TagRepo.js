const Repository = require("./Repository");
const { Tags } = require("../models");
const { sequelizeErrorParser } = require("../utils/util");

class TagRepository extends Repository {
  constructor() {
    super();
    this.model = Tags;
  }

  getByName = async (tag) => {
    try {
      return await this.model.findOne({
        where: { name: tag },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt"],
        },
        raw: true,
      });
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}

module.exports = TagRepository;
