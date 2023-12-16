import User from "../models/user.models.js";
import bcrypt from "bcryptjs";
import { crearToken } from "../libs/jwt.js";

export const register = async (req, res) => {
  const { email, password, username } = req.body;

  try {

    const userFound = await User.findOne({email});

    if(userFound) return res.status(400).json(["El correo ya esta en uso"]);

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

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {

    const userFound = await User.findOne({email});

    if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

    //Comparar contraseñas
    const isMatch = await bcrypt.compare(password, userFound.password);

    if(!isMatch) return res.status(400).json({message: "Contraseña incorrecta"});

    const token = await crearToken({id: userFound._id});

    //Generar token
    res.cookie("token", token);

    res.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
      createdAt: userFound.createdAt,
      updatedAt: userFound.updatedAt,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "", {expires: new Date(0)});

  return res.sendStatus(200);
}

export const profile = async (req, res) => {
  
  const userFound = await User.findById(req.user.id);

  if(!userFound) return res.status(400).json({message: "Usuario no encontrado"});

  return res.json ({
    id: userFound._id,
    username: userFound.username,
    email: userFound.email,
    createdAt: userFound.createdAt,
    updatedAt: userFound.updatedAt,
  })

}