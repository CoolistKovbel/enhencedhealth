import Image from "next/image";
import Link from "next/link";
import ServiceFeatures from "./componets/features/serviceFeatures";
import NewsLetterForm from "./componets/features/newsletterform";
import QuoteContact from "./componets/features/contact-quote";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">
      
      <div className="w-full h-[700px] flex items-center gap-4 flex-col justify-around md:flex-row bg-[#666] relative">
        
        <div className="flex flex-col gap-2 justify-around items-center bg-[#444] md:w-[60%] p-4 rounded-lg h-fit md:h-[350px] z-50">
         
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
            className="bg-[#111] uppercase p-2 font-bold rounded-lg hover:bg-[#333] drop-shadow-lg text-center"
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

      <QuoteContact />

      <NewsLetterForm />

    </main>
  );
}
