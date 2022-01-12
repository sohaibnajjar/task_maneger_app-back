const router = require("./routes");

// express
const express = require("express");
const cors = require("cors");

// app config
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3333;

// API router
// app.use("/", router);
app.listen(process.env.PORT || PORT, () =>
  console.log(`connected on Port ${PORT}`)
);
