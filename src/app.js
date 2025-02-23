const express = require("express");
const cors = require("cors");

const homeRoutes = require("./routes/homeRoute");
const mainRoutes = require("./routes/mainRoutes");
const subscribeRoutes = require("./routes/subscribeRoute");
const reportsRoutes = require("./routes/reportsRoute");
const employeeRoutes = require("./routes/employee");
const authRoutes = require("./routes/authRoute");
const notFoundRoutes = require("./routes/notFoundRoute");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend server is running!");
});
app.use("/api/home", homeRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/employee", employeeRoutes);
app.use("/api/reports", reportsRoutes);
app.use("/api/main", mainRoutes);
app.use("/api/subscribe", subscribeRoutes);
app.use("/api/notfound", notFoundRoutes);

module.exports = app;
