const express = require('express')

// dotenv
const config = require('./config/config')

// cors
const cors = require('cors')

// sequelize
const sequelize  = require('./DB/sequelize')

// Routes
const routerPost = require('./Routes/post.route')



const app = express()

app.use(express.json())
app.use(cors({ origin: '*', credentials: true }))
app.use(routerPost)


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
