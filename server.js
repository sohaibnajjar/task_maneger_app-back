const router = require("./routes");

// express
const express = require("express");
const cors = require("cors");

// app config
const app = express();
app.use(express.json());
app.use(cors());

// API router
app.use("/", router);

app.listen(3333, () => console.log("connected"));
