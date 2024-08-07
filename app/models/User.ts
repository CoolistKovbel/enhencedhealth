import mongoose from "mongoose";

export interface IUser {
  username: string;
  email: string;
  password: string;
  image: string;
  role: string;
  isPro: boolean;
  metaAddress: string;
  sig: string;
  earned: string;
  address: string;
  city: string;
  state: string
  SerivceSkillPreference: string;
}

// TODO: Make it better......

const UserSchema = new mongoose.Schema<IUser>(
  {
    username: {
      type: String,
      min: 4,
      max: 24,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    metaAddress: {
      type: String,
    },
    sig: {
      type: String,
    },
    earned: {
      type: String,
      default: "0",
    },
    role: {
      type: String,
      default: "USER",
      enum: ["USER", "LANCER", "CAPTAIN"],
    },
    isPro: {
      type: Boolean,
      default: false,
    },
    address: {
      type: String
    },
    city: {
      type: String
    },
    state: {
      type: String
    },
    SerivceSkillPreference: {
      type: String
    }
  },
  { timestamps: true }
);

let UserModel: mongoose.Model<IUser>;

try {
  // Try to retrieve an existing model
  UserModel = mongoose.model<IUser>("User");
} catch (e) {
  // If the model doesn't exist, define it
  UserModel = mongoose.model<IUser>("User", UserSchema);
}

export const User = UserModel;
