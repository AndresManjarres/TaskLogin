import app from "./app.js";
import { connectDB } from "./conexionDB.js";

connectDB();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});