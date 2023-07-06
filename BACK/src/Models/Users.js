import mongoose from "mongoose";


const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    user: {
      type: String,
      require: true,
      trim: true,
    },
    email: {
      type: String,
      require: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("users", UserSchema);
export default UserModel;
