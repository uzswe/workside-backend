const express = require("express");
const {
  getTopProfiles,
  getMiddleProfiles,
  getBarChartData,
  getProfileById,
} = require("../controllers/mainController");

const router = express.Router();

router.get("/top", getTopProfiles);
router.get("/middle", getMiddleProfiles);
router.get("/chart", getBarChartData);
router.get("/:id", getProfileById);

module.exports = router;
