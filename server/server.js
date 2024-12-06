import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";

const app= express();

const port= process.env.PORT || 4000
connectDB()

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    credentials:true
}))

app.get("/",(req,res)=>{
    res.send("MERN Auth API is Running")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})