import mongoose from "mongoose";
import express from "express";
import TaskModel from "../models/taskMode";

export const getTasks = async (req, res) => {
  try {
    const tasks = await TaskModel.find();

    res.status(200).json(tasks);
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
