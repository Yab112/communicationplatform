import { IAnnouncement } from "@/types/chat.type";
import mongoose, { Schema, Document } from "mongoose";


const AnnouncementSchema: Schema = new Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdBy: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IAnnouncement>("Announcement", AnnouncementSchema);
