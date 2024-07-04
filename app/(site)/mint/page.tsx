import MintComp from "@/app/componets/mintComp";
import Image from "next/image";
import React from "react";

const Page = async () => {
  return (
    <main className="w-[100%] min-h-screen">

      <header className="p-10 flex item-center w-[60%] mx-auto gap-4">

        <div className="w-[100%] flex flex-col items-center justify-center p-5">

          <h2 className="text-5xl font-bold mb-2 ">Featured Mint Item</h2>

          <p className="text-sm text-gray-500 ]">
            Get yourself our latest item that you can use by owning a blockchain
            wallet that allows you to be able to own a token that will allow you
            to get this special item for a lower price. You are able to trade
            and do what you want with where ever else accepts this token.
          </p>
        </div>

        <div className="w-[300px] h-[300px] relative mx-auto ">
          <Image src="/69.png" alt="featured nft" fill   />
        </div>

      </header>


      <div className="flex items-center justify-between w-[80%] mx-auto">

        <div className="p-10 flex flex-col gap-4 w-[60%]">
          <h2 className="text-2xl font-bold">EnhencedHealth</h2>
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

      </div>

    </main>
  );
};

export default Page;
