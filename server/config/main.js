require('dotenv').load();

module.exports = {
	TOKEN_SECRET: process.env.SECRET,
	DATABASE: process.env.DATABASE,
	PORT: process.env.PORT,
	NODE_ENV: process.env.NODE_ENV
}