const { sequelizeErrorParser } = require("../utils/util");

class Repository {
  getAll = async () => {
    return await this.model.findAll({
      where: { deletedAt: null },
      attributes: {
        exclude: ["createdAt", "updatedAt", "deletedAt", "password_hash"],
      },
      raw: true,
      order: [["id", "DESC"]],
    });
  };

  getObjects = async (page, size, include) => {
    try {
      return await this.model.findAndCountAll({
        where: { deletedAt: null },
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt", "password_hash"],
        },
        // raw: true,
        order: [["id", "DESC"]],
        limit: size,
        offset: page * size,
        include: include,
      });
    } catch (err) {
      return { error: sequelizeErrorParser(err) };
    }
  };

  getById = async (id) => {
    try {
      return await this.model.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt", "deletedAt", "password_hash"],
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
        where: { id },
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
