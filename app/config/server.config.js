const env = process.env.NODE_ENV || 'dev';

const dev = {
	app: {
		env,
		port: 9000,
	},
	auth: {
		secret: process.env.AUTH_SECRET || 'supersecret',
		expiresIn: 3600,
		algorithm: 'HS256',
	},
};

const test = {
	app: {
		env,
		port: 9000,
	},
	auth: {
		secret: process.env.AUTH_SECRET || 'supersecretderecette',
		expiresIn: 3600,
	},
};

const prod = {
	app: {
		env,
		port: 8080,
	},
	auth: {
		secret: process.env.AUTH_SECRET,
		expiresIn: 3600,
	},
};

const config = {
	dev,
	test,
	prod,
};

module.exports = config[env];
