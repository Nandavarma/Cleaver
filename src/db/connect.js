import { DB_NAME } from "../constants.js";
import mongoose from "mongoose";
const dbConnection = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      "Here are the connection details: ",
      connectionInstance.connection.host,
    );
  } catch (error) {
    console.log("error in connecting to db: ", error);
    process.exit(1);
  }
};

export default dbConnection;
