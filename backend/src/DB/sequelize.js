import Sequelize from 'sequelize'

// dotenv
import { config } from '../config/config.js'


// Conexión a la DB

export const sequelize = new Sequelize(config.DB, config.DB_USER, config.DB_PASSWORD, {
	host: config.DB_HOST,
	dialect: 'mysql',
})
