import express from "express";
import { createDepartment, createCourse } from "@/controllers/department.controller";

const router = express.Router();

router.post("/department", createDepartment);
router.post("/course", createCourse);

export default router;
