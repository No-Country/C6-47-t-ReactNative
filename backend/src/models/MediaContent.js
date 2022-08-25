"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class MediaContent extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MediaContent.belongsTo(models.Post, { foreignKey: "id" });
    }
  }
  MediaContent.init(
    {
      link: DataTypes.STRING,
      postId: DataTypes.INTEGER,
      // userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      paranoid: true,
      modelName: "MediaContent",
      timestamps: true,
    }
  );
  return MediaContent;
};
