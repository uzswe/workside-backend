const profiles = require("../models/profileModel");

const getProfiles = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(profiles);
};

const getProfileById = (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profile = profiles.find((p) => p.id === profileId);

  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send("Profil topilmadi");
  }
};

module.exports = { getProfiles, getProfileById };
