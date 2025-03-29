import { ISchedule } from "@/types/user.types";
import mongoose, { Schema} from "mongoose";


const ScheduleSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    time: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<ISchedule>("Schedule", ScheduleSchema);
