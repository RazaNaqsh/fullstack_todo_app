import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Api running"));

mongoose.connect(process.env.MONGO_URL).then(() => {
  app.listen(process.env.PORT || port, () =>
    console.log(`Connected to DB & Server started on port ${port}`)
  );
});
