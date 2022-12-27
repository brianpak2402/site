/* eslint-disable react/no-unescaped-entities */
"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import HorizontalCarousel from './HorizontalCarousel';
import ProjectCard from './ProjectCard';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiDownArrowAlt } from 'react-icons/bi';
import { SiHandshake } from 'react-icons/si';

import projectList from '../assets/data/projects';


// eventually replace title with my image.
export default function Home() {
  const aboutSection = useRef<null | HTMLElement>(null);

  return (
    <main className="flex flex-col">
      <section className='flex flex-col h-screen w-screen justify-center'>
        <div className='flex flex-col items-center md:items-end box-border md:mr-40 mt-auto' >
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
            Student Developer 
          </motion.p>
        </div>
        <motion.button
          className='self-center mt-auto animate-bounce flex flex-col items-center'
          animate={{ opacity: [0, 1]}}
          transition={{ type: "tween", duration: 0.5, delay: 1.5}}
          onClick={() => {
            aboutSection!.current!.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <h4>Discover More!</h4>
          <BiDownArrowAlt className='h-14 w-14'/>
        </motion.button>
      </section>
      <section id="about" ref={aboutSection} className='flex flex-row self-center bg-slate-300 h-full w-full justify-between'>
        <div className='m-5 items-start w-1/4 px-5'>
          <ul className='roboto-mono'>
            <motion.li 
              className='py-2 flex flex-row border-b border-b-black/60'
              whileInView={{ opacity: [0, 1], x: [-200, 0] }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p> <strong className='text-black'>NAME : </strong> Brian Pak</p>
            </motion.li>
            <motion.li 
              className='py-2 flex flex-row border-b border-b-black/60'
              whileInView={{ opacity: [0,1], x: [-200, 0] }}
              transition={{ type:"tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p> <strong className='text-black'>PRONOUNS: </strong> He/him</p>
            </motion.li>
            <motion.li 
              className='py-2 flex flex-row border-b border-b-black/60'
              whileInView={{ opacity: [0, 1], x: [-200, 0] }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p> <strong className='text-black'>SCHOOL : </strong> Georgia Institute of Technology</p>
            </motion.li>
            <motion.li 
              className='py-2 flex flex-row border-b border-b-black/60'
              whileInView={{ opacity: [0, 1], x: [-200, 0] }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p> <strong className='text-black'>AGE : </strong> 20 Years </p>
            </motion.li>
            <motion.li 
              className='py-2 flex flex-row border-b border-b-black/60'
              whileInView={{ opacity: [0, 1], x: [-200, 0] }}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <p> <strong className='text-black'>HOMETOWN: </strong> Duluth, GA </p>
            </motion.li>
          </ul>
          <div className='flex flex-row justify-evenly self-center md:pt-4'>
            <motion.button 
              className='w-10 h-10 hover:rounded-full'
              whileInView={{ opacity: [0, 1], x: [-100, 0]}}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href='https://gatech.joinhandshake.com/stu/users/37132762' className='flex justify-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                <SiHandshake className='h-full w-2/3'/>
              </Link>
            </motion.button>
            <motion.button 
              className='w-10 h-10 hover:rounded-full'
              whileInView={{ opacity: [0, 1], x: [-100, 0]}}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link 
                href='https://www.linkedin.com/in/brianpakk/' 
                className='flex justify-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'
              >  
                <FaLinkedinIn className='h-full w-2/3'/>
              </Link>
            </motion.button>
            <motion.button 
              className='w-10 h-10 hover:rounded-full'
              whileInView={{ opacity: [0, 1], x: [-100, 0]}}
              transition={{ type: "tween", duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link href='https://github.com/brianpak2402' className='flex justify-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
                <FaGithub  className='h-full w-2/3'/>
              </Link>
            </motion.button>
          </div>
        </div>
        <div className='mr-8 py-6 w-3/4'>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration:0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I am an undergraduate student pursuing a degree in computer science at the Georgia Institute of Technology, and I love developing 
            APIs and full-stack applications that support all kinds of user experiences. 
          </motion.p>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration:0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Two years ago, I transitioned from studying cello performance to computer science, and I have since built many web
            applications using technologies like React, Spring Boot, Next.js, Tailwind CSS, and Express. I also have strong programming experience 
            with Java, JavaScript, and C as demonstrated through my previous coursework.
          </motion.p>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Right now, I am working with the GT WebDev club to build Spotify Jukebox: a full-stack, serverless application 
            that hosts virtual jukebox sessions.
            {/* Don't know what I mean? Come check us out! */}
          </motion.p>
          <motion.button 
            className='bg-notion-legacy-red rounded-full text-white px-4 py-2 md:my-5 hover:-translate-y-1'
            whileInView={{ opacity:[0, 0.7, 1], y: [200, 10, 0] }}
            transition={{ type: "tween", duration:1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            onClick={() => {
              window.open("/Pak_Brian_Resume.pdf");
            }}
          >
            Download My Resume
          </motion.button>
        </div>
      </section>
      <section className='bg-white flex flex-col items-center'>
        <motion.h1 
          className='my-5'
          whileInView={{ opacity: [0, 1], y: [200, 0] }}
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut"}}
          viewport={{ once: true }}
        >
          My Technologies
        </motion.h1>
        <motion.p 
          className='md:mx-60 text-center'
          whileInView={{ opacity:[0,1], y: [200,0]}}
          transition={{ type: "tween", duration: 0.7,  ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Below are all the technologies that I have worked with in past projects.
        </motion.p>
        <motion.div 
          whileInView={{ opacity: [0,1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='my-4'
        >
          <HorizontalCarousel />
        </motion.div>
      </section>
      <section className=' bg-slate-300 flex flex-col'>
        <motion.h1 
          className=' my-4 text-center'
          whileInView={{ opacity:[0,1], y:[200,0] }}
          transition={{ type:"tween", duration: 1, ease: "easeOut"}}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h1>
        <div className='md:mx-10 mx-20'>
          {projectList.map((project, i) => 
            <ProjectCard {...project} key={i} />
          )}
        </div>
      </section>
    </main>
  )
}
