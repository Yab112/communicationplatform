import jwt from "jsonwebtoken";
import { env } from "@/config/env";
import {TokenPayload} from "@/types/jwt.type"


export const generateToken = (userId: string, role: string): string => {
  return jwt.sign({ id: userId, role }, env.JWT_SECRET, { expiresIn: "7d" });
};

export const verifyToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, env.JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null; 
  }
};
