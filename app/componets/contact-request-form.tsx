"use client";

import React, { useEffect, useState } from "react";
import { MakeARequest } from "../lib/action";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface ContactRequestFormProp {
  user: any;
}

const ContactRequestForm = ({user}: ContactRequestFormProp) => {
  const [userEmail, setUserEmail] = useState("")
  const router = useRouter()

  const handleRequest = async (e: any) => {
    e.preventDefault();

    try {
      console.log("hjandling request");
      
      const form = e.target as HTMLFormElement;
      const formData = new FormData(e.currentTarget);

      const minPae = formData.get("minpay")

      console.log(minPae, ":de min pay")

      const gg = await MakeARequest(formData);

      if(gg === "success" ){
        toast("Noice, hopefully someone will check out your request soon")
        router.push("/hub")
      }

      // Reest form after
      form.reset()
    } catch (error) {
      console.log("error");
    } 
  };

  return (
    <section className="p-10">

      <h2 className="text-2xl text-center">Thanks for choosing us we are here to help</h2>

      <form className="p-5 flex flex-col gap-4" onSubmit={handleRequest}>
        <label className="bg-[#222] p-3 flex  text-center justify-between">
          <span>Email:</span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter a email"
            value={user.email}
            onChange={(e) => setUserEmail(e.target.value)}
            className="p-2 bg-[#111]"
          />
        </label>

        <label className="bg-[#222] p-3 flex  text-center justify-between">
          <span>Title:</span>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="enter a title"
            className="p-2 bg-[#111]"
          />
        </label>

        <label className="bg-[#222] p-3">
          <span className="mb-2">Description:</span>
          <textarea
            className="w-full h-[200px] resize-none overflow-auto bg-[#111] text-white p-2"
            name="description"
            id="description"
          />
        </label>

        <label className="bg-[#222] p-3 flex  text-center justify-between">
          <span className="mb-2">minum payment:</span>
          <input
            type="number"
            name="minpay"
            id="minPay"
            placeholder="enter an amount"
            className="p-2 bg-[#111]"
          />
        </label>

        <button className="bg-[#222] p-2 hover:bg-[#333]">submit</button>
      </form>

    </section>
  );
};

export default ContactRequestForm;
