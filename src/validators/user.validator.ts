import Joi from "joi";
import { UserRole } from "@/types/user.types";

export const createUserSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  role: Joi.string().valid(...Object.values(UserRole)).default("student"),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).optional(),
  department: Joi.string().required(),
  campus: Joi.string().optional(),
  year: Joi.number().integer().min(1).max(8).optional(),
});

export const loginUserSchema = Joi.object({
  StuID: Joi.string().required(),
  password: Joi.string().required(),
});

export const verifyOTPSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required(),
});

export const resendOTPSchema = Joi.object({
  email: Joi.string().email().required(),
});

export const resetPasswordSchema = Joi.object({
  email: Joi.string().email().required(),
  otp: Joi.string().length(6).required(),
  newPassword: Joi.string().min(6).required(),
});
