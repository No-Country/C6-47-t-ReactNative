'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		// Uso promise.all ya que se ejecutan de forma asíncrona estas peticiones contra la DB.
		return Promise.all([
			queryInterface.addColumn('Posts', 'userId', {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Users',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			}),
			queryInterface.addColumn('MediaContents', 'postId', {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Posts',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			}),
			queryInterface.addColumn('Comments', 'postId', {
				type: Sequelize.INTEGER,
				allowNull: false,
				references: {
					model: 'Posts',
					key: 'id',
				},
				onUpdate: 'CASCADE',
				onDelete: 'CASCADE',
			}),
		])
	},

	async down(queryInterface, Sequelize) {
		return Promise.all([
			queryInterface.removeColumn('Posts', 'userId'),
			queryInterface.removeColumn('MediaContents', 'postId'),
			queryInterface.removeColumn('Comments', 'postId'),
		])
	},
}
