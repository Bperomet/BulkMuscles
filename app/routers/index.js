const express = require('express');

const router = express.Router();
const PingRouter = require('./ping/ping.router');

router.use('/ping', PingRouter);

module.exports = router;