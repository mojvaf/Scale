import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import route from "./routes";
import morgan from "morgan";
import cors from "cors";
// load environment variables
dotenv.config();

const app = express();

// pre-defined logging formats and options for HTTP request
app.use(morgan("tiny"));
app.use(express.json());
app.use(cors());
// route always comes after middleware
app.use("/api", route);

mongoose
  .connect("mongodb://127.0.0.1/indiScale")
  .then(() => {
    console.log("db connected");
    app.listen(process.env.PORT, () => {
      console.log("app listen to port " + process.env.PORT);
    });
  })
  .catch((err) => console.log("db error"));
