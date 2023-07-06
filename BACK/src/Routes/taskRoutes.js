import { Router } from "express";
const router = Router();
import {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask,
} from "../Controllers/taskController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { createTaskSchema } from "../Schemas/taskSchema.js";
import { validateSchema } from "../middlewares/validator.js";

router.get("/tasks", authRequired, getTasks);

router.post(
  "/task",
  authRequired,
  validateSchema(createTaskSchema),
  createTask
);

router.get("/task/:id", authRequired, getTask);

router.delete("/task/:id", authRequired, deleteTask);

router.put("/task/:id", authRequired, updateTask);

export default router;
