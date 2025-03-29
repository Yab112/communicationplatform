import mongoose from 'mongoose';

export interface IChat extends Document {
  participants: mongoose.Types.ObjectId[]; // Exactly 2 users
  messages: {
    sender: mongoose.Types.ObjectId;
    content: string;
    timestamp: Date;
  }[];
}
export interface IAnnouncement extends Document {
  title: string;
  content: string;
  createdBy: mongoose.Types.ObjectId;
}

export interface IChatRoom extends Document {
  name: string; // Name of the chat room
  members: mongoose.Types.ObjectId[]; // Multiple users
  messages: {
    sender: mongoose.Types.ObjectId;
    content: string;
    timestamp: Date;
  }[];
}
