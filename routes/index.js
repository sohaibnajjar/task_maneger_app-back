const express = require("express");
const Router = express.Router();
const cors = require("cors");
Router.use(cors());

const tasksRouter = require("./tasks");
const statusRouter = require("./status");

Router.use("/tasks", tasksRouter);
Router.use("/status", statusRouter);

Router.get("/", async (req, res) => {
  res.json({ msg: "api home route" });
});

module.exports = Router;
