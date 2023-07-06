import { Router } from "express";
const router = Router();
import {
  login,
  signup,
  logout,
  profile,
} from "../Controllers/authController.js";
import { authRequired } from "../middlewares/validateToken.js";
import { validateSchema } from "../middlewares/validator.js";
import { registerSchema, loginSchema } from "../Schemas/authSchema.js";

router.post("/signup", validateSchema(registerSchema), signup);

router.post("/login", validateSchema(loginSchema), login);

router.post("/logout", logout);

router.get("/profile", authRequired, profile);

export default router;
