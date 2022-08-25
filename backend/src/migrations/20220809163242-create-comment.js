"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Comments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      content: {
        type: Sequelize.STRING,
      },
      // postId: {
      // 	type: Sequelize.INTEGER,
      // allowNull: false,
      // references: {
      // 	model: 'Post',
      // 	key: 'id',
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL',
      // },
      // userId: {
      // 	type: Sequelize.INTEGER,
      /* Gabi@9/8/2022 14:00 GMT-3 
        INCOMPLETO: Va lo mismo que en postId, 
        pero hay que crear la migración de user previamente.*/
      // allowNull: false,
      // references: {
      // 	model: 'User',
      // 	key: 'id',
      // },
      // onUpdate: 'CASCADE',
      // onDelete: 'SET NULL',
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("comments");
  },
};
