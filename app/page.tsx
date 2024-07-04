import Image from "next/image";
import Link from "next/link";
import ServiceFeatures from "./componets/features/serviceFeatures";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      
      <div className="w-full h-[700px] flex items-center gap-4 flex-col justify-around md:flex-row bg-[#666] relative">
        <div className="flex flex-col gap-2 justify-between items-center bg-[#444] md:w-[50%] p-4 rounded-lg h-fit md:h-[300px] z-50">
          <header className="flex items-center justify-center flex-col bg-[#000] p-3 rounded-lg drop-shadow-lg">
            <header className="w-full flex items-center justify-center flex-col drop-shadow-lg rounded-lg">
              <h1 className="text-3xl font-bold  mb-1 capitalize text-center">
                Need a service to get you through the hardest problems
              </h1>

              <h3 className="text-xl font-bold mb-2  mt-2  text-center p-2 capitalize inline-block underline rounded-lg">
                We Got you covered
              </h3>
            </header>

            <p className="text-md text-gray-500 text-center">
              Contact us for a quote today and we will be able to go over and
              provide service for your probelm.
            </p>
          </header>

          <Link
            href="#contact"
            className="bg-[#111] p-2 font-bold rounded-lg hover:bg-[#444] text-center"
          >
            Contact for a quote
          </Link>
        </div>

        <Image
          src="/kms.JPG"
          alt="what is life"
          className="absolute top-0 right-0 left-0 bottom-0 z-40 blur-sm drop-shadow-lg rounded"
          fill
        />
      </div>

      <ServiceFeatures />

      <div className="bg-[#333] p-4">
        <header className="mb-4 p-4">
          <h2 className="text-5xl font-bold mb-2">Contact US</h2>
          <p className="text-gray-200 text-md">
            Need a quote or would like to know what else we can do, how much and
            how long it will take to get your website completed for you, contact
            us below and we will get it in contact with you as soon as possible.
          </p>
        </header>

        <form>
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

            <label htmlFor="messaage">
              <span className="text-3xl font-bold">Message:</span>
              <textarea
                id="message"
                name="message"
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


      <div
        className="p-2 bg-[#333] w-full h-fit md:h-[200px] items-center flex-col md:flex-row mx-auto flex justify-around rounded-lg mt-10"
        id="contact"
      >
        <form className="flex gap-4 w-full md:w-[60%] justify-around bg-[#444] p-8 rounded-lg">
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
                className="bg-[#222] p-3 bg-[#222] w-[95%] rounded-lg"
              />
            </label>
          </header>

          <button className="bg-[#222] p-2 hover:bg-[#111] rounded-lg w-[20%]">
            update Email
          </button>
        </form>
      </div>

    </main>
  );
}
