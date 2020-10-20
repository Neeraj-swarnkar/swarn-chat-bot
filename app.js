const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

var cors = require("cors");

app.use(cors());

var publicDir = require("path").join(__dirname, "/public");
app.use(express.static(publicDir));

const PostRoutes = require("./routes/posts");
app.use("/posts", PostRoutes);

app.get("/specific", (req, res) => {
  res.send("specific data");
});

// Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    console.log("connected to DB !");
  }
);

app.listen(9000);
