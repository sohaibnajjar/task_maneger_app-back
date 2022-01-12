// const router = require("./routes");

// // express
// const express = require("express");
// const cors = require("cors");

// // app config
// const app = express();
// app.use(express.json());
// app.use(cors());

// const PORT = 3333;

// // API router
// app.use("/", router);
// app.listen(process.env.PORT || PORT, () =>
//   console.log(`connected on Port ${PORT}`)
// );

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
