import TaskModel from "../Models/Task.js";

export const getTasks = async (req, res) => {
  const tasks = await TaskModel.find({
    user: req.user.id,
  }).populate("user"); // El populate le agrega todos los datos del usuario, no solo el id
  res.json(tasks);
};

export const createTask = async (req, res) => {
  const { title, description, date } = req.body;

  const newTask = await new TaskModel({
    title,
    description,
    date,
    user: req.user.id, // El id es el que se le agrega al req en middleware authRequired
  });

  const savedTask = await newTask.save();

  return res.json(savedTask);
};

export const getTask = async (req, res) => {
  console.log("llegue a la ruta");
  const task = await TaskModel.findById(req.params.id);
  console.log(req.params.id);
  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

export const updateTask = async (req, res) => {
  const { id } = req.params;

  const task = await TaskModel.findByIdAndUpdate(id, req.body, { new: true }); // el new:true es para que me devuelva el objketo actualizado y no el viejo.

  if (!task) {
    res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  const task = await TaskModel.findByIdAndDelete(id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  return res.sendStatus(204);
};
