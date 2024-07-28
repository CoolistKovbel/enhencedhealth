"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import dbConnect from "./db";
import { ethers } from "ethers";
import { User } from "../models/User";
import { redirect } from "next/navigation";
import { compare, hash } from "bcryptjs";
import { sendMail } from "./mail";
import { Job } from "../models/jobs";
import { revalidatePath } from "next/cache";
import { Message } from "../models/Message";
import { mintNFT } from "./web3";
import { WaitList } from "../models/WaitList";
import { writeFile } from "fs/promises";

const sendMessage = `Hi, welcome to hell`;

const hadleImageUpload = async (image: any) => {
  const fileBuffer = await (image as File).arrayBuffer();
  const buffer = Buffer.from(fileBuffer);

  const path = `${process.cwd()}/public/userImage/${
    crypto.randomUUID() + image.name
  }`;

  await writeFile(path, buffer);

  return path.split(`${process.cwd()}/public`)[1];
};

// token and session actions
export const getSession = async () => {
  const cookie:any = cookies() 

  const session = await getIronSession<SessionData>(cookie, sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
};

export const MintUserHealthPack = async (amount: any) => {
  try {
    console.log("result of the amount.........", amount);

    const gg = await mintNFT(amount);

    return gg;
  } catch (error) {
    console.log("error");
    console.log(error);
  }
};

// Form actions
export const login = async (
  prevState: undefined | string,
  formData: FormData
) => {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const sign = formData.get("sig") as string;

  try {
    await dbConnect();
    const session = await getSession();

    // Check user in db
    const existingUser = await User.findOne({ email });

    const existingBySD = await User.findOne({ sig: sign });

    if (existingBySD) {
      const verify = ethers.utils.verifyMessage(sendMessage, sign);

      console.log(verify, "in the server actions");
    }

    if (!existingUser) {
      return "wrong credentialas";
    }

    // Check is password matches
    const passValid = await compare(password, existingUser?.password as string);

    if (!passValid) {
      return "wrong credentialas";
    }

    // Creating session
    session.userId = existingUser._id.toString();
    session.username = existingUser.username;
    session.image = existingUser.image;
    session.email = existingUser.email;
    session.isPro = existingUser.isPro;
    session.role = existingUser.role;
    session.isLoggedIn = true;
    session.metaAccount = existingUser.metaAddress;

    await session.save();

    return "noice";
  } catch (error) {
    console.log(error);
    return "error: cant login";
  }
};

// handle  user logout
export const logout = async () => {
  const session = await getSession();
  session.destroy();
  redirect("/");
};

export async function ContactEmail(
  prevState: string | object | undefined,
  formData: FormData
) {
  const data = Object.fromEntries(formData.entries());
  const content = data.content as string;

  const payload = {
    email: data.email,
    clientName: data.clientName,
    clientNumber: data.clientNumber,
  };

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.email as string,
      subject: (data.subject as string) || "URGENT NOTICE",
      content: content.concat(
        ` Message situated from ${JSON.stringify(payload)} `
      ),
    });

    return {
      message: `${data.email} your message has been sent, please allow us a few hours to be able to contact you back be ssure to check your spam and if you have any concern give us a call`,
    };
  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}

// Create a job request
export async function MakeARequest(formData: FormData) {
  const { email, description, minpay, title } = Object.fromEntries(formData);

  const user = await getSession();

  try {
    console.log("making a request");

    await dbConnect();

    const yon = new Job({
      title: title as string,
      description: description as string,
      author: user.userId,
      reward: minpay,
    });

    await yon.save();

    return "success";
  } catch (error) {
    console.log(error);
    return "fail";
  }
}

// grab all market request
export async function SingleJobRequest(jobID: string) {
  try {
    console.log("grabbing single job");

    await dbConnect();

    const singleJob = await Job.find({ _id: jobID }).lean();

    console.log(singleJob);

    return singleJob;
  } catch (error) {
    console.log("error");
  }
}

// handle job acception
export const AcceptSingleJob = async (jobId: string) => {
  try {
    console.log("accept single job", jobId);
    const user = await getSession();
    await dbConnect();

    const gg = await Job.find({ _id: jobId });

    gg[0].accepted = true;
    gg[0].completed = false;
    gg[0].worker = user.userId as string;

    const updated = await gg[0].save();

    revalidatePath(`/hub/job/${jobId}`);

    console.log(updated);
  } catch (error) {
    console.log("error");
    return error;
  }
};

// handle message between user and worker
export const handleUserMessage = async (formData: FormData) => {
  const user = await getSession();

  const { title, message, sessoinUrl, address } = Object.fromEntries(formData);

  try {
    console.log("handle user message");

    console.log(address, "account");
    console.log(message, "message");

    await dbConnect();

    const userMessage = new Message({
      message: message as string,
      title: title as string,
      to: address as string,
      from: user.userId as string,
    });

    await userMessage.save();

    revalidatePath(sessoinUrl as string);

    console.log(userMessage);
  } catch (error) {
    console.log("error");
  }
};

// handle user register
export const Registrar = async (state: any, formData: FormData) => {
  const data = Object.fromEntries(formData);

  try {
    await dbConnect();

    console.log("Trying to register a user", data);

    const userExists = await User.find({
      metaAddress: data.metaAddress as string,
    });

    if (userExists.length > 0) {
      return {
        status: "notnoice",
        payload: userExists,
      };
    }

    const hashPass = await hash(data.password as string, 10);

    const createNewUser = new User({
      username: data.username,
      email: data.email,
      password: hashPass,
      metaAddress: data.metaAddress,
      sig: data.sig,
    });

    await createNewUser.save();

    return {
      status: "noice",
      payload: "nothing",
    };
  } catch (error) {
    console.log("Errror creating a user", error);

    return {
      status: "notnoice",
      payload: error,
    };
  }
};

// Handle user new job request
export const handleNewJobRequest = async (userInput: FormData) => {
  try {
    console.log("handling new jobn");

    await dbConnect();
  } catch (error) {
    console.log(error);
  }
};

export const handleUserUpdate = async (userInput: FormData) => {
  const user = await getSession();

  const { username, email, password, metaAddress, imageFile } =
    Object.fromEntries(userInput);

  try {
    console.log("handling new jobn");
    await dbConnect();

    const serverUser = await User.findById(user.userId).lean();
    const userImage = await hadleImageUpload(imageFile as File);

    // Take a loook at combination

    const passwordz = await hash(password as string, 10);

    const payloadSession: any = {
      username: username || user.username,
      email: email || user.email,
      metaAccount: metaAddress || user.metaAccount,
      image: userImage || user?.image,
    };

    Object.assign(user, payloadSession);

    const payloadServer: any = {
      username: username || user.username,
      email: email || user.email,
      password: passwordz || serverUser?.password,
      metaAddress: metaAddress || serverUser?.metaAddress,
      image: userImage || serverUser?.image,
    };

    const gg = await User.findByIdAndUpdate(user.userId, payloadServer);

    await gg?.save();
    await user.save();

    return {
      status: "success",
      payload: gg,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "error",
      payload: error,
    };
  }
};

export const handleUserAddressUpdate = async (userInput: FormData) => {
  const data = Object.fromEntries(userInput);
  const user = await getSession();

  try {
    console.log("updating user address");

    await dbConnect();

    const update = await User.findByIdAndUpdate(
      user.userId,
      {
        address: data.address,
        city: data.city,
        state: data.state,
      },
      { new: true }
    )
      .lean()
      .select("-password");

    return {
      status: "success",
      payload: update,
    };
  } catch (error) {
    console.log("error updaitng the user address");
    return {
      status: "error",
      payload: error,
    };
  }
};

export const getUserInfo = async (userId: string) => {
  console.log("geting usering infor from server");
  try {
    await dbConnect();

    const user = await User.findById(userId).lean().select("-password");

    return {
      status: "success",
      payload: user,
    };
  } catch (error) {
    console.log("error seeming issuea arriseing");
    return {
      status: "error",
      payload: error,
    };
  }
};

// handle user news letter sign up
export const handleNewsLetterSignUp = async (email: any) => {
  try {
    console.log("handleNews letts uper");

    await dbConnect();

    const newWaiting = new WaitList({
      email: email,
    });

    await newWaiting.save();

    return {
      status: "success",
      payload: newWaiting,
    };
  } catch (error) {
    console.log("Error habnd news leter", error);
    return {
      status: "Error",
      payload: error,
    };
  }
};
