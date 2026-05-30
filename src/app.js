import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express();
import dotenv from "dotenv"
import connectDB from "./config/db.js"
dotenv.config({
  path: './.env'
})
connectDB();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({limit: "16kb", extended: true}));
app.use(express.static("public"))

app.use(cookieParser());
app.use(express.json());


export {app}

dotenv.config({
  path: './.env'
})

connectDB();