import express from "express";
import authRoutes from "./Routes/authRoutes.js";
import taskRoutes from "./Routes/taskRoutes.js";
import dotenv from "dotenv";
import morgan from "morgan";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors"; // Importa el paquete cors aquí

dotenv.config();
const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST;

// SERVIDOR
const app = express();
app.listen(3001, () => {
  console.log(`Server on Port: ${PORT}`);
});

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "https://to-do-roan-pi.vercel.app"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization" // Allow 'Authorization' header
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");

  // Preflight request. Reply successfully:
  if (req.method === 'OPTIONS') {
    res.status(200).send();
    return;
  }

  next();
});

//RUTAS
app.use(authRoutes);
app.use(taskRoutes);

//DATABASE
import "./db.js";
