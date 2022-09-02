"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Comment.belongsTo(models.Post, { as: "post", foreignKey: "postId" });
      Comment.belongsTo(models.User, { as: "user", foreignKey: "userId" });
    }
  }
  Comment.init(
    {
      content: DataTypes.STRING(50),
    },
    {
      sequelize,
      timestamps: true,
      modelName: "Comment",
    }
  );
  return Comment;
};
