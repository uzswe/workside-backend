const express = require("express");
const cors = require("cors");

const homeRoutes = require("./routes/homeRoute");
const profileRoutes = require("./routes/profileRoutes");
const subscribeRoutes = require("./routes/subscribeRoute");
const reportsRoutes = require("./routes/reportsRoute");
const authRoutes = require("./routes/authRoute");
const notFoundRoutes = require("./routes/notFoundRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend server is running!");
});
app.use("/api/home", homeRoutes);
app.use("/api/profiles", profileRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/auth", authRoutes);
app.use("*", notFoundRoutes);

module.exports = app;
