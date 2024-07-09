import mongoose from "mongoose";
import { User } from "./User";

export interface IJob {
  author?: any;
  title?: string;
  description?: string;
  reward?: string;
  accepted?: boolean;
  completed?: boolean;
  worker?: string;
  startTime?: string;
  endTime?: string; 
  signatureOfCompletion?: string;

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
      type: mongoose.Schema.Types.ObjectId,
      ref: User, 
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User, 
    },
    startTime: {
      type: String,
    },
    endTime: {
      type: String,
    },
    signatureOfCompletion: {
      type: String,
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
