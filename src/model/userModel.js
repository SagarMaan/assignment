import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
      unique: true,
    },
    emailId: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = model("User", userSchema);
export default userModel;
