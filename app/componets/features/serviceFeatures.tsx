import Image from "next/image";
import Link from "next/link";

const ServiceFeatures = () => {

  const data = [
    {
      title: "Trying to install something",
      description:
        "Need an extra hand to install a certain product or equiment and dont know how to call or ask for help, we got you covered. We have a exeperts ready to assist.",
      image: "/tvMounting.webp",
    },
    {
      title: "Boiler or appliences acting weird? Makes sounds.",
      description:
        "Need someone to have a look at the appliences that you use every day, we will have a look and find out the best possible solution for you to get your appliance working like brand new.",
      image: "/boilderfeature.jpg",
    },
    {
      title: " Need a fix-it-upper",
      description:
        "Need someone to patch up holes or handle some outlets, work on some interior design aspect of your living space, we will be able to discuss a rough estimate and get our services running as soon as possible to get your problems fixed",
      image: "/fixeruper.jpeg",
    },
    {
      title: " What ever the problem we will help to find a solution ",
      description:
        " We are here to help you with any help you may need inside your home. We are here to be able to make your life easier.",
      link: "/quote",
    },
  ];

  return (
    <section className="flex flex-col gap-4" id="features">

      {data.map((item: any, i) => (
        <article
          key={crypto.randomUUID()}
          className={` p-5 bg-[#222] drop-shadow-lg rounded-lg`}
        >

          {!item.image && (
            <header className="w-full bg-[#111] p-10 flex text-center justify-between h-[300px] flex-col gap-4 hover:drop-shadow-lg rounded">
              <div>
                <h2 className="text-5xl font-bold capitalize mb-3">{item.title}</h2>
                <p className="text-xl">{item.description}</p>
              </div>

              <Link
                href={`${item.link}`}
                className="bg-[#333] mt-2 capitalize rounded-lg hover:bg-[#444] p-4 font-bold w-full md:w-[50%] text-center mx-auto "
              >
                get a quote
              </Link>

            </header>
          )}


          {item.image && (
            <div
              className={`md:w-[97%] mx-auto drop-shadow-lg rounded-lg bg-[#111] p-10 flex gap-10 flex-col md:flex-row   ${
                i % 2 !== 0 ? " md:flex-row-reverse flex-row-reverse" : "flex-row"
              }`}
            >

              <header className="flex flex-col gap-4 mb-4 md:mb-0 w-full justify-center w-[30%]">
                <h2 className="text-3xl font-bold capitalize">{item.title}</h2>

                <p className="text-md">{item.description}</p>
              </header>

              <div className="w-[500px] h-[300px] relative mx-auto">
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
  );
};

export default ServiceFeatures;
