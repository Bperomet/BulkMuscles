require('dotenv').config();

module.exports = {
	dev: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST || 'localhost',
		dialect: 'mysql',
		timezone: '+01:00',
	},
	test: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		dialect: 'mysql',
		ssl: true,
		dialectOptions: {
			ssl: {
				require: true,
			},
		},
	},
	prod: {
		username: process.env.DB_USERNAME,
		password: process.env.DB_PASSWORD,
		database: process.env.DB_DATABASE,
		host: process.env.DB_HOST,
		port: process.env.DB_PORT,
		dialect: 'mysql',
		ssl: true,
		dialectOptions: {
			ssl: {
				require: true,
			},
		},
	},
};
