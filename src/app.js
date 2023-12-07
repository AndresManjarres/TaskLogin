import Express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.Routes.js";


const app = new Express();

app.use(morgan("dev"));
// Para convertir los datos que llegan en el body a json
app.use(Express.json());
// Para convertir las cokoies en json
app.use(cookieParser());

app.use("/api", authRoutes);
app.use("/api", taskRoutes);

export default app;