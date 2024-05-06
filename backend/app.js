const express = require("express");
const app = express();
app.use(express.json());

const connectDB = require("./db/connect");
notFound = require("./middleware/notFound");
const tasksRouter = require("./routes/tasksRoute");

require("dotenv").config();
const port = 3000;

app.use("/api/tasks", tasksRouter);
app.use(notFound);

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
