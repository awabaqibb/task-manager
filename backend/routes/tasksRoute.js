const express = require("express");
const router = express.Router();
const {
  createTask,
  getAllTasks,
  getTaskById,
  updateTask,
  deleteTask,
} = require("../controllers/tasksController");

router.route("/").post(createTask);

router.route("/").get(getAllTasks);
router.route("/:id").get(getTaskById);

router.route("/:id").patch(updateTask);
router.route("/:id").delete(deleteTask);

module.exports = router;
