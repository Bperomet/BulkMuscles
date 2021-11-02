const express = require('express');

const bodyParser = require('body-parser');
const cors = require('cors');
const { createLogger, format, transports, loggers } = require('winston');

const app = express();
const server = require('http').Server(app);

const { combine, timestamp, printf } = format;
const config = require('./app/config/server.config');
const router = require('./app/routers');

// eslint-disable-next-line no-shadow
const loggerFormat = printf(({ level, message, timestamp }) => {
	return `${timestamp} [LOG-${level}]: ${message}`;
});

const logger = createLogger({
	format: combine(timestamp(), loggerFormat),
	transports: [new transports.Console()],
});

loggers.add('default', logger);

app.use(bodyParser.json());
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(cors());
app.use(function (req, res, next) {
	logger.log({
		level: 'info',
		message: `received : ${req.method} ${req.originalUrl} (Authorization: ${req.get('Authorization')})`,
	});
	next();
});

app.use('/v1', router);

server.listen(config.app.port, () => {
	logger.log({
		level: 'info',
		message: `[ENV=${config.app.env}] Application running on port ${config.app.port}`,
	});
});

module.exports = app;
