"use client"

import { handleUserUpdate } from "../lib/action";

const ContactUpdateForm = () => {


    const handleSubmit = async (e:any) =>  {
        e.preventDefault()

        try {
            console.log("hande submit")

            const formData = new FormData(e.currentTarget)
            const form = e.target as HTMLFormElement
           
            const gg =  await handleUserUpdate(formData)


            gg.status === "success" ? form.reset() : null


            console.log(gg)

        } catch (error) {
            console.log(error)
        }
    }



  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 bg-[#222]">
      <label htmlFor="username" className="bg-[#111] p-3 flex items-center justify-between">
        <span>Username: </span>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="enter new username"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label htmlFor="email" className="bg-[#111] p-3 flex items-center justify-between">
        <span>email: </span>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="enter new email"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label htmlFor="password" className="bg-[#111] p-3 flex items-center justify-between">
        <span>password: </span>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="enter new password"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label htmlFor="metaAddress" className="bg-[#111] p-3 flex items-center justify-between">
        <span>Meta Address: </span>
        <input
          type="text"
          id="metaAddress"
          name="metaAddress"
          placeholder="enter new metaAddress"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <label htmlFor="imageFile" className="bg-[#111] p-3 flex items-center justify-between">
        <span>Image: </span>
        <input
          type="file"
          id="imageFile"
          name="imageFile"
          className="p-2 bg-[#333] text-white"
        />
      </label>

      <button className="bg-[#111] block p-2 font-bold items-left hover:bg-[#444]">submit</button>
    </form>
  );
};

export default ContactUpdateForm;
