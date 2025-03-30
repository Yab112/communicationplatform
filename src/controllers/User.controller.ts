import { Request, Response } from "express";
import User from "@/models/user.model";
import bcrypt from "bcryptjs";

// **Add a New User**
export const addUser = async (req: Request, res: Response) => {
  try {
    const { name, email, phone, departmentId, role, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, phone, department: departmentId, role, password: hashedPassword });

    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Error adding user" });
  }
};
