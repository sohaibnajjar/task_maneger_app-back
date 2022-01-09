const router = require("express").Router();
const Status = require("../models/Status");
const cors = require("cors");

router.use(cors());

router.get("/list", async (req, res) => {
  const status = await Status.findAll();
  if (status.length) {
    res.json(status);
  } else {
    res.json({ msg: "there is no data " });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const dbStatus = await Status.findOne({ where: { id } });
    if (dbStatus) {
      res.json(true);
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e.message);
    res.status(400).json(false);
  }
});

router.post("/", async (req, res) => {
  const { title } = req.body;
  try {
    const newStatus = await Status.create({
      title,
    });
    res.json(newStatus);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ msg: "pls enter all information " });
  }
});

router.delete("/:id/delete", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteStatus = await Status.destroy({ where: { id } });
    if (deleteStatus > 0) {
      res.json("status deleted");
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e.message);
    res.status(404).json("status dose not found");
  }
});

module.exports = router;
