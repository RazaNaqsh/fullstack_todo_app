import express from "express";

import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasksController.js";

const router = express.Router();

router.get("/", getTasks);
router.post("/", createTask);
router.get("/:id", getTask);
router.delete("/:id", deleteTask);
router.patch("/:id", updateTask);

export default router;
