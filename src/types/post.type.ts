import mongoose from "mongoose";

export interface IPost extends Document {
    content: string;
    author: mongoose.Types.ObjectId;
    reactions: mongoose.Types.ObjectId[];
  }