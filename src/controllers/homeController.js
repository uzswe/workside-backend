const homeData = require("../models/homeModel");

const getHomeData = (req, res) => {
  res.json(homeData);
};

module.exports = { getHomeData };
