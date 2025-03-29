import mongoose from "mongoose";

export interface IDepartment extends Document {
  name: string;
  courses: string[];
}

export interface IResource extends Document {
  title: string;
  url: string;
  uploadedBy: mongoose.Types.ObjectId;
}
