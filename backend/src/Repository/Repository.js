const { sequelizeErrorParser } = require("../utils/util");
class Repository {
  getAll = async () => {
    return await this.model.findAll({
      where: { deletedAt: null },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "password"],
      },
      raw: true,
      order: [["id", "DESC"]],
    });
  };

  getById = async (id) => {
    try {
      return await this.model.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt", "password"],
        },
      });
    } catch (err) {
      return { error: sequelizeErrorParser(err) };
    }
  };

  createObject = async (object) => {
    try {
      return await this.model.create(object);
    } catch (err) {
      return { error: sequelizeErrorParser(err) };
    }
  };

  updateObject = async (object, id) => {
    try {
      const updated = await this.model.update(object, {
        where: { id: id },
      });
      return updated;
    } catch (err) {
      return { error: sequelizeErrorParser(err) };
    }
  };

  deleteById = async (id) => {
    try {
      return await this.model.destroy({ where: { id: id } });
    } catch (err) {
      return { error: sequelizeErrorParser(err) };
    }
  };
}

module.exports = Repository;
