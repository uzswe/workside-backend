const {
  main_top_card_data,
  main_middle_card_data,
  bar_chart_data,
} = require("../models/main");

const getTopProfiles = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(main_top_card_data);
};

const getMiddleProfiles = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(main_middle_card_data);
};

const getBarChartData = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(bar_chart_data);
};

const getProfileById = (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const allProfiles = [...main_top_card_data, ...main_middle_card_data];
  const profile = allProfiles.find((p) => p.id === profileId);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send("Profil topilmadi");
  }
};

module.exports = {
  getTopProfiles,
  getMiddleProfiles,
  getBarChartData,
  getProfileById,
};
