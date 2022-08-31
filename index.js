const express = require("express");
const Cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();

// Controllers
const Response = require("./Controllers/Response");

app.set("port", process.env.PORT);

app.use(express.json(), Cors(), bodyParser());

app.get("/", (req, res) => {
  Response(req, res, 200, "Cookie&Soda");
});

app.listen(app.get("port"));
