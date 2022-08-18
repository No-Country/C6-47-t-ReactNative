const { sequelizeErrorParser } = require("../utils/util");
const Repository = require("./Repository");
const { Roles } = require("../models/");

class RolesRepository extends Repository {
  constructor() {
    super();
    this.model = Roles;
  }
}

module.exports = RolesRepository;
