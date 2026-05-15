const express = require("express");
const router = express.Router();

const Task = require("../models/User");

// GET tasks
router.get("/", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
});

// ADD task
router.post("/", async (req, res) => {
  try {
    const newTask = new Task({
      title: req.body.title,
      subject: req.body.subject,
    });

    const savedTask = await newTask.save();

    res.json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TOGGLE COMPLETE
router.put("/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    task.completed = !task.completed;

    await task.save();

    res.json(task);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;