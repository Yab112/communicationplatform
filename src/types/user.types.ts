export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    role: UserRole;
    phone?: string;
    department?: string;
    campus?: string;
    year?: number;
    isActive: boolean;
  }

  export enum UserRole {
    STUDENT = "student",
    TEACHER = "teacher",
    ADMIN = "admin",
  }
  