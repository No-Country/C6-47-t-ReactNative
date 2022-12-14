"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    // Uso promise.all ya que se ejecutan de forma asíncrona estas peticiones contra la DB.
    return Promise.all([
      queryInterface.addColumn("Posts", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Posts", "tagId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tags",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Users", "roleId", {
        type: Sequelize.INTEGER,
        defaultValue: 1,
        allowNull: false,
        references: {
          model: "Roles",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Likes", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Likes", "postId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Posts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Comments", "userId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
      queryInterface.addColumn("Comments", "postId", {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Posts",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      }),
    ]);
  },

  async down(queryInterface, Sequelize) {
    return Promise.all([
      queryInterface.removeColumn("Posts", "userId"),
      queryInterface.removeColumn("MediaContents", "postId"),
      queryInterface.removeColumn("Comments", "postId"),
    ]);
  },
};
