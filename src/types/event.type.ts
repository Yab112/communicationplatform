import mongoose from "mongoose";

export interface IEvent extends Document {
    title: string;
    description?: string;
    venue: string;
    time: Date;
    createdBy: mongoose.Types.ObjectId;
  }