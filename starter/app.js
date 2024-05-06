const port = 3000;
const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasksRoute");

app.use("/api/tasks", tasksRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
