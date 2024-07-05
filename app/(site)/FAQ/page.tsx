import React from "react";

const Page = () => {
  const FAW = [
    {
      question: "What is EJUWONDER?",
      answer:
        "A service to help you and others get through their problems a quick and simple way. So you can get back to spending time with yourself or loved ones or even getting back to work.",
    },
    {
      question: "How does this work?",
      answer:
        "Create an account. Make sure you have metamask because you will need to sign yourself in. You will be able to either create an account with username or with blockchain account. Where you will later be able to make requests or even accept requests and be paid in our token. You can also mint our nft to join our defi program and earn more rewards.",
    },
  ];

  return (
    <main className="min-h-screen w-full">
      <header className="w-full p-10 h-[200px]">
        <h2 className="text-4xl font-bold mb-4">F.A.Q</h2>
        <p className="text-xl">
          If there was nothing that help you with your question be sure to
          contact us and we will get you as soon as possible.
        </p>
      </header>

      <section className="p-5 bg-[#555] w-full h-[800px] overflow-auto flex flex-col gap-4 ">
        
            {
                FAW.map((item:any) => (
                    <article key={crypto.randomUUID()} className="w-full p-4 bg-[#444] text-white drop-shadow-lg rounded-lg">
                        <h2 className="text-2xl font-bold">{item.question}</h2>
                        <p className="text-sm text-gray-500">{item.answer}</p>
                    </article>
                ))
            }


      </section>
    </main>
  );
};

export default Page;
