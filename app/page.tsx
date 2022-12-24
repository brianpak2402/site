"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import HorizontalCarousel from './HorizontalCarousel';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiDownArrowAlt } from 'react-icons/bi';


// eventually replace title with my image.
export default function Home() {
  const techSection = useRef<null | HTMLElement>(null);

  return (
    <main className="flex flex-col">
      <section className='flex flex-col h-screen w-screen justify-center'>
        <div className='flex flex-col items-end box-border mr-40 mt-auto' >
          <motion.h1 
            animate={{ opacity: [0, 1], y: [200, 0] }}
            transition={{ type: "tween", duration: 1, ease: "easeInOut"}}
          >
            Hello, I am Brian Pak!
          </motion.h1>
          <motion.p 
            animate={{ opacity: [0,1], y:[200,0] }}
            transition={{ type: "tween", duration: 1.20, ease: "easeInOut"}}
          >
            Student Software Developer and [something] 
          </motion.p>
        </div>
        <motion.button
          className='self-center mt-auto animate-bounce flex flex-col items-center'
          animate={{ opacity: [0, 1]}}
          transition={{ type: "tween", duration: 0.5, delay: 1.5}}
          onClick={() => {
            techSection!.current!.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h4>Discover More!</h4>
          <BiDownArrowAlt className='h-14 w-14'/>
        </motion.button>
      </section>
      <section id="about" className='h-screen/2'>
        <div className='flex flex-row self-center bg-slate-300 h-full w-full py-14 pt-10 pb-16 justify-between'>
          <div className='m-4 items-start w-1/4 px-5'>
            <ul className='roboto-mono'>
              <motion.li 
                className='py-2 flex flex-row border-b border-b-black/60'
                whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p> <strong className='text-black'>N A M E : </strong> Brian Pak</p>
              </motion.li>
              <motion.li 
                className='py-2 flex flex-row border-b border-b-black/60'
                whileInView={{ opacity: [0,1], x: [-200, 0] }}
                transition={{ type:"tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p> <strong className='text-black'>P R O N O U N S: </strong> He/him</p>
              </motion.li>
              <motion.li 
                className='py-2 flex flex-row border-b border-b-black/60'
                whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p> <strong className='text-black'>S C H O O L : </strong> Georgia Institute of Technology</p>
              </motion.li>
              <motion.li 
                className='py-2 flex flex-row border-b border-b-black/60'
                whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p> <strong className='text-black'>A G E : </strong> 20 Years </p>
              </motion.li>
              <motion.li 
                className='py-2 flex flex-row border-b border-b-black/60'
                whileInView={{ opacity: [0, 1], x: [-200, 0] }}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <p> <strong className='text-black'>H O M E T O W N: </strong> Duluth, GA </p>
              </motion.li>
            </ul>
            <div className='flex flex-row justify-evenly self-center pt-4'>
              <motion.button 
                className='w-10 h-10 hover:rounded-full'
                whileInView={{ opacity: [0, 1], x: [-100, 0]}}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link 
                  href='https://www.linkedin.com/in/brianpakk/' 
                  className='flex justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
                >  
                  <FaLinkedinIn className='h-full w-2/3'/>
                </Link>
              </motion.button>
              <motion.button 
                className='w-10 h-10 hover:rounded-full'
                whileInView={{ opacity: [0, 1], x: [-100, 0]}}
                transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Link href='https://github.com/brianpak2402' className='flex justify-center transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                  <FaGithub  className='h-full w-2/3'/>
                </Link>
              </motion.button>
            </div>
          </div>
          <div className='mt-8 mr-8 w-3/4'>
            <motion.p 
              className='mb-3'
              whileInView={{ opacity:[0,1], y: [200,0]}}
              transition={{ type: "tween", duration:1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              I am an undergraduate student at the Georgia Institute of Technology pursuing a major in Computer Science 
              with a concentration in Intelligence & Media. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed. 
              Pretium lectus quam id leo. At quis risus sed vulputate odio ut enim blandit volutpat. Leo integer 
              malesuada nunc vel risus. Magna sit amet purus gravida quis blandit turpis. Magna ac placerat vestibulum lectus mauris ultrices. 
              Vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed enim ut sem.
            </motion.p>
            <motion.p 
              className='mb-3'
              whileInView={{ opacity:[0,1], y: [200,0]}}
              transition={{ type: "tween", duration:1, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Lectus quam id leo in vitae turpis massa sed. 
              Pretium lectus quam id leo. At quis risus sed vulputate odio ut enim blandit volutpat.
            </motion.p>
            <motion.button 
              className='bg-notion-legacy-red rounded-full text-white transition duration-300 ease-in-out hover:-translate-y-1 px-4 py-2'
              whileInView={{ opacity:[0, 0.7, 1], y: [200, 10, 0] }}
              transition={{ type: "tween", duration:1 }}
              viewport={{ once: true }}
            >
              Click for Resume 
            </motion.button>
          </div>
        </div>
      </section>
      <section className='bg-white h-screen/2 flex flex-col items-center' ref={techSection}>
        <motion.h1 
          className='mt-5'
          whileInView={{ opacity: [0, 1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1, ease: "easeInOut"}}
          viewport={{ once: true }}
        >
          My Technologies
        </motion.h1>
        <motion.p 
          className='my-5 mx-60 text-center'
          whileInView={{ opacity:[0,1], y: [200,0]}}
          transition={{ type: "tween", duration:1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Here are all the technologies I use! aliqua. Lectus quam id leo in vitae turpis massa sed. Pretium lectus quam id leo. 
          At quis risus sed vulputate odio ut enim blandit volutpat.
        </motion.p>
        <motion.div 
          whileInView={{ opacity: [0, 1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <HorizontalCarousel />
        </motion.div>
      </section>
    </main>
  )
}
