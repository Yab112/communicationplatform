import { Router } from "express";
import * as authController from "@/controllers/auth.controller";
import { validateRequest } from "@/middleware/validate";
import {  loginUserSchema, resendOTPSchema, resetPasswordSchema } from "@/validators/user.validator";

const router = Router();
// router.post("/register", validateRequest(createUserSchema), authController.register);
// router.post("/verify", validateRequest(verifyOTPSchema), authController.verifyAccount);



//Student Auth Routes
router.post("/login", validateRequest(loginUserSchema), authController.login);
router.post("/resend-otp", validateRequest(resendOTPSchema), authController.resendOTP);
router.post("/logout", authController.logout); 
router.post("/request-password-reset", validateRequest(resendOTPSchema), authController.requestPasswordReset);
router.post("/reset-password", validateRequest(resetPasswordSchema), authController.resetPassword);

export default router;
