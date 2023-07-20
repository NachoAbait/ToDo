import UserModel from "../Models/Users.js";
import bcrypt from "bcryptjs";
import { createAccessToken } from "../libs/jwt.js";

export const getList = async (req, res) => {
  return res.json({ msg: "getList" });
};

export const signup = async (req, res) => {
  try {
    const { user, email, password } = req.body;
    // Verificar si el usuario ya existe en la base de datos
    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "User already exists" });
    }
    // hasheamos la contraseña
    const passwordHash = await bcrypt.hash(password, 10);

    // Sino, crear un nuevo usuario
    const newUser = new UserModel({
      user,
      email,
      password: passwordHash,
    });

    // Guardar el usuario en la base de datos
    const userSaved = await newUser.save();

    //Creamos el token
    const token = await createAccessToken({ id: userSaved._id });

    //Creamos la cookie
    res.cookie("token", token, {
      sameSite: "none",
      secure: true,
    });

    res.status(201).json({
      id: userSaved._id,
      user: userSaved.user,
      email: userSaved.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Verificar si el usuario ya existe en la base de datos
    const userFound = await UserModel.findOne({ email });
    if (!userFound) {
      return res.status(400).json({ error: "User not found" });
    }

    // comparamos las contraseñas
    const isMatch = await bcrypt.compare(password, userFound.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Incorrect password" });
    }

    //Creamos el token
    const token = await createAccessToken({ id: userFound._id });

    //Creamos la cookie
    res.cookie("token", token);

    res.status(201).json({
      id: userFound._id,
      user: userFound.user,
      email: userFound.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const logout = async (req, res) => {
  res.cookie("token", "", {
    expires: new Date(0),
  });
  return res.sendStatus(200);
};

export const profile = async (req, res) => {
  const userFound = await UserModel.findById(req.user.id);
  if (!userFound) {
    res.status(400).json({ message: "User not found" });
  }

  return res.json({
    id: userFound._id,
    user: userFound.user,
    email: userFound.email,
  });
};
