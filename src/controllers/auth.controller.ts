import { Request, Response } from "express";
import { registerUser, loginUser } from "../services/auth.service";

export const register = async (req: Request, res: Response) => {
  try {
    const { name, email, password, phone, campus, year } = req.body;
    const token = await registerUser(name, email, password, phone, campus, year);
    res.status(201).json({ message: "User registered successfully", token });
  } catch (error: any) {
    console.error("❌ Registration Error:", error);
    res.status(400).json({ error: error?.message || "Something went wrong" });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.status(200).json({ message: "Login successful", token });
  } catch (error: any) {
    console.error("❌ Login Error:", error);
    res.status(400).json({ error: error?.message || "Invalid credentials" });
  }
};

export const logout = async (_req: Request, res: Response) => {
  res.status(200).json({ message: "Logout successful" });
};
