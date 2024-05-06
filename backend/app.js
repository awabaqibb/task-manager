const express = require("express");
const app = express();
const connectDB = require("./db/connect");

const tasksRouter = require("./routes/tasksRoute");
require("dotenv").config();
const port = 3000;

app.use("/api/tasks", tasksRouter);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
