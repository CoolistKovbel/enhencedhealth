import { getSession } from "@/app/lib/action";
import { getCurrenbyUserId } from "@/app/lib/getUserLib";
import { Job } from "@/app/models/jobs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const user = await getSession();

  const isDev = user.role === "LANCER";

  const serverUser = await getCurrenbyUserId(user.userId as string);

  const jobRequests = await Job.find({}).lean();

  const userJob = jobRequests.filter((item:any) => item.worker === user.userId);


  return (
    <main className="min-h-screen flex-col items-center gap-4 p-5">

      <header className="p-10 bg-[#222] flex items-center justify-between">
        <h2 className="text-2xl">PRofile</h2>

        <Link href="/profile/update" className="bg-gray-400 p-2 rounded-lg">
          Update profile
        </Link>
      </header>

      <section>
        <header className="flex items-center justify-around p-10">
          <div className="w-[300px] h-[300px] relative">
            <Image src={`/${user.image}`} alt="eh" fill />
          </div>
          <div className="flex flex-col">
            <h2 className="text-2xl">Role: {serverUser?.role}</h2>
            <h2 className="text-2xl">
              Status: {serverUser?.isPro ? "cool" : "sad"}
            </h2>
          </div>
        </header>

        <div className="bg-[#333] p-4 flex flex-col gap-3">
          <p className="bg-[#111] p-2">
            username: <span>{serverUser?.username}</span>
          </p>
          <p className="bg-[#111] p-2">
            email: <span>{serverUser?.email}</span>
          </p>
          <p className="bg-[#111] p-2">
            metaAddress: <span>{serverUser?.metaAddress}</span>
          </p>
        </div>

        <div className="p-4">
          <h2 className="text-2xl font-bold">Recent Jobs:</h2>

          <div className="flex flex-col gap-4">
            {userJob.map((item) => (
              <div
                key={crypto.randomUUID()}
                className="bg-[#222] p-4 rounded-lg  "
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
          
        </div>

      </section>

    </main>
  );
};

export default Page;
