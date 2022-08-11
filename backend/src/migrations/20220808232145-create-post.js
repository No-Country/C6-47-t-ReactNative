'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('Posts', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			title: {
				type: Sequelize.STRING,
			},
			content: {
				type: Sequelize.STRING,
			},
			likes: {
				type: Sequelize.INTEGER,
			},
			// userId: {
			// 	type: Sequelize.INTEGER,
			// 	allowNull: false,
			// 	references: {
			// 		model: 'Users',
			// 		key: 'id',
			// 	},
			// 	onUpdate: 'CASCADE',
			// 	onDelete: 'CASCADE',
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
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('Posts')
	},
}
