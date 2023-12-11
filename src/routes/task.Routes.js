import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTasks,
  updateTasks,
} from "../controllers/task.controller.js";
import {validateSchema} from "../middlewares/validator.middleware.js";
import {createTaskSchema} from "../schemas/task.schema.js";
const router = Router();

router.get("/task", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/task",validateSchema(createTaskSchema), authRequired, createTask);
router.delete("/task/:id", authRequired, deleteTasks);
router.put("/task/:id", authRequired, updateTasks);

export default router;
