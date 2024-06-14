import mongoose from "mongoose";

export interface IMessage {
  message: string;
  title: string;
  from: string;
  to: string;
  sig: string;
}

// TODO: Make it better......

const MessageSchema = new mongoose.Schema<IMessage>(
  {
    message: {
      type: String,
      require: true,
    },
    title: {
      type: String,
      require: true,
    },
    sig: {
      type: String || null,
      unique: true,
    },
    from: {
      type: String || Number,
    },
    to: {
      type: String || Number,
    },
  },
  { timestamps: true }
);

let MessageModel: mongoose.Model<IMessage>;

try {
  // Try to retrieve an existing model
  MessageModel = mongoose.model<IMessage>("Message");
} catch (e) {
  // If the model doesn't exist, define it
  MessageModel = mongoose.model<IMessage>("Message", MessageSchema);
}

export const Message = MessageModel;
