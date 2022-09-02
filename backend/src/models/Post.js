"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Post.belongsTo(models.User, { as: "user", foreignKey: "userId" });
      Post.belongsTo(models.Tags, { as: "tag", foreignKey: "tagId" });
      Post.hasMany(models.Comment, { as: "comments", foreignKey: "postId" });
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likesCount: DataTypes.INTEGER,
      commentsCount: DataTypes.INTEGER,
      mediaURL: DataTypes.STRING,
      userId: DataTypes.INTEGER,
      tagId: DataTypes.INTEGER,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Post",
    }
  );
  return Post;
};
