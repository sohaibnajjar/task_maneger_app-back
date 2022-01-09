const router = require("express").Router();
const Task = require("../models/Task");
const cors = require("cors");

router.use(cors());

router.get("/list", async (req, res) => {
  const tasks = await Task.findAll();
  if (tasks.length) {
    res.json(tasks);
  } else {
    res.json({ msg: "there is no data " });
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await Task.findOne({ where: { id } });
    if (task) {
      res.json(task);
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
    res.status(404).json({ msg: `there is no task this id ${id}` });
  }
});

router.post("/", async (req, res) => {
  const {
    task,
    //  summary, assignee, Reporter,
    StatusId,
  } = req.body;
  try {
    const newTask = await Task.create({
      task,
      // summary,
      // assignee,
      // Reporter,
      StatusId,
    });
    res.json(newTask);
  } catch (e) {
    console.log(e.message);
    res.status(400).json({ msg: "pls enter all information " });
  }
});

router.put("/:id/editstatus", async (req, res) => {
  const { id } = req.params;
  const { StatusId } = req.body;

  try {
    const preEdit = await Task.update(
      { StatusId },
      {
        where: {
          id,
        },
      }
    );
    if (preEdit > 0) {
      const editedTask = await Task.findOne({ where: { id } });
      res.json(editedTask);
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e.message);
    res
      .status(404)
      .json({ msg: `pls enter all info or there is no task with id ${id}` });
  }
});
router.put("/:id/edit", async (req, res) => {
  const { id } = req.params;
  const { type, summary, assignee, Reporter, StatusId } = req.body;

  try {
    const preEdit = await Task.update(
      { type, summary, assignee, Reporter, StatusId },
      {
        where: {
          id,
        },
      }
    );
    if (preEdit > 0) {
      const editedTask = await Task.findOne({ where: { id } });
      res.json(editedTask);
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e.message);
    res
      .status(404)
      .json({ msg: `pls enter all info or there is no task with id ${id}` });
  }
});

router.delete("/:id/delete", async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTask = await Task.destroy({ where: { id } });
    if (deleteTask > 0) {
      res.json("task deleted");
    } else {
      throw Error();
    }
  } catch (e) {
    console.log(e);
    res.status(404).json("task dose not found");
  }
});

module.exports = router;
