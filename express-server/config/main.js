require('dotenv').load();

module.exports = {
	secret: process.env.SECRET,
	database: process.env.DATABASE,
	port: process.env.PORT
}