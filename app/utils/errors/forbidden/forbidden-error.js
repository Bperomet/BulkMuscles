const RequestError = require('../request-error');

class ForbiddenError extends RequestError {
	constructor() {
		super('Forbidden', 403);
	}
}

module.exports = ForbiddenError;
