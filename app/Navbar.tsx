import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='p-5 bg-transparent flex justify-evenly'>
       <div className='flex flex-row flex-grow justify-evenly'>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors duration-300 ease-linear px-4 py-2 '>
                <Link href='/' className='px-4 py-2'>
                    Projects
                </Link>
            </button>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors duration-300 ease-linear px-4 py-2'>
                <Link href='/' className='px-4 py-2'>
                    Thoughts
                </Link>
            </button>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors duration-300 ease-linear px-4 py-2'>
                <Link href='/' className='px-4 py-2 rounded-full'>
                    Resume
                </Link>
            </button>
            <button className='rounded-full hover:bg-black hover:text-white transition-colors duration-300 ease-linear px-4 py-2'>
                <Link href='/' className='px-4 py-2'>
                     Contact
                </Link>
            </button>
       </div>
    </header>
  )
}