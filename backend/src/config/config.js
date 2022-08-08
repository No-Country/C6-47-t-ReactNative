require('dotenv').config()


const config = {
    PORT: process.env.PORT,
    DB: process.env.DB_NAME,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST
}

module.exports = config