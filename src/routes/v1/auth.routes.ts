import { Router } from "express";
import * as authController from "@/controllers/auth.controller";

const router = Router();

router.post("/register", authController.register);
router.post("/verify", authController.verifyAccount);
router.post("/resend-otp", authController.resendOTP);
router.post("/login", authController.login);
router.post("/request-password-reset", authController.requestPasswordReset);
router.post("/reset-password", authController.resetPassword);
router.post("/logout", authController.logout);

export default router;
