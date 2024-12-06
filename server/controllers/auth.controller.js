import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import userModel from "../models/user.modals.js";
export const register= async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const existingUser=await userModel.findOne({email});
        if(existingUser){
            return res.status(400).json({msg:"User already exists"});
        }
        const hashedPassword= await bcrypt.hash(password,process.env.HASH_PASSWORD);
        const user=new userModel({name,email,password:hashedPassword});
        await user.save();

        const token= jwt.sign({
            id:user._id,},
        process.env.JWT_SECRET,
        {
            expiresIn:process.env.JWT_EXPIRES
        }
        );

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV ==="production",
            sameSite: process.env.NODE_ENV ==="production" ? "none" : "strict",
            maxAge:1*24*60*60*1000

        });        
    } catch (error) {
        res.json({
            status: false,
            message: error.message

        })
        
    }
    
}