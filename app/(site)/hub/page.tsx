import HeaderHub from "@/app/componets/header-hub";
import { getSession } from "@/app/lib/action";
import { Job } from "@/app/models/jobs";
import Image from "next/image";
import Link from "next/link";


const Page = async () => {

  const isLogged = await getSession()

  const jobRequests = await Job.find({}).lean()

  const jobInProgress:any = await Job.find({worker: isLogged.userId}).lean()


  console.log(jobRequests, "de current hob reqquest")


  return (
    <main className="w-full min-h-screen p-5">

      <HeaderHub isLogged={isLogged} serverJobs={jobRequests} jobsInProg={jobInProgress} />

      <div className="bg-[#555] p-4">

        <header className="mb-4">
          <h2 className="text-4xl font-bold">Jobs we can do</h2>
          <p className="text-sm text-gray-300">
            We can quick create a custom blog, recipe, contact site, etc.
          </p>
        </header>
      
      <div className="w-full h-fit flex flex-row flex-wrap gap-4 items-center">

        {
          jobRequests?.map((item:any) => ( 
            <div className="w-[300px] h-[300px] bg-[#333] text-[10px] p-4 flex flex-col items-start justify-between rounded drop-shadow-lg" key={crypto.randomUUID()}>

                <h2 className="text-xl font-bold">{item.title}</h2>
                <p>{item.description}</p>
                <p className="p-3 bg-[#222]">Payment: {item.reward} eth</p>
                <Link href={`/hub/job/${item._id}`} className="p-3 bg-[#222] hover:bg-[#111] rounded font-bold uppercase">view more</Link>

            </div>
          ))
        }

      </div>


      </div>

    </main>
  );
};

export default Page;
