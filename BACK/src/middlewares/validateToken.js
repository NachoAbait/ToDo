import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  //Extraemos la cookie del header
  console.log("en authRequired");

  const authHeader = req.headers.authorization;
  console.log(authHeader);

  // Vemos si hay un token
  if (!token) {
    res.status(401).json({ message: "No toke, authorization denied" });
  }

  //Verificamos el token
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // cargamos el req con los datos del usuario, para que cuando siga con la proxima funcion ya tenga los datos del usuario
    req.user = user;
    next();
  });
};
