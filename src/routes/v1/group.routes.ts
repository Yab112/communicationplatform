import express from "express";
import { createGroup } from "@/controllers/group.controller";

const router = express.Router();

router.post("/group", createGroup);

export default router;
