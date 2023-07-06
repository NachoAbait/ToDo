import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./Routes/authRoutes.js";
import taskRoutes from "./Routes/taskRoutes.js";

dotenv.config();
const PORT = process.env.PORT || 3001;

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));
app.use(cors({
  origin: "https://to-do-roan-pi.vercel.app",
  credentials: true,
}));

app.use(authRoutes);
app.use(taskRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

import "./db.js";