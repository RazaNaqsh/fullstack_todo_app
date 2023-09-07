import mongoose from "mongoose";
import express from "express";
import TaskModel from "../models/taskModel.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    res.status(200).json(tasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const getTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No task with id:${id}`);
  }
  try {
    const task = await TaskModel.findById(id);

    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createTask = async (req, res) => {
  const task = req.body;

  const newTask = new TaskModel(task);
  try {
    await newTask.save();
    res.status(201).json(newTask);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No task with id:${id}`);
  }

  await TaskModel.findByIdAndRemove(id);
  return res.json({ message: "Task deleted successfully" });
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No task with id:${id}`);
  }

  await TaskModel.findByIdAndUpdate(id, task, { new: true });

  return res.json(task);
};
