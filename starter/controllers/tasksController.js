const createTask = (req, res) => {
  res.status(200).json({ message: "POST new task" });
};

const getAllTasks = (req, res) => {
  res.status(200).json({ message: "GET all tasks" });
};

const getTaskById = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `GET task with id ${id}` });
};

const updateTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `PATCH task with id ${id}` });
};

const deleteTask = (req, res) => {
  const { id } = req.params;
  res.status(200).json({ message: `DELETE task with id ${id}` });
};

module.exports = {
  getTaskById,
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
};
