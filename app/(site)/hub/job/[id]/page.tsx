import JobAcceptedComp from "@/app/componets/job-accepted-footer";
import JobFooter from "@/app/componets/job-footer";
import { SingleJobRequest } from "@/app/lib/action";

const Page = async (props:any) => {
  const gg: any = await SingleJobRequest(props.params.id);

  console.log("gg", gg[0].accepted);

  return (
    <main className="w-full min-h-screen bg-[#111] flex items-center justify-center flex-col">
      <div className="w-[800px] h-[400px] mx-auto bg-[#444] p-10 overflow-auto flex flex-col justify-between">
        <header className="w-full bg-[#222] p-2">
          <h2 className="text-2xl">Title: {gg[0].title}</h2>
          <p className="text-xl">Author: {gg[0].author}</p>
        </header>

        <p className="text-sm bg-[#333] p-2 h-full">{gg[0].description}</p>

        <JobFooter gg={gg} />
      </div>
      {gg[0].accepted && <JobAcceptedComp gg={gg} />}
    </main>
  );
};

export default Page;
