import { Request, Response } from "express";
import Department from "@/models/department.model";
import Course from "@/models/course.model";

// **Create a Department**
export const createDepartment = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const department = await Department.create({ name });
    res.status(201).json(department);
  } catch (error) {
    res.status(500).json({ error: "Error creating department" });
  }
};

// **Create a Course in a Department**
export const createCourse = async (req: Request, res: Response) => {
  try {
    const { name, departmentId } = req.body;
    const course = await Course.create({ name, department: departmentId });

    // Add course to department
    await Department.findByIdAndUpdate(departmentId, {
      $push: { courses: course._id },
    });

    res.status(201).json(course);
  } catch (error) {
    res.status(500).json({ error: "Error creating course" });
  }
};
