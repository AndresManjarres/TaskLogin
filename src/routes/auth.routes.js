import { Router } from "express";
import { register, login, logout } from "../controllers/auth.controller.js";

//Permite crear peticiones tipo GET, POST, PUT, DELETE.
const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;