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
      },
      password: {
        type: Sequelize.STRING,
      },
      birth_date: {
        type: Sequelize.STRING,
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
