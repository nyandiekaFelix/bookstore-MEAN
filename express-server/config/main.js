require('dotenv').load();

module.exports = {
	TOKEN_SECRET: process.env.SECRET,
	database: process.env.DATABASE,
	port: process.env.PORT
}