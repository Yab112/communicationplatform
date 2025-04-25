import { UserRole,IUser } from "@/types/user.types";
import mongoose, { Schema, Document } from "mongoose";



const UserSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    StuID :{type:String,required:true,unique:true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: Object.values(UserRole), required: true },
    phone: { type: String },
    campus: { type: String }, 
    year: { type: Number },
    department: {type:String,required:true}
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
