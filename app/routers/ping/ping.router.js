const express = require('express');

const router = express.Router();
const { PingController } = require('../../controllers');

router.get('/', PingController.getAlivePing);

module.exports = router;
