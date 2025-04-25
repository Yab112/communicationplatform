import { IChatRoom } from "@/types/chat.type";
import mongoose, { Schema, Document } from "mongoose";



const ChatRoomSchema: Schema = new Schema(
  {
    name: { type: String, required: true },
    members: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    messages: [
      {
        sender: { type: Schema.Types.ObjectId, ref: "User", required: true },
        content: { type: String, required: true },
        timestamp: { type: Date, default: Date.now },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IChatRoom>("ChatRoom", ChatRoomSchema);
