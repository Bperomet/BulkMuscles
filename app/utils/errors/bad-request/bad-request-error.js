const RequestError = require('../request-error');

class BadRequestError extends RequestError {
	constructor(message = null) {
		const errorMessage = message || 'Bad Request';
		super(errorMessage, 400);
	}
}

module.exports = BadRequestError;
