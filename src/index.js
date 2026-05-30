// require(`dotenv`).config({path: `./env`})
import dotenv from "dotenv"


import connectDB from "./db/index.js";
import express from "express";

dotenv.config({
  path: './env'
})


const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`App is listening on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to database:", error);
  });

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";



//first approach How to connect database in MERN with debugging
// import express from "express";
// const app = express();

// (  async  () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
//     app.on("error", (error) => {
//       console.error("Error connecting to MongoDB:", error);
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listening on port ${process.env.PORT}`);
//     });

//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//     throw error
//   }
// })(mongoose)