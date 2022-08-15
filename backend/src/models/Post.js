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
      Post.hasMany(models.Comment, { foreignKey: "postId" });
      Post.hasOne(models.MediaContent, { foreignKey: "postId" }); // <- Relacion de post/video-image, falta crear la tabla MediaContent
      Post.belongsTo(models.User, { foreignKey: "id" });
      // Post.belongsTo(models.MediaContent, { through: 'postId' })
      // Post.belongsTo(models.User, { foreignKey: 'userId' })
      // Post.belongsToMany(models.Tag, {through:'PostTags'}) // <- Relacion de tabla intermedia PostTags entre el modelo Post y el modelo Tags
    }
  }
  Post.init(
    {
      title: DataTypes.STRING,
      content: DataTypes.STRING,
      likes: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      // mediaContentId: DataTypes.INTEGER,
      // commentId: DataTypes.INTEGER,
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
