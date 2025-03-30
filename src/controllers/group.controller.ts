import { Request, Response } from "express";
import Group from "@/models/group.model";

// **Create a Group**
export const createGroup = async (req: Request, res: Response) => {
  try {
    const { name, members } = req.body;
    const group = await Group.create({ name, members });
    res.status(201).json(group);
  } catch (error) {
    res.status(500).json({ error: "Error creating group" });
  }
};
