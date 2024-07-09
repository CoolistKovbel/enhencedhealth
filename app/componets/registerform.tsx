"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { Registrar } from "@/app/lib/action";
import { ethers } from "ethers";
import { toast } from "react-toastify";

export const RegisterForm = () => {
  const [user, setUser] = useState<string>("");
  const router = useRouter();

  const [state, dispatch] = useFormState(Registrar, undefined);

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const form = e.target as HTMLFormElement;
    const sendMessage = `Hi, welcome`;

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const sign = await signer.signMessage(sendMessage);

    formData.append("sig", sign);

    try {
      dispatch(formData);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      form.reset();
    }
  };

  useEffect(() => {
    if (state?.status === "noice") router.push("/login");

    if (state?.status === "notnoice")
      toast(
        "Im sorry but it seems like there is already an account being used by the current meta address please use another one.... "
      );

      const userAddress = async () => {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
    
        const userAddress = await signer.getAddress()
        setUser(userAddress)
      }
  
      userAddress()
  }, [state, router]);

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[800px] h-[full] backdrop-filter backdrop-blur-lg bg-gray-800 bg-opacity-80 text-center shadow-xl border-[12px] relative"
    >
      {/* Form title */}
      <header className="flex items-center flex-col gap-2 p-4">
        <h2 className="text-2xl md:text-6xl font-bold capitalize p-4 w-full ">
          Register
        </h2>
        <p>
          We are using a new system...please download{" "}
          <Link
            href="https://metamask.io/"
            target="_blank"
            className="underline"
          >
            metamask
          </Link>
        </p>
      </header>

      <div className="flex items-center justify-center gap-4 flex-col h-[90%] ">
        <div className="w-[80%] p-10 h-[80%] bg-[#222] flex items-center justify-center gap-4 flex-col">
          <label
            htmlFor="username"
            className="w-full flex flex-col gap-4 items-start"
          >
            <span className="font-bold bg-black text-lg text-yellow-400 p-3 uppercase">
              Username:
            </span>
            <input
              name="username"
              id="username"
              placeholder="enter username"
              className="w-full text-[14px] backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-50 rounded-lg p-6 "
            />
          </label>

          <label
            htmlFor="email"
            className="w-full flex flex-col gap-4 items-start"
          >
            <span className="font-bold bg-black text-lg text-yellow-400 p-3 uppercase">
              Email:
            </span>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full text-[14px] backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-50 rounded-lg p-6 "
            />
          </label>

          {/* Handle password or secreat or signature */}
          <label
            htmlFor="password"
            className="w-full flex flex-col gap-4 items-start"
          >
            <span className="font-bold bg-black text-lg text-yellow-400 p-3 uppercase">
              Password:
            </span>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full text-[14px] backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-50 rounded-lg p-6 "
            />
          </label>

          <label
            htmlFor="metaAddress"
            className="w-full flex flex-col gap-4 items-start"
          >
            <span className="font-bold bg-black text-lg text-yellow-400 p-3 uppercase">
              Meta Address:
            </span>
            <input
              type="text"
              name="metaAddress"
              id="metaAddress"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              className="w-full text-[14px] backdrop-filter backdrop-blur-lg bg-gray-300 bg-opacity-50 rounded-lg p-6 "
            />
          </label>
        </div>
      </div>

      {/* Form submit biutton */}
      <button className="bg-[#223] my-10 text-[#f2f3f2] tracking-widest font-bold text-2xl p-4 rounded-lg shadow-md border-[7px] uppercase ">
        register
      </button>

      {/* Form p[0]p oiut info b */}
      <div className="absolute w-[300px] h-32 backdrop-filter backdrop-blur-lg bg-[#222] bg-opacity-80 right-0 bottom-[245px] border-4 flex items-center justify-center">
        <div className="flex item-center flex-col gap-1">
          <h2 className="text-2xl capitalize">
            Already have an <span className="font-bold">account</span>?
          </h2>
          <p className="text-sm capitalize">no problem let me help you there</p>
          <Link
            href="/login"
            className="bg-[#122] p-2 text-[10px]  uppercase rounded-lg shadow-lg "
          >
            Login Here
          </Link>
        </div>
      </div>
    </form>
  );
};
