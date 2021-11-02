const { PingService } = require('../../services');
const { InternalServerError } = require('../../utils/errors');

const PingController = {
	getAlivePing: (req, res) => {
		try {
			res.json({ message: PingService.getAlivePing() });
		} catch (err) {
			return new InternalServerError().send(res);
		}
	},
};

module.exports = PingController;
