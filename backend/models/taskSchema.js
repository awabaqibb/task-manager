const mongoose = require("mongoose");

const TaskScehma = new mongoose.Schema({
  name: String,
  completed: Boolean,
});

module.exports = mongoose.model("Task", TaskScehma);
