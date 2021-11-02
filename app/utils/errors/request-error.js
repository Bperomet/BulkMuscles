class RequestError extends Error {
	constructor(message, httpCode) {
		super();
		this.message = message;
		this.httpCode = httpCode;
	}

	send(res) {
		res.status(this.httpCode).json({
			message: this.message,
			status: 'fail',
		});
	}
}

module.exports = RequestError;
