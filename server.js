import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Configure dotenv to load environment variables from the `.env` file in `config`
dotenv.config({ path: "./config/.env" });

const app = express();

const port = 4000;

import userRoutes from "./routes/userRoutes.js";

//to allow us extract properties that are stured in the request body
//we use this express built in middleware
app.use(express.json());
//connected to all the routes defined in the userroutes.js
app.use("/api/v1", userRoutes);

app.get("/", (req, res) => {
  res.status(200).send("better");
});

///a function to connect aa mongodb database
async function connectToDb() {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("connected to database");
    console.log("serever running on port: " + port);
  } catch (error) {
    console.log(error);
  }
}
//start the server to listen on your port
app.listen(port, () => {
  connectToDb();
});
