'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    // Uso promise.all ya que se ejecutan de forma asíncrona estas peticiones contra la DB.
    return Promise.all([
      //Inserto en la tabla Posts una nueva columna llamada userId de tipo foreign key
      queryInterface.addColumn('Posts', 'userId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'User',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
      queryInterface.addColumn('Posts', 'mediaContentId', {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'MediaContent',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      }),
    ])




  },

  async down(queryInterface, Sequelize) {

    return Promise.all([
      //Inserto en la tabla Posts una nueva columna llamada userId de tipo foreign key
      queryInterface.removeColumn('Posts', 'userId'),
      queryInterface.removeColumn('Posts', 'mediaContentId'),
    ])

  }
};
