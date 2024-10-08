import express from "express";
import dotenv from "dotenv";
import dbConnection from "./db/connect.js";
dotenv.config();
const app = express();
dbConnection();

// const port = process.env.PORT || 3000;
// app.get("/nanda", (req, res) => {
//   res.send("yeah it works");
// });
// app.listen(port, () => {
//   console.log(`server running ${port}`);
// });
