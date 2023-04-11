import express from "express";
import { resolve } from "path";
import pageRoutes from "./routes/pages.routes.js";
import apiRoutes from "./routes/api.routes.js";

const app = express();

app.set("view engine", "ejs");
app.use("/static", express.static(resolve("static")));

//app.use(express.static("../Frontend/dist"));
app.use(express.json());
app.use("/", pageRoutes);
app.use("/api", apiRoutes);

export default app;
