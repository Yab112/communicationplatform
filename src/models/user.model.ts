import { UserRole,IUser } from "@/types/user.types";
import mongoose, { Schema, Document } from "mongoose";



const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    phone: { type: String },
    department: { type: Schema.Types.ObjectId, ref: "Department", required: true },
    campus: { type: String },
    year: { type: Number },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
