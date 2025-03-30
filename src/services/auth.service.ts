import User from "../models/user.model";
import { hashPassword, comparePassword } from "@/utils/passwordUtils";
import { generateToken } from "../utils/jwt";

export const registerUser = async (name: string, email: string, password: string, phone?: string, campus?: string, year?: number) => {
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new Error("User already exists with this email.");
  }

  const hashedPassword = await hashPassword(password);

  const user = new User({
    name,
    email,
    password: hashedPassword,
    role: "student", // Default role is Student
    phone,
    campus,
    year,
  });

  await user.save();
  return generateToken(user._id.toString(), user.role);
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) {
    throw new Error("Invalid credentials.");
  }

  const isPasswordValid = await comparePassword(password, user.password);
  if (!isPasswordValid) {
    throw new Error("Invalid credentials.");
  }

  return generateToken(user._id.toString(), user.role);
};
