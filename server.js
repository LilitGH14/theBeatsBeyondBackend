import express from "express";
import routes from "./src/routes/index.js";
import "./db.js";

const app = express();

app.use(express.json());
app.use("/", routes);
app.listen(3331);
