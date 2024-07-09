"use client";

import { ContactEmail } from "@/app/lib/action";
import Link from "next/link";
import { toast } from "react-toastify";

const QuoteContact = () => {

  const handleQuote = async (e: any) => {
    e.preventDefault();
    console.log("handling quote");

    try {
      const formData = new FormData(e.currentTarget);
      const form = e.target as HTMLFormElement;

      const emailRes = await ContactEmail(undefined, formData);

      toast(emailRes.message);

      form.reset();
    } catch (error) {
      console.log("error handling qtuiote", error);
    }
  };

  return (
    <div className="bg-[#333] p-4">
      <header className="mb-4 p-4">

        <div className="flex item-center justify-between p-2">
          <h2 className="text-5xl font-bold mb-2">Contact US</h2>
          <p className="text-xl"> Call Today: <span className="bg-[#222] p-2">(706) 901-7138</span></p>
        </div>

        <p className="text-gray-200 text-md">
          Need a quote or would like to know what else we can do, how much and
          how long it will take to get your website completed for you, contact
          us below and we will get it in contact with you as soon as possible.
        </p>
      </header>

      <form onSubmit={handleQuote}>
        <div className=" p-4 rounded-lg drop-shadow-lg bg-[#444] ">
          <label htmlFor="email">
            <span className="text-3xl font-bold">Email:</span>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 bg-[#222] w-full mb-4  mt-4 rounded-lg "
            />
          </label>

          <label htmlFor="clientName">
            <span className="text-3xl font-bold">Name:</span>
            <input
              type="text"
              id="clientName"
              name="clientName"
              className="p-2 bg-[#222] w-full mb-4  mt-4 rounded-lg "
            />
          </label>

          <label htmlFor="clientNumber">
            <span className="text-3xl font-bold">Phone:</span>
            <input
              type="phone"
              id="clientNumber"
              name="clientNumber"
              className="p-2 bg-[#222] w-full mb-4  mt-4 rounded-lg "
            />
          </label>

          <label htmlFor="content">
            <span className="text-3xl font-bold">Message:</span>
            <textarea
              id="content"
              name="content"
              className="w-full h-[400px] overflow-auto bg-[#222] p-2 resize-none mt-4 rounded-lg"
            />
          </label>
        </div>

        <button className="bg-red-500 p-4 rounded-lg font-bold hover:bg-red-800 mt-4 w-full uppercase text-2xl">
          contact
        </button>
      </form>

      <div className="flex items-center justify-around mt-10 mb-10 bg-[#111] p-4 rounded-lg drop-shadow-lg">
        <Link
          href="http://twitter.com"
          target="_blank"
          className="hover:bg-[#333] font-bold  bg-[#222] p-3 rounded-lg"
        >
          twitter
        </Link>
        <Link
          href="http://twitter.com"
          target="_blank"
          className="hover:bg-[#333] font-bold  bg-[#212] p-3 rounded-lg"
        >
          linkin
        </Link>
        <Link
          href="http://twitter.com"
          target="_blank"
          className="hover:bg-[#333] font-bold  bg-[#210] p-3 rounded-lg"
        >
          slack
        </Link>
      </div>
    </div>
  );
};

export default QuoteContact;
