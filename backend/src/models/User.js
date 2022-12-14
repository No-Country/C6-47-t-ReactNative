"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, { foreignKey: "id" });
      User.belongsTo(models.Roles, { as: "role", foreignKey: "roleId" });
    }
  }
  User.init(
    {
      username: DataTypes.STRING,
      password_hash: DataTypes.STRING(64),
      email: DataTypes.STRING,
      // birth_date: DataTypes.STRING,
      refresh_token_hash: DataTypes.STRING(64),
      // userLikes: DataTypes.INTEGER,
      // userFollows: DataTypes.INTEGER,
      // userFollowers: DataTypes.INTEGER,
      // userRole: DataTypes.INTEGER
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "User",
    }
  );
  return User;
};
