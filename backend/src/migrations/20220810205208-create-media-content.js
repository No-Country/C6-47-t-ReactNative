'use strict'
module.exports = {
	async up(queryInterface, Sequelize) {
		await queryInterface.createTable('MediaContents', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER,
			},
			link: {
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
			createdAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			updatedAt: {
				allowNull: false,
				type: Sequelize.DATE,
			},
			deletedAt:{
				allowNull:true,
				type:Sequelize.DATE
			}
		})
	},
	async down(queryInterface, Sequelize) {
		await queryInterface.dropTable('MediaContents')
	},
}
