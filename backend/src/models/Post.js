'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
   
    static associate(models) {
      Post.hasMany(models.Comment, { foreignKey: 'postId'}) 
      // Post.hasOne(models.MediaContent, {foreignKey:'postId'}) // <- Relacion de post/video-image, falta crear la tabla MediaContent
      // Post.belongsTo(models.User) 
      // Post.belongsToMany(models.Tag, {through:'PostTags'}) // <- Relacion de tabla intermedia PostTags entre el modelo Post y el modelo Tags
    }
  }
  Post.init({
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.INTEGER,

  }, {
    sequelize,
    timestamps:true,
    paranoid:true,
    modelName: 'Post',
  });


  return Post;
};