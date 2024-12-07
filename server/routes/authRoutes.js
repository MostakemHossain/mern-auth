import express from "express";
import { login, logout, register } from "../controllers/auth.controller.js";
import { validateRequest } from "../middleware/validateRequest.js";
import { loginValidationSchema, registerValidationSchema } from "../validations/authValidations.js";
const authRouter=express.Router();

authRouter.post("/register",validateRequest(registerValidationSchema),register)
authRouter.post("/login",validateRequest(loginValidationSchema),login)
authRouter.post("/logout",logout);
export default authRouter;