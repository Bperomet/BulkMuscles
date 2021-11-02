const RequestError = require('../request-error');

class ValidationError extends RequestError {
	constructor(err) {
		const errorMessage = err ? err.errors[0].message : 'Body is missing a required field';
		super(errorMessage, 400);
	}
}

module.exports = ValidationError;
