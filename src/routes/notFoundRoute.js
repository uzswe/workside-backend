const express = require("express");
const { notFound } = require("../controllers/notFoundController");

const router = express.Router();

router.use("*", notFound);

module.exports = router;
