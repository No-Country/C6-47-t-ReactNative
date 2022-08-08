const Sequelize = require('sequelize')

// dotenv
const config = require('../config/config')


// Conexión a la DB

const sequelize = new Sequelize(config.DB, config.DB_USER, config.DB_PASSWORD, {
	host: config.DB_HOST,
	dialect: 'mysql',
})

module.exports = sequelize