'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
			User.hasMany(models.Post, { foreignKey: 'id'})
		}
	}
	User.init(
		{
			username: DataTypes.STRING,
			password_hash: DataTypes.STRING,
			birth_date: DataTypes.STRING,
			// postId: DataTypes.INTEGER,
			// tagsId: DataTypes.INTEGER,
			// userLikes: DataTypes.INTEGER,
			// userFollows: DataTypes.INTEGER,
			// userFollowers: DataTypes.INTEGER,
			// userRole: DataTypes.INTEGER
		},
		{
			sequelize,
			timestamps: true,
			paranoid: true,
			modelName: 'User',
		}
	)
	return User
}
