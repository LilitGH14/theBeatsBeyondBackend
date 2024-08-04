import express from "express";
import routes from "./routes/index.js";
import cors from "cors";
import bodyParser from "body-parser";
import "./db.js";

const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization"],
};

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors(corsOptions));

app.use("/", routes);

app.listen(3331);
