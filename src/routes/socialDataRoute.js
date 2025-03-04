const express = require("express");
const {
  getAllSocialData,
  getSocialByName,
} = require("../controllers/socialDataController");

const router = express.Router();

router.get("/", getAllSocialData);
router.get("/:name", getSocialByName);

module.exports = router;
