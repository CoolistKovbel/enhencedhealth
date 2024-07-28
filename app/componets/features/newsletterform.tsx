"use client";

import { handleNewsLetterSignUp } from "@/app/lib/action";
import { toast } from "react-toastify";

const NewsLetterForm = () => {
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    try {
      console.log("what is life");
      const form = e.target as HTMLFormElement;

      const gg = await handleNewsLetterSignUp(e.target.updateEmail.value);

      if (gg.status === "success") {
        toast("You are on the list, check you mail every here and there..x");
      }

      if(gg.status === "Error"){
        console.log("error in client")
      }

      form.reset()

    } catch (error:any) {
      console.log("Error, handle no working", error);
      toast("error handling signup, double check your email")
    }
  };

  return (
    <div
      className="p-2 bg-[#333] w-full h-fit md:h-[200px] items-center flex-col md:flex-row mx-auto flex justify-around rounded-lg mt-10"
      id="contact"
    >
      <form
        className="flex gap-4 w-full md:w-[60%] justify-around bg-[#222] p-8 rounded-lg"
        onSubmit={handleSubmit}
      >

        <header className="flex flex-col gap-4 w-[100%] ">
          <h2 className="text-2xl font-bold mb-2 uppercase text-center">
            Get updates
          </h2>

          <label htmlFor="updateEmail" className="w-full">
            <input
              type="email"
              id="updateEmail"
              placeholder="enter email"
              name="updateEmail"
              className="bg-[#333] p-3 bg-[#222] w-[95%] rounded-lg"
            />
          </label>
        </header>

        <button className="bg-[#333] p-2 hover:bg-[#111] rounded-lg w-[20%]">
          update Email
        </button>

      </form>
    </div>
  );
};

export default NewsLetterForm;
