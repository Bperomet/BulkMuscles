const RequestError = require('./request-error');

class InternalServerError extends RequestError {
	constructor(message = null) {
		const errorMessage = message || 'Internal Server Error';
		super(errorMessage, 500);
	}
}

module.exports = InternalServerError;
