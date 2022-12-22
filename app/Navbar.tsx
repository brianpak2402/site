import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='p-5 border-b bg-transparent flex justify-evenly'>
        {/* <Link href='/' className='flex-1 px-3 py-1'>
            <h1 className='text-3xl font-weight'>
                Brian Pak
            </h1> 
        </Link> */}
       <div className='flex flex-row flex-grow justify-evenly'>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors px-4 py-2 inter-var font-medium'>
                <Link href='/' className='px-4 py-2 rounded-full'>
                    Resume
                </Link>
            </button>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors px-4 py-2 inter-var font-medium'>
                <Link href='/' className='px-4 py-2'>
                    Projects
                </Link>
            </button>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors px-4 py-2 inter-var font-medium'>
                <Link href='/' className='px-4 py-2'>
                     Contact
                </Link>
            </button>
       </div>
    </header>
  )
}