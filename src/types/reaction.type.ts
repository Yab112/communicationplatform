import mongoose from "mongoose";

export interface IReaction extends Document {
    user: mongoose.Types.ObjectId;
    post: mongoose.Types.ObjectId;
    type: string; // Like, Love, Wow, etc.
  }