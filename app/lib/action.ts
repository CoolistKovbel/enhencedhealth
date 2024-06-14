"use server"
 
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { SessionData, defaultSession, sessionOptions } from "./dictionary";
import dbConnect from "./db";
import { ethers } from "ethers";
import { User } from "../models/User";
import { redirect } from "next/navigation";
import { compare, hash } from "bcryptjs";
import { sendMail } from "./mail";

const sendMessage = `Hi, welcome to hell`;

// token and session actions
export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) {
    session.isLoggedIn = defaultSession.isLoggedIn;
  }

  return session;
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
      // b -
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

  try {
    
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      name: data.name as string,
      subject: data.subject as string,
      content: data.content as string,
    });

    return {
      message: `${name} your message has been sent, if you cant wait... call`,
    };

  } catch (error) {
    console.log(error);
    return { message: "I am sorry but the request failed.... you got denied" };
  }
}


// handle user register
export const Registrar = async (
  state: string | undefined,
  formData: FormData
) => {
  try {
    const { username, email, password, metaAddress, sig } =
      Object.fromEntries(formData);

    await dbConnect();

    const UsrExist = await User.findOne({ username });

    if (UsrExist) {
      return "there is a user";
    }

    const P$P = await hash(password as string, 10);

    const newUser = new User({
      username,
      password: P$P,
      email,
      metaAddress: metaAddress as string | undefined,
      sig
    });

    await newUser.save();

    return "noice";
  } catch (error) {
    console.log(error);

    return "notnoice";
  }
};


// Handle user new job request
export const handleNewJobRequest = async (userInput:FormData) => {



  try {
    
    console.log("handling new jobn")

    await dbConnect()




  } catch (error) {
    console.log(error)
  }
}

export const handleUserUpdate = async (userInput:FormData) => {

  const {username, email, password, metaAddress} = Object.fromEntries(userInput)

  try {
    
    console.log("handling new jobn")

    await dbConnect()


    




  } catch (error) {
    console.log(error)
  }
}
