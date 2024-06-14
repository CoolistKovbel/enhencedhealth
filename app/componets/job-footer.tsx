"use client";

import { AcceptSingleJob } from "../lib/action";

interface JobFooterProps {
  gg: any;
}

const JobFooter = ({ gg }: JobFooterProps) => {
  const handleJobAcception = async () => {
    try {
      console.log("handle acception", gg[0]._id);

      const ja = await AcceptSingleJob(gg[0]._id as string);

      console.log(ja);
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <footer className="p-4 bg-[#222] flex justify-between gap-3 w-full">
      <p>
        cost:
        <span className="p-2 bg-[#111] text-green-500 rounded-lg">
          {gg[0].reward}
        </span>
      </p>
      {gg[0].accepted ? (
        <button
          className={`bg-[#111] p-2 w-[20%] text-center rounded-lg hover:bg-[#666]  ${
            gg[0].completed ? "bg-green-500" : "bg-red-500"
          }`}
        >
          claim reward
        </button>
      ) : (
        <button
          className="bg-[#111] p-2 w-[20%] text-center rounded-lg hover:bg-[#666]"
          onClick={handleJobAcception}
        >
          Accapt
        </button>
      )}
    </footer>
  );
};

export default JobFooter;
