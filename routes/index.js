const express = require("express");
const Router = express.Router();
const cors = require("cors");

// const tasksRouter = require("./tasks");
// const statusRouter = require("./status");

Router.use(cors());

Router.get("/", async (req, res) => {
  res.json({ msg: "api home route" });
});
Router.get("/list", async (req, res) => {
  res.json({ msg: "list api route" });
});

// Router.use("/tasks", tasksRouter);
// Router.use("/status", statusRouter);

module.exports = Router;
