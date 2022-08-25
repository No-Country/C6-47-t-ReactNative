"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      // birth_date: {
      //   type: Sequelize.STRING,
      // },
      refresh_token_hash: {
        type: Sequelize.STRING(64),
        allowNull: true,
      },
      // postId: {
      // 	type: Sequelize.INTEGER,
      // 	allowNull: false,
      // 	references: {
      // 		model: 'Posts',
      // 		key: 'id',
      // 		as: 'postId',
      // 	},
      // 	onUpdate: 'CASCADE',
      // 	onDelete: 'SET NULL',
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      // tagsId: {
      //   type: Sequelize.INTEGER
      // },
      // userLikes: {
      //   type: Sequelize.INTEGER
      // },
      // userFollows: {
      //   type: Sequelize.INTEGER
      // },
      // userFollowers: {
      //   type: Sequelize.INTEGER
      // },
      // userRole: {
      //   type: Sequelize.INTEGER
      // },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
