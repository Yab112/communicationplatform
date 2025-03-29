import { IPost } from "@/types/post.type";
import mongoose, { Schema, Document } from "mongoose";


const PostSchema: Schema = new Schema(
  {
    content: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    reactions: [{ type: Schema.Types.ObjectId, ref: "Reaction" }],
  },
  { timestamps: true }
);

export default mongoose.model<IPost>("Post", PostSchema);
