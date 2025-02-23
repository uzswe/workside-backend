const social_data = require("../models/socialModel");

const getAllSocialData = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(social_data);
};

const getSocialByName = (req, res) => {
  const socialName = req.params.name;
  const social = social_data.find(
    (s) => s.name.toLowerCase() === socialName.toLowerCase()
  );

  if (social) {
    res.json(social);
  } else {
    res.status(404).json({ message: "Ma'lumot topilmadi" });
  }
};

module.exports = { getAllSocialData, getSocialByName };
