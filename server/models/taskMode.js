import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  title: String,
  description: String,
  deadline: Date,
  priority: String,
  isImportant: Boolean,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const TaskModel = mongoose.model("task", taskSchema);

export default TaskModel;
