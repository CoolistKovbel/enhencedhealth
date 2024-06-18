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
      className="flex flex-col gap-4 text-center justify-around"
      onSubmit={mintFunction}
    >
      <label htmlFor="amount" className="flex items-center justify-around mb-4">
        <span className="text-2xl font-bold">Mint Amount </span>
        <input
          type="amount"
          placeholder="enter amount of tokens"
          className="p-2  bg-[#222] text-white"
          id="amount"
          name="amount"
        />
      </label>

      <button className="text-2xl font-bold p-4 bg-[#333] w-full">
        submit
      </button>
    </form>
  );
};

export default MintComp;
