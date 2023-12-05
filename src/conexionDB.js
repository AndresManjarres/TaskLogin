import mongoose from "mongoose";

// Funcion de conexión a la base de datos
export const connectDB = async () => {
  try {
    //Esta url la puedo hacer en un .env para ocultar la contraseña
    await mongoose.connect("mongodb+srv://andreswin99:8NXVdrWQuk6LbcKu@clusterfortask.fprq2aq.mongodb.net/?retryWrites=true&w=majority");
    console.log("Conectado a BD");
  } catch (error) {
    console.log(error);
    console.log("Error de conexión a BD");
  }
};