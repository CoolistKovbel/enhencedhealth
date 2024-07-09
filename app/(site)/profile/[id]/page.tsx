import { getUserInfo } from "@/app/lib/action";
import { Job } from "@/app/models/jobs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async (props: any) => {
  const userId = props.params.id;
  const userFromServer: any = await getUserInfo(userId);
  const jobRequests = await Job.find({}).lean();
  const userJob = jobRequests.filter((item: any) => item.author.toString() === userId);


  console.log(userFromServer, "de user from server")

  return (
    <main className="w-full min-h-screen bg-[#222]">

      <header className="w-full p-4 ">
        <div className="w-[80%] mx-auto flex items-center justify-between flex-col md:flex-row">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-3">
              {userFromServer.payload.username}
            </h2>
            <p className="bg-[#444] p-2 drop-shadow-lg rounded">
              {userFromServer.payload.metaAddress}
            </p>
          </div>

          <div className="w-[300px] h-[300px] bg-[#444] relative drop-shadow-lg">
            <Image src={`/${userFromServer.payload.image}`} alt={userFromServer.payload.username} fill />
          </div>
        </div>

      </header>

      <section className="p-10 flex items-center justify-between bg-[#444]">

        {/* jobs */}
        <div className="flex flex-col gap-4 w-[50%] h-[320px] overflow-auto">
          {userJob.map((item) => (
            <div
              key={crypto.randomUUID()}
              className="bg-[#222] p-4 rounded-lg"
            >
              <div className="">
                <h2 className="text-2xl">{item.title}</h2>
                <h2 className="text-sm">{item.description}</h2>
              </div>

              <span
                className={
                  item.accepted
                    ? "bg-green-500 p-2 inline-block"
                    : "bg-red-500 p-2 inline-block"
                }
              >
                <Link href={`/hub/job/${item._id}`}>
                  accepted: {item.accepted ? "accepted" : "no accepted"}
                </Link>
              </span>
            </div>
          ))}
        </div>

        {/* Location */}
        <div className="w-[30%]">
          <p className="text-xl">
            Address: <span>{userFromServer.payload.address}</span>
          </p>
          <p className="text-xl">
            City: <span>{userFromServer.payload.city}</span>
          </p>
          <p className="text-xl">
            State: <span>{userFromServer.payload.state}</span>
          </p>
        </div>

      </section>
      
    </main>
  );
};

export default Page;
