import { Router } from "express";
import { register, login } from "../controllers/auth.controller.js";

//Permite crear peticiones tipo GET, POST, PUT, DELETE.
const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;