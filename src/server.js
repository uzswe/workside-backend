const app = require("./app");

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// app.get("/", (req, res) => {
//   res.send("Backend server is running!");
// });
