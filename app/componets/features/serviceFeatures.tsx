import Image from "next/image";
import Link from "next/link";

const ServiceFeatures = () => {
  const data = [
    {
      title: "Trying to install a tv mount",
      description:
        "Having trouble putting up a tv and dont want to put it on its default position. Let us provide you with the best quaility service we can offer.",
      image: "/tvMounting.webp",
    },
    {
      title: "Boiler acting weird? Makes sounds.",
      description:
        "We can have a look at it for you and we will be able to get it done same day",
      image: "/boilderfeature.jpg",
    },
    {
      title: " Need a fix-it-upper",
      description:
        "We can disccuse certain ways that you may want to install some spacing within your home. ",
      image: "/boilderfeature.jpg",
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
            <header className="w-full bg-[#111] p-10 flex items-center flex-col gap-4">
              <h2 className="text-3xl font-bold capitalize">{item.title}</h2>
              <p className="text-md">{item.description}</p>
              <Link
                href={`${item.link}`}
                className="bg-[#333] capitalize rounded-lg hover:bg-[#444] p-4 font-bold w-[20%] text-center  "
              >
                get a quote
              </Link>
            </header>
          )}

          {item.image && (
            <div
              className={`md:w-[100%] bg-[#111] p-10 flex  gap-10 justify-between  ${
                i % 2 !== 0 ? "flex-row-reverse" : "flex-row"
              }`}
            >
              <header className="flex flex-col gap-4 mb-4 md:mb-0 w-full justify-center">
                <h2 className="text-3xl font-bold capitalize">{item.title}</h2>

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

          {/* {item?.link && (
            
          )} */}
        </article>
      ))}
    </section>
  );
};

export default ServiceFeatures;
