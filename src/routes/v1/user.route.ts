import express from "express";
import { addUser } from "@/controllers/User.controller";

const router = express.Router();

router.post("/user", addUser);

export default router;
