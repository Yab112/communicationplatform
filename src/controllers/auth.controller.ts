import { Request, Response, NextFunction } from "express";
import authService from "@/services/auth.service";



export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = await authService.loginUser(req.body.StuID, req.body.password);
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};

export const resendOTP = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authService.resendOTP(req.body.email);
    res.status(200).json({ message: "New OTP sent." });
  } catch (error) {
    next(error);
  }
};


export const requestPasswordReset = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authService.requestPasswordReset(req.body.email);
    res.status(200).json({ message: "OTP sent for password reset." });
  } catch (error) {
    next(error);
  }
};

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
  try {
    await authService.resetPassword(req.body.email, req.body.otp, req.body.newPassword);
    res.status(200).json({ message: "Password reset successful." });
  } catch (error) {
    next(error);
  }
};

export const logout = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    await authService.logoutUser(token as string);
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    next(error);
  }
};

// export const register = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     await authService.registerUser(req.body);
//     res.status(201).json({ message: "OTP sent. Please verify your email." });
//   } catch (error) {
//     next(error);
//   }
// };

// export const verifyAccount = async (req: Request, res: Response, next: NextFunction) => {
//   try {
//     await authService.verifyOTPService(req.body.email, req.body.otp);
//     res.status(200).json({ message: "Account verified successfully." });
//   } catch (error) {
//     next(error);
//   }
// };





