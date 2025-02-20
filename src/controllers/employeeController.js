const employee = require("../models/employee");

const getEmployee = (req, res) => {
  res.json(employee);
};

module.exports = { getEmployee };
