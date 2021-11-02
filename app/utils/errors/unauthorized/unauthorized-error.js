const RequestError = require('../request-error');

class UnauthorizedError extends RequestError {
	constructor() {
		super('Unauthorized', 401);
	}
}

module.exports = UnauthorizedError;
