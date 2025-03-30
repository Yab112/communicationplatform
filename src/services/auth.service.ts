import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "@/models/user.model";
import redisClient from "@/config/redis";
import { sendOTPEmail } from "@/services/email.service";
import { generateOTP, verifyOTP, storeOTP } from "@/utils/otp";
import { env } from "@/config/env";
import { ERROR_MESSAGES } from "@/errors/error.constants";
import { comparePassword, hashPassword } from "@/utils/passwordUtils";

const registerUser = async (userData: any) => {
  const { name, email, password, phone, campus, year } = userData;

  const existingUser = await User.findOne({ email });
  if (existingUser) throw new Error(ERROR_MESSAGES.EMAIL_IN_USE);

  const hashedPassword = hashPassword(password)

  const user = new User({ name, email, password: hashedPassword, phone, campus, year, isActive: false });
  await user.save();

  await sendOTPEmail(email);
};

const verifyOTPService = async (email: string, otp: string) => {
  const isValidOTP = await verifyOTP(email, otp);
  if (!isValidOTP) throw new Error(ERROR_MESSAGES.INVALID_OTP);

  const user = await User.findOneAndUpdate({ email }, { isActive: true }, { new: true });
  if (!user) throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);

  await redisClient.del(`otp:${email}`);
  return { success: true };
};

const resendOTP = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);

  await sendOTPEmail(email);
};

const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);
  if (!user.isActive) throw new Error(ERROR_MESSAGES.ACCOUNT_NOT_VERIFIED);

  const isMatch = await comparePassword(password, user.password);
  if (!isMatch) throw new Error(ERROR_MESSAGES.INVALID_CREDENTIALS);

  const token = jwt.sign({ userId: user.id, role: user.role }, env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

const requestPasswordReset = async (email: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);

  await sendOTPEmail(email);
};

const resetPassword = async (email: string, otp: string, newPassword: string) => {
  const isValidOTP = await verifyOTP(email, otp);
  if (!isValidOTP) throw new Error(ERROR_MESSAGES.INVALID_OTP);

  const hashedPassword = await bcrypt.hash(newPassword, 10);
  await User.findOneAndUpdate({ email }, { password: hashedPassword });

  await redisClient.del(`otp:${email}`);
};

const logoutUser = async (token: string) => {
  if (!token) throw new Error("Token is required");

  const decoded: any = jwt.verify(token, env.JWT_SECRET);
  await redisClient.set(`blacklist:${decoded.userId}`, token, { EX: 604800 });

  return { message: "Logged out successfully" };
};

export default {
  registerUser,
  verifyOTPService,
  resendOTP,
  loginUser,
  requestPasswordReset,
  resetPassword,
  logoutUser,
};
