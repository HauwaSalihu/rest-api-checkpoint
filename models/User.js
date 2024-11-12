import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      minLength: 3,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
//creating user variable so that we can access it from the controlleers etc
//the new mongoose.model("users", userSchema) defines a collection in the dm and the structureof each documnet in the collection
const User = new mongoose.model("users", userSchema);

export default User;
