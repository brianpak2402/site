/* eslint-disable react/no-unescaped-entities */
"use client";

import type { Technology } from '../typings/typings';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';

import HorizontalCarousel from './HorizontalCarousel';
import ProjectCard from './ProjectCard';
import TechnologyItem from './TechnologyItem';
import projectList from '../assets/data/projects';
import techMap from '../assets/data/technologies';

import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BiDownArrowAlt } from 'react-icons/bi';
import { SiHandshake } from 'react-icons/si';

const languages : Technology[] = [
  techMap.get("JavaScript") as Technology,
  techMap.get("TypeScript") as Technology,
  techMap.get("Java") as Technology,
]

const frontendTech: Technology[] = [
  techMap.get("Tailwind CSS") as Technology,
  techMap.get("Chakra UI") as Technology,
  techMap.get("React") as Technology,
  techMap.get("Framer Motion") as Technology,
  techMap.get("Next.js") as Technology,
]

const backendTech: Technology[] = [
  techMap.get("Spring Boot") as Technology,
  techMap.get("Serverless Stack Toolkit") as Technology,
  techMap.get("Spotify API") as Technology,
]

// eventually replace title with my image.
export default function Home() {
  const aboutSection = useRef<null | HTMLElement>(null);

  return (
    <main className="flex flex-col">
      <section className='flex flex-col h-screen w-screen justify-center'>
        <div className='flex flex-col items-center lg:items-end box-border lg:mr-40 mt-auto' >
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
            Student Software Developer 
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
      <section id="about" ref={aboutSection} className='bg-slate-300 h-auto lg:h-screen/2 w-screen flex flex-col sm:flex-row self-center justify-between'>
        <div className='m-5 items-start w-screen sm:w-1/4 px-5'>
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
          <div className='flex flex-row justify-evenly self-center lg:pt-4'>
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
        <div className='text-center sm:text-left sm:mr-8 px-3 pt-2 pb-4 sm:py-6 w-screen sm:w-3/4'>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration:0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            I am an undergraduate student pursuing a degree in computer science at the Georgia Institute of Technology <strong>🐝</strong>, and I love developing 
            APIs and full-stack applications that support all kinds of user experiences. 
          </motion.p>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration:0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Two years ago, I transitioned from studying cello performance to computer science, and I have since built many web
            applications using technologies like React <strong>⚛</strong>, Spring Boot, Next.js, Tailwind CSS, and Express. I also have strong programming experience 
            with Java, JavaScript, and C as demonstrated through my previous coursework.
          </motion.p>
          <motion.p 
            className='my-2'
            whileInView={{ opacity:[0,1], y: [200,0]}}
            transition={{ type: "tween", duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Right now, I am working with the GT WebDev club to build Spotify Jukebox <strong>🎶</strong>: a full-stack, serverless application 
            that hosts virtual jukebox sessions.
            {/* Don't know what I mean? Come check us out! */}
          </motion.p>
          <motion.button 
            className=' text-white'
            whileInView={{ opacity:[0, 0.7, 1], y: [200, 10, 0] }}
            transition={{ type: "tween", duration:1.2, ease: "easeOut", times: [0, 0.9, 1] }}
            viewport={{ once: true }}
            onClick={() => {
              window.open("/Pak_Brian_Resume.pdf");
            }}
          >
            <div className='bg-notion-legacy-red rounded-full px-4 py-2 lg:my-2 flex justify-center duration-300 ease-in-out hover:-translate-y-1 hover:scale-110'>
              Download My Resume
            </div>
          </motion.button>
        </div>
      </section>
      <section className='bg-white h-auto lg:h-screen/2 flex flex-col items-center'>
        <motion.h1 
          whileInView={{ opacity: [0, 1], y: [200, 0] }}
          transition={{ type: "tween", duration: 0.6, ease: "easeInOut"}}
          viewport={{ once: true }}
          className='my-5'
        >
          My Technologies
        </motion.h1>
        <motion.p 
          whileInView={{ opacity:[0,1], y: [200,0]}}
          transition={{ type: "tween", duration: 0.7,  ease: "easeOut" }}
          viewport={{ once: true }}
          className='lg:mx-60 text-center'
        >
          Below are all the technologies that I have enjoyed using in projects that I've worked on in the past.
        </motion.p>
        <motion.div 
          whileInView={{ opacity:[0,1], y: [200,0]}}
          transition={{ type: "tween", duration: 0.7,  ease: "easeOut" }}
          viewport={{ once: true }}
          className='my-4 w-screen overflow-hidden'
        >
          <HorizontalCarousel />
        </motion.div>
        <div className='w-screen mb-5 flex flex-col lg:flex-row items-center lg:justify-evenly'>
          <div className='flex flex-col w-screen lg:w-1/3'>
            <motion.h3 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='text-center my-2'
            >
              Languages
            </motion.h3>
            <div className='flex flex-wrap justify-center my-2 h-auto'>
              {languages.map((item, i) => <TechnologyItem item={item} index={i} key={i}/>)}
            </div>
          </div>
          <div className='flex flex-col w-screen lg:w-1/3'>
            <motion.h3 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='text-center my-2'
            >
              Frontend Technologies
            </motion.h3>
            <div className='flex flex-wrap justify-center my-2 h-full'>
              {frontendTech.map((item, i) => <TechnologyItem item={item} index={i} key={i}/>)}
            </div>
          </div>
          <div className='flex flex-col w-screen lg:w-1/3'>
            <motion.h3 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='text-center justify-center my-2'
            >
              Backend Technologies & APIs
            </motion.h3>
            <div className='flex flex-wrap justify-center mt-2 mb-4 h-full'>
              {backendTech.map((item, i) => <TechnologyItem item={item} index={i} key={i}/>)}
            </div>
          </div>
        </div>
      </section>
      <section className=' bg-slate-300 flex flex-col'>
        <motion.h1 
          className=' my-4 text-center'
          whileInView={{ opacity:[0,1], y:[200,0] }}
          transition={{ type:"tween", duration: 1, ease: "easeOut"}}
          viewport={{ once: true }}
        >
          Featured Projects
        </motion.h1>
        <div className='flex flex-col items-center lg:flex-row screen mx-5 lg:mx-20'>
          {projectList.map((project, i) => 
            <ProjectCard item={project} index={i} key={i} />
          )}
        </div>
      </section>
    </main>
  )
}
