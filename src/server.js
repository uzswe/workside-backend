const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const profiles = [
  { id: 1, name: "Instagram", icon: "RiInstagramLine", url: "" },
  { id: 2, name: "Telegram", icon: "RiTelegramFill", url: "" },
  { id: 3, name: "Github", icon: "RiGithubFill", url: "" },
];

app.get("/profiles", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.json(profiles);
});

app.get("/profiles/:id", (req, res) => {
  const profileId = parseInt(req.params.id, 10);
  const profile = profiles.find((p) => p.id === profileId);
  if (profile) {
    res.json(profile);
  } else {
    res.status(404).send("Profil topilmadi");
  }
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend server is running!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
