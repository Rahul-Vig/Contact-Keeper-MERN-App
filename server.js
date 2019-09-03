//Entry-point to backend.
const express = require("express"); //common js, need to implement babel or typescript for import
const connectDB = require("./config/db");
const app = express();

connectDB();

//Init middleware
// @ts-ignore
app.use(express.json({ extended: false }));

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the ContactKeeper API..." })
);

//Define Routes
app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;
