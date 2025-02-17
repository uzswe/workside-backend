const subscribePackages = require("../models/subscribeModel");

const getSubscribePackages = (req, res) => {
  res.json(subscribePackages);
};

module.exports = { getSubscribePackages };
