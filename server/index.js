import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

import tasksRoute from "./routes/tasksRoute.js";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/tasks", tasksRoute);

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT || port, () =>
    console.log(`Connected to DB & Server started on port ${port}`)
  );
});
