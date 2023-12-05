import Express from "express";
import morgan from "morgan";

import authRoutes from "./routes/auth.routes.js";
const app = new Express();

app.use(morgan("dev"));
// Para convertir los datos que llegan en el body a json
app.use(Express.json());

app.use("/api", authRoutes);

export default app;