const { sequelizeErrorParser } = require("../utils/util");
const Repository = require("./Repository");
const { User, Roles } = require("../models/");

class UserRepository extends Repository {
  constructor() {
    super();
    this.model = User;
  }

  findByUsername = async (username) => {
    try {
      return await this.model.findOne({
        where: { username: username },
        attributes: {
          exclude: [
            "createdAt",
            "updatedAt",
            "deletedAt",
            "refresh_token_hash",
          ],
        },
        include: Roles,
      });
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}

module.exports = UserRepository;
