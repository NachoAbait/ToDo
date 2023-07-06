import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const { PASSWORD, DEPLOY } = process.env;

const uri = `mongodb+srv://42346091nacho:${PASSWORD}@cluster0.vapnmtk.mongodb.net/`;

mongoose.set("strictQuery", false);

mongoose
  .connect(DEPLOY, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("DB is connected"))
  .catch((err) => console.log("Error:", err));

export default mongoose;
