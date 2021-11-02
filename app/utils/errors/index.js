const BadRequestError = require('./bad-request/bad-request-error');
const ForbiddenError = require('./forbidden/forbidden-error');
const UnauthorizedError = require('./unauthorized/unauthorized-error');
const InternalServerError = require('./internal-server-error');
const ValidationError = require('./validation/validation-error');

module.exports = {
	BadRequestError,
	ForbiddenError,
	UnauthorizedError,
	InternalServerError,
	ValidationError,
};
