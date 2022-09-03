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
            "roleId",
          ],
        },
        include: [
          {
            model: Roles,
            as: "role",
          },
        ],
      });
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };

  findOneAndUpdate = async (object, Filter) => {
    try {
      return await this.model.update(object, { where: Filter });
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}

module.exports = UserRepository;
