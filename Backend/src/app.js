import express from "express";
import { resolve } from "path";
import pageRoutes from "./routes/pages.routes.js";
import apiRoutes from "./routes/api.routes.js";

//console.log(import.meta.url.split("/backend")[1]);
const app = express();
app.set("port", 5080);
app.set("view engine", "ejs");

app.use("/public", express.static(resolve("public")));

app.use(express.json());
app.use("/", pageRoutes);
app.use("/api", apiRoutes);

export default app;
