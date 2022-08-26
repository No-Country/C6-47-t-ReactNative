"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tags.hasMany(models.Post, { foreignKey: "id" });
    }
  }
  Tags.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      timestamps: true,
      paranoid: true,
      modelName: "Tags",
    }
  );
  return Tags;
};
