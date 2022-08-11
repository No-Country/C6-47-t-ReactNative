'use strict'

module.exports = {
	async up(queryInterface, Sequelize) {
		// Uso promise.all ya que se ejecutan de forma asíncrona estas peticiones contra la DB.
		return Promise.all([
			//Inserto en la tabla Posts una nueva columna llamada userId de tipo foreign key
			// queryInterface.addColumn('Users', 'postId', {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: 'Posts',
			// 		key: 'id',
			// 	},
			// 	onUpdate: 'CASCADE',
			// 	onDelete: 'CASCADE',
			// }),
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
			// queryInterface.addColumn('Posts', 'mediaContentId', {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: 'MediaContents',
			// 		key: 'id',
			// 	},
			// 	onUpdate: 'CASCADE',
			// 	onDelete: 'CASCADE',
			// }),
			// queryInterface.addColumn('Posts', 'commentId', {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: 'Comments',
			// 		key: 'id',
			// 	},
			// 	onUpdate: 'CASCADE',
			// 	onDelete: 'CASCADE',
			// }),
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
			// queryInterface.removeColumn('Users', 'postId'),
			queryInterface.removeColumn('Posts', 'userId'),
			queryInterface.removeColumn('MediaContents', 'postId'),
			queryInterface.removeColumn('Comments', 'postId'),
		])
	},
}
