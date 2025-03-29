import mongoose from 'mongoose';
export enum UserRole {
  STUDENT = 'student',
  TEACHER = 'teacher',
  ADMIN = 'admin',
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  phone?: string;
  department?: mongoose.Types.ObjectId;
  campus?: string;
  year?: number;
  isActive: boolean;
}

export interface ISchedule extends Document {
  user: mongoose.Types.ObjectId;
  title: string;
  description?: string;
  date: Date;
  time: string;
}
export interface IGroup extends Document {
  name: string;
  description?: string;
  members: mongoose.Types.ObjectId[];
  createdBy: mongoose.Types.ObjectId;
}

export interface IStory extends Document {
  content: string;
  author: mongoose.Types.ObjectId;
  expiresAt: Date;
}
