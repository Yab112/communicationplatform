import { IReaction } from "@/types/reaction.type";
import mongoose, { Schema, Document } from "mongoose";



const ReactionSchema: Schema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
    post: { type: Schema.Types.ObjectId, ref: "Post", required: true },
    type: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model<IReaction>("Reaction", ReactionSchema);
