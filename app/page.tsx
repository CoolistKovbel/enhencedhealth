import Image from "next/image";
import Link from "next/link";

export default function Home() {

  const data = [
    {
      title: "Specialing Mounting Tvs",
      description:
        "Having trouble putting up a tv and dont want to put it on its default position. Let us provide you with the best quaility service we can offer.",
      image: "/tvMounting.webp",
    },
    {
      title: " Tired of weird hot and cold heating presure",
      description:
        "We can have a look at it for you and we will be able to get it done same day",
      image: "/boilderfeature.jpg",
    },
    {
      title: " What ever the problem we will help to find a solution ",
      description:
        " We are here to help you with any help you may need inside your home. We are here to be able to make your life easier.",
    },
  ];

  return (
    <main className="flex min-h-screen flex-col items-center gap-4 p-5">

      <div className="w-full flex items-center gap-4 flex-col justify-around md:flex-row ">

        <div className="flex flex-col gap-2 justify-between items-start bg-[#222] md:w-[50%] p-4 rounded-lg h-[300px]">
          <header className="w-full">
            <h1 className="text-3xl font-bold  mb-4 capitalize">
              Need a service to get you through the hardest problems
            </h1>

            <p className="text-md text-gray-500">
              Contact us for a quote today and we will be able to go over and
              provide service for your probelm.
            </p>
          </header>

          <Link
            href="#contact"
            className="bg-[#111] p-2 font-bold rounded-lg hover:bg-[#444]"
          >
            Contact for a quote
          </Link>
        </div>

        <div className="w-[300px] h-[300px] relative">
          <Image
            src="/hero-img.jpeg"
            alt="image bg"
            fill
            className="rounded-full drop-shadow-lg"
          />
        </div>

      </div>

      <section className="flex flex-col gap-4" id="features">
        {data.map((item, i) => (
          <article
            key={crypto.randomUUID()}
            className={`flex items-center justify-between flex-col md:flex-row  gap-4 p-5 bg-[#222] drop-shadow-lg rounded-lg ${
              i % 2 !== 0 ? "bg-[#999] flex-row-reverse" : "flex-row"
            }`}
          >

            
            {!item.image && (
              <header className="md:w-[80%] bg-[#111] p-10">
                <h2 className="text-3xl font-bold capitalize">{item.title}</h2>
                <p className="text-md">{item.description}</p>
              </header>
            )}

            {item.image && (
              <div className="md:w-[100%] bg-[#111] p-10 flex md:flex-row justify-between justify-center flex-col">

                <header className="flex flex-col gap-4 mb-4 md:mb-0" >
                  <h2 className="text-3xl font-bold capitalize">
                    {item.title}
                  </h2>
                  <p className="text-md">{item.description}</p>
                </header>

                <div className="w-[300px] h-[300px] relative mx-auto">
                  <Image
                    src={item.image}
                    alt="feature of createing a profile"
                    fill
                  />
                </div>


              </div>
            )}
          </article>
        ))}
      </section>

      <div className="bg-[#333] p-4">
        <header className="mb-4">
          <h2 className="text-3xl font-bold">Contact US</h2>
          <p className="text-gray-200">
            Need a quote or would like to know how much and how long it will
            take to get your website completed for you, contact us below and we
            will get it in contact with you as soon as possible.
          </p>
        </header>

        <form className="p-4">
          <label htmlFor="email">
            <span className="text-2xl font-bold">Email:</span>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 bg-[#222] w-full mb-4  mt-4"
            />
          </label>
          <label htmlFor="messaage">
            <span className="text-2xl font-bold">Message:</span>
            <textarea
              id="message"
              name="message"
              className="w-full h-[400px] overflow-auto bg-[#222] p-2 resize-none mt-4"
            />
          </label>
          <button className="bg-red-500 p-2 rounded-lg font-bold hover:bg-red-800 mt-4">
            contact
          </button>
        </form>

        <div className="flex items-center justify-around mt-10">
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#222] p-3 rounded-lg"
          >
            twitter
          </Link>
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#212] p-3 rounded-lg"
          >
            linkin
          </Link>
          <Link
            href="http://twitter.com"
            target="_blank"
            className="bg-[#210] p-3 rounded-lg"
          >
            slack
          </Link>
        </div>
      </div>

      <div
        className="p-2 bg-[#333] w-full h-[150px] items-center flex-col md:flex-row mx-auto flex justify-around rounded-lg mt-10"
        id="contact"
      >
        
        <form className="flex items-center gap-4 w-[60%] justify-around">
          <header className="flex flex-col gap-4 w-[100%] ">
            <h2 className="text-2xl font-bold mb-2 uppercase">Get updates</h2>
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

          <button className="bg-[#222] p-2 hover:bg-[#111] rounded-lg w-[40%]">
            update Email
          </button>
        </form>

      </div>
    </main>
  );
}
