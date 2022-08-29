const Repository = require("./Repository");
const { Likes } = require("../models/");
const { sequelizeErrorParser } = require("../utils/util");

class LikesRepository extends Repository {
  constructor() {
    super();
    this.model = Likes;
  }

  getByPost = (id) => {
    try {
      // return await this.
    } catch (error) {
      return { error: sequelizeErrorParser(error) };
    }
  };
}
