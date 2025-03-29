import { IEvent } from "@/types/event.type";
import mongoose, { Schema} from "mongoose";



const EventSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    venue: { type: String, required: true },
    time: { type: Date, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IEvent>("Event", EventSchema);
