"use client";

import { MintUserHealthPack } from "../lib/action";

const MintComp = () => {

  const mintFunction = async (e: any) => {
    e.preventDefault();

    try {
      console.log("mintging", e.target.amount.value);

      const gg = await MintUserHealthPack(e.target.amount.value);

      console.log(gg);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <form
      className="flex flex-col gap-2 text-center justify-around bg-[#444] p-2 drop-shadow-lg rounded-lg"
      onSubmit={mintFunction}
    >

      <label htmlFor="amount" className="flex items-center justify-around mb-4 flex-col gap-2">
        <span className="text-2xl font-bold">Mint Amount </span>
        <input
          type="amount"
          placeholder="enter amount of tokens"
          className="p-2  bg-[#222] text-white w-[80%]"
          id="amount"
          name="amount"
        />
      </label>

      <button className="text-[15px] font-bold p-2 bg-[#333] w-full rounded hover:bg-[#000]">
        submit
      </button>
    </form>
  );
};

export default MintComp;
