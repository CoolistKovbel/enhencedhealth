import MintComp from "@/app/componets/mintComp";
import Image from "next/image";
import React from "react";

const Page = async () => {
  return (
    <main className="w-[100%] min-h-screen">
      <header className="p-2 w-full flex item-center flex-col gap-4 ">

        <div className="w-[100%] flex flex-col md:flex-row justify-between p-10">
          <h2 className="text-3xl ">Featured Mint Item</h2>

          <p className="text-sm text-gray-500 ]">
            Get yourself our latest item that you can use by owning a blockchain
            wallet that allows you to be able to own a token that will allow you
            to get this special item for a lower price. You are able to trade
            and do what you want with where ever else accepts this token.
          </p>
        </div>

        <div className="w-[300px] h-[300px] relative mx-auto">
          <Image src="/69.png" alt="featured nft" fill  />
        </div>

      </header>

      <div className="p-10 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">E'hencedHealth</h2>
        <p className="text-sm text-gray-500">
          There are over 222 unique verations of there health symbol this
          basically going to allow you to get discounts of their products that
          they may have located on their page. You can either mint here or go
          ahead and mint of their website. Looking to trade you can find them on
          sites like looksrare or nft.yokasiwap and opensea as well as many
          others. By using it here you will be able to get yourself a health
          service for a discount.
        </p>
      </div>

      <MintComp />
    </main>
  );
};

export default Page;
