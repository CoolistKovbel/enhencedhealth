"use client"

import Link from "next/link";
import { useModal } from "./hooks/use-modal-store";

interface JobAcceptedCompProps {
  gg: any;
}


const JobAcceptedComp = ({gg}:JobAcceptedCompProps) => {
  const {onOpen} = useModal()

    const handleUserContact = async () => {
      console.log("HAndling sub(mit")
       try {
        onOpen("SendUserPM", gg[0].author)
       } catch (error) {
        console.log(error)
       }
    }

  return (
    <div className="w-[800px] h-[400px] mx-auto bg-[#222] p-10 overflow-auto flex flex-col gap-2">
      <h3 className="text-2xl font-bold">Job Info:</h3>
      <p>Contact Client: </p>
      <p>{gg[0].author}</p>
      <div className="flex items-center justify-between bg-[#111] p-3">
        <Link href={`/profile/${gg[0].author}`} className="p-2 bg-[#222]">Client Info</Link>
        <button onClick={handleUserContact} className="p-2 bg-[#222]">send pm</button>
      </div>
    </div>
  );
};

export default JobAcceptedComp;
