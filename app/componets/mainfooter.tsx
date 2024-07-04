import Link from 'next/link'
import React from 'react'

const MainFooter = () => {
  return (
    <footer className='bg-[#333] p-10'>

        <div className='flex items-center justify-between flex-col md:flex-row w-full '>

            <div className='w-full p-5'>
                <h2 className='text-2xl font-bold'><Link href="/">Ejurwonder Service</Link></h2>
                <p className='text-gray-500'>A service that helps you to get your probelems done.</p>
            </div>


            <div className='flex flex-col gap-4 items-center p-4 bg-[#222]'>
                <Link href="/request" className='bg-[#444] p-2 hover:bg-[#111]'>Request</Link>
                <Link href="/FAQ" className='bg-[#444] p-2 hover:bg-[#111]'>F.A.Q</Link>
            </div>

        </div>
    </footer>
  )
}

export default MainFooter