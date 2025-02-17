const express = require("express");
const { getSubscribePackages } = require("../controllers/subscribeController");

const router = express.Router();

router.get("/", getSubscribePackages);

module.exports = router;
