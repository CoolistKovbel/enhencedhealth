"use client";

import { handleUserAddressUpdate } from "@/app/lib/action";

const ProfileAddress = () => {
  const updateUserAddress = async (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    try {
      console.log("updating the user address");
      const form = e.target as HTMLFormElement;

      const gg = await handleUserAddressUpdate(formData);

      console.log(gg);

      form.reset();
    } catch (error) {
      console.log("error updating the user address", error);
    }
  };

  return (
    <div className="flex flex-col gap-4 p-4 bg-[#444]">
      <h2 className="text-2xl font-bold">Update address:</h2>

      <form
        className="flex items-center justify-between flex-col gap-4"
        onSubmit={updateUserAddress}
      >
        <label
          htmlFor="address"
          className="w-full flex items-center justify-between "
        >
          <span className="text-xl font-bold">Address:</span>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="enter address"
            className="bg-[#222] p-2 text-white"
          />
        </label>

        <label
          htmlFor="city"
          className="w-full flex items-center justify-between "
        >
          <span className="text-xl font-bold">City: </span>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="enter address"
            className="bg-[#222] p-2 text-white"
          />
        </label>

        <label
          htmlFor="state"
          className="w-full flex items-center justify-between "
        >
          <span className="text-xl font-bold">State: </span>
          <input
            type="text"
            name="state"
            id="state"
            placeholder="enter address"
            className="bg-[#222] p-2 text-white"
          />
        </label>

        <button className="bg-[#222] p-2 rounded-lg">update</button>
      </form>
    </div>
  );
};

export default ProfileAddress;
