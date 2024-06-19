"use client";

import Link from "next/link";
import { useState } from "react";

interface HeaderHub {
  isLogged: any;
  serverJobs: any;
  jobsInProg: any;
}

const HeaderHub = ({ isLogged, serverJobs, jobsInProg }: HeaderHub) => {
  const [workerMarker, setWorkerMarker] = useState(false);
  const [workerMarkerProgress, setWorkerMarkerProgress] = useState(false);

  const handleOnClick = () => {
    setWorkerMarker((prev) => !prev);
  };

  const handleOnProgress = () => {
    setWorkerMarkerProgress((prev) => !prev);
  };

  

  return (
    <header className="w-full p-10 bg-[#111] flex flex-col gap-2 ">

      <h2 className="text-2xl md:text-4xl font-bold">
        Welcome to EpentricInstall Hub
      </h2>

      <p className="text-sm text-gray-500">
        Need help or a service request, request one now. We will have one of our personal be able to handle the request, just be patient.
      </p>

      <div className="flex items-center justifty-between w-full p-4 gap-4 font-bold">
        <Link href="/request" className="bg-[#444] hover:bg-[#222] p-2">
          Request now
        </Link>

        {isLogged.role === "worker" && (
          <span
            className="bg-[#222] p-2 rounded-lg hover:bg-[#333]"
            onClick={handleOnClick}
          >
            Availble work 👇🏼
          </span>
        )}

        {isLogged.role === "worker" && (
          <span
            className="bg-[#222] p-2 rounded-lg hover:bg-[#333]"
            onClick={handleOnProgress}
          >
            in progress 👇🏼
          </span>
        )}
      </div>

      {workerMarker && (
        <div>
          <h2 className="bg-[#222] p-2 mb-4 text-2xl font-bold rounded-lg capitalize">
            available work
          </h2>

          <div className="flex flex-col gap-4 w-[100%] h-[800px] overflow-auto flex-wrap">
            {serverJobs.map((item: any) => (
              <div
                key={crypto.randomUUID()}
                className="bg-[#222] w-[300px] h-[400px] flex flex-col items-center justify-between p-10 rounded-lg drop-shadow-lg"
              >
                <header className="flex flex-col items-center gap-3">
                  <h2 className="text-2xl font-bold capitalize">
                    {item.title}
                  </h2>
                  <p className="text-sm ">{item.description}</p>
                </header>

                <footer className="flex flex-col items-center gap-2 text-sm p-3 bg-[#111] rounded-lg drop-shadow-lg">
                  <p className="flex items-center justify-between">
                    Author:{" "}
                    <span className="inline-block bg-[#211]">
                      {item.author}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    reward:{" "}
                    <span className="inline-block bg-[#211]">
                      {item.reward}
                    </span>
                  </p>
                </footer>

                <Link
                  href={`/hub/job/${item._id}`}
                  className="bg-[#111] p-2 rounded-lg font-bold hover:bg-[#444]"
                >
                  more info{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {workerMarkerProgress && (
        <div>
          <h2 className="bg-[#222] p-2 mb-4 text-2xl font-bold rounded-lg capitalize">
            work in progress
          </h2>

          <div className="flex flex-col gap-4 w-[100%] h-[800px] overflow-auto flex-wrap">
            {jobsInProg.map((item: any) => (
              <div
                key={crypto.randomUUID()}
                className="bg-[#222] w-[300px] h-[400px] flex flex-col items-center justify-between p-10 rounded-lg drop-shadow-lg"
              >
                <header className="flex flex-col items-center gap-3">
                  <h2 className="text-2xl font-bold capitalize">
                    {item.title}
                  </h2>
                  <p className="text-sm ">{item.description}</p>
                </header>

                <footer className="flex flex-col items-center gap-2 text-sm p-3 bg-[#111] rounded-lg drop-shadow-lg">
                  <p className="flex items-center justify-between">
                    Author:{" "}
                    <span className="inline-block bg-[#211]">
                      {item.author}
                    </span>
                  </p>
                  <p className="flex items-center justify-between">
                    reward:{" "}
                    <span className="inline-block bg-[#211]">
                      {item.reward}
                    </span>
                  </p>
                </footer>

                <Link
                  href={`/hub/job/${item._id}`}
                  className="bg-[#111] p-2 rounded-lg font-bold hover:bg-[#444]"
                >
                  more info{" "}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
      
    </header>
  );
};

export default HeaderHub;
