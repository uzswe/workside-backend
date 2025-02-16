const express = require("express");
const cors = require("cors");
const profileRoutes = require("./routes/profileRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/profiles", profileRoutes);

module.exports = app;
