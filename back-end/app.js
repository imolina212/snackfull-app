// DEPENDENCIES
const express = require("express");
const cors = require("cors");

const snackController = require("./controllers/snackController")

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/snacks", snackController)

app.get("/", (_, res) => {
    res.status(200).send("Get Snack'n at Snack-a-log!");
  });
  
  app.get("*", (_, res) => {
    res.status(404).send("this is not the page you are looking for");
  });

// EXPORT
module.exports = app;
