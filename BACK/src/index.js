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

const corsOptions = {
  origin: 'https://to-do-roan-pi.vercel.app', // update to match the domain you will make the request from
  credentials: true,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  preflightContinue: false,
  optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

//RUTAS
app.use(authRoutes);
app.use(taskRoutes);

//DATABASE
import "./db.js";
