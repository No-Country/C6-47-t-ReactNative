import dotenv from 'dotenv'

dotenv.config()


export const config = {
    PORT: process.env.PORT,
    DB: process.env.DB,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST
}