import mongoose from "mongoose";
import { User } from "./User";

export interface IJob {
  views?: number;
  author?: any;
  title?: string;
  description?: string;
  reward?: string;
  accepted?: boolean;
  completed?: boolean;
  worker?: string;
}

const JobSchema = new mongoose.Schema<IJob>(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    reward: {
      type: String,
    },
    accepted: {
      type: Boolean,
      default: false
    },
    completed: {
      type: Boolean,
      default: false
    },
    worker: {
      type: String,
      
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, // Replace 'User' with the actual name of your User model
    },
    views: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

let JobModel: mongoose.Model<IJob>;

try {
  // Try to retrieve an existing model
  JobModel = mongoose.model<IJob>("Job");
} catch (e) {
  // If the model doesn't exist, define it
  JobModel = mongoose.model<IJob>("Job", JobSchema);
}

export const Job = JobModel;
