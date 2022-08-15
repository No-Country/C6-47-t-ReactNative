"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Roles.belongsTo(models.User, { foreignKey: "user_role_id" });
    }
  }
  Roles.init(
    {
      role_id: DataTypes.INTEGER,
      type_role: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Roles",
    }
  );
  return Roles;
};
