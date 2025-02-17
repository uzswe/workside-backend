const notFoundMessage = require("../models/notFoundModel");

const notFound = (req, res) => {
  res.status(404).json(notFoundMessage);
};

module.exports = { notFound };
