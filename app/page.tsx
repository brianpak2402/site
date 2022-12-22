import styles from './page.module.css'
import Link from 'next/link';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiDownArrowAlt } from 'react-icons/bi';

// eventually replace title with my image.
export default function Home() {
  return (
    <main className="flex flex-col">
      <section className='flex flex-col h-screen w-screen justify-center'>
        <div className='flex flex-col items-end box-border mr-40 mt-auto' >
          <h1>Hello, I am Brian Pak!</h1>
          <p>Student Software Developer and [something]</p>
        </div>
        <BiDownArrowAlt className='animate-bounce h-14 w-14 self-center mt-auto'/>
      </section>
      <section className='py-10'>
        <div className='flex flex-row bg-slate-200 h-screen/2 px-14 py-16 justify-between'>
          <div className='m-4 items-start w-1/4 px-5'>
            <ul className='roboto-mono'>
              <li className='py-2 flex flex-row border-b border-b-black/60'>
                <p className=''> <strong className='text-black'>N A M E : </strong> Brian Pak</p>
              </li>
              <li className='py-2 flex flex-row border-b border-b-black/60'>
                <p className=''> <strong className='text-black'>P R O N O U N S: </strong> He/him</p>
              </li>
              <li className='py-2 flex flex-row border-b border-b-black/60'>
                <p className=''> <strong className='text-black'>S C H O O L : </strong> Georgia Institute of Technology</p>
              </li>
              <li className='py-2 flex flex-row border-b border-b-black/60'>
                <p className=''> <strong className='text-black'>A G E : </strong> 20 Years </p>
              </li>
              <li className='py-2 flex flex-row border-b border-b-black/60'>
                <p className=''> <strong className='text-black'>H O M E T O W N: </strong> Duluth, GA </p>
              </li>
            </ul>
            <div className='flex flex-row justify-evenly pt-4'>
              <button className='w-10 h-10 hover:rounded-full'>
                <Link href='https://www.linkedin.com/in/brianpakk/' className='flex justify-center'>
                  <FaLinkedinIn className='h-full w-2/3'/>
                </Link>
              </button>
              <button className='w-10 h-10 hover:rounded-full'>
                <Link href='https://github.com/brianpak2402' className='flex justify-center'>
                  <FaGithub  className='h-full w-2/3'/>
                </Link>
              </button>
            </div>
          </div>
          <div className='m-4 w-3/4'>
            <p className='mb-3'>
              I am an undergraduate student at the Georgia Institute of Technology pursuing a major in Computer Science 
              with a concentration in Intelligence & Media. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed. 
              Pretium lectus quam id leo. At quis risus sed vulputate odio ut enim blandit volutpat. Leo integer 
              malesuada nunc vel risus. Magna sit amet purus gravida quis blandit turpis. Magna ac placerat vestibulum lectus mauris ultrices. 
              Vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem.
            </p>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed. 
              Pretium lectus quam id leo. At quis risus sed vulputate odio ut enim blandit volutpat.
            </p>
            <button className='bg-notion-legacy-red rounded-full text-white hover:opacity-80 transition-opacity px-4 py-2 inter-var font-medium'>
              Click for Resume 
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
