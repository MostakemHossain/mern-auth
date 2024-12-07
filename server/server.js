import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";
import express from "express";
import connectDB from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

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

app.use("/api/auth",authRouter)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})