import dotenv from "dotenv";
import express from "express";
import dbConnection from "./db/connect.js";
import { app } from "./app.js";
dotenv.config();
//const app = express();
const port = process.env.PORT || 3000;
dbConnection()
  .then(() => {
    app.listen(port, (err) => {
      if (err) {
        console.log("error starting the server: ", err);
        process.exit(1);
      }
      console.log(`Server is running at ${port}`);
    });

    app.on("error", (error) => {
      console.log("App error: ", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("Database connection error: ", err);
    process.exit(1);
  });
