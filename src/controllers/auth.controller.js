import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { crearToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {
    //Uso de la libreria bcryptjs para encriptar la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    const userSaved = await newUser.save();
    const token = await crearToken({id: userSaved._id});

    //Generar token
    res.cookie("token", token);

    res.json({
      id: userSaved._id,
      username: userSaved.username,
      email: userSaved.email,
      createdAt: userSaved.createdAt,
      updatedAt: userSaved.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = (req, res) => {
  res.send("login");
};
