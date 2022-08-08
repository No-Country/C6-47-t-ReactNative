import express from 'express'

// dotenv
import { config } from './config/config.js'

// cors
import cors from 'cors'

// sequelize
import { sequelize } from './DB/sequelize.js'

const app = express()

app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))

sequelize
	.authenticate()
	.then(() => {
		console.log('Connected to db')
	})
	.catch((error) => {
		console.log(`Error connecting to db: ${error}`)
	})

app.listen(config.PORT, () => {
	console.log(`Server listening port ${config.PORT}`)
})
