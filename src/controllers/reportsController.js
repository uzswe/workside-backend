const reports = require("../models/reportsModel");

const getReports = (req, res) => {
  res.json(reports);
};

module.exports = { getReports };
