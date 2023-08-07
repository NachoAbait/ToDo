import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequired = (req, res, next) => {
  //Extraemos el encabezado de autorización
  console.log("en authRequired");
  const authHeader = req.headers.authorization;
  console.log("Encabezado de autorización recibido:", authHeader);

  // Verificamos si existe un encabezado de autorización
  if (!authHeader) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  // Separamos "Bearer" y el token
  const parts = authHeader.split(" ");

  if (parts.length !== 2) {
    return res.status(401).json({ message: "Token error, invalid format" });
  }

  const [scheme, token] = parts;

  console.log(token);

  if (!/^Bearer$/i.test(scheme)) {
    return res
      .status(401)
      .json({ message: "Token malformatted, Bearer not found in string" });
  }

  // Verificamos el token
  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Invalid token" });
    }

    // Cargamos el req con los datos del usuario
    req.user = user;
    next();
  });
};
