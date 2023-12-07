import { Router } from "express";
import { authRequired } from "../middlewares/validateToken.js";
import {
  getTasks,
  getTask,
  createTask,
  deleteTasks,
  updateTasks,
} from "../controllers/task.controller.js";

const router = Router();

router.get("/task", authRequired, getTasks);
router.get("/task/:id", authRequired, getTask);
router.post("/task", authRequired, createTask);
router.delete("/task/:id", authRequired, deleteTasks);
router.put("/task/:id", authRequired, updateTasks);

export default router;
