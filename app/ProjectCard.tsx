import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TechnologyItem from './TechnologyItem';

import { FiCode } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import { Project } from '../typings/typings';


const ProjectCard = (props: Project) => {
  return (
    <div 
      className='flex flex-col items-center mx-3 lg:mx-5 my-5 lg:my-5  w-auto lg:w-1/2 h-auto'
    >
      {props.liveURL !== "/" &&
        <Link href={props.liveURL}>
          <Image src={props.image} 
                 alt='project-screenshot'
                 height={300} 
                 className='rounded-2xl hover:opacity-90'
          />
        </Link>
      }
      {props.liveURL === '/' &&
        <Image src={props.image} 
               alt='project-screenshot' 
               height={300} 
               className='rounded-2xl'
        />
      }
      <div className='h-auto w-full flex flex-col mx-5'>
        <motion.h1 
          whileInView={{ opacity: [0,1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='text-center my-3 w-full'
        >
          {props.name}
        </motion.h1>
        <div className='flex flex-wrap justify-center w-auto mx-8'>
          {props.technologies.map((item, i) => 
            <TechnologyItem {...item} key={i}/>  
          )}
        </div>
        <motion.div 
          whileInView={{ opacity: [0,1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className='my-4'
        >
          <p>{props.description}</p>
        </motion.div>
        <div className='flex justify-center'>
          {props.demoLink === '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='rounded-full mx-2 bg-notion-text-default text-white px-4 py-1 lg:my-5 flex flex-row items-center'
            >
              <MdError className='mr-2'/>
              Demo Not Available
            </motion.button>
          }
          {props.demoLink !== '/' &&
            <motion.button 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='rounded-full mx-2 bg-black text-white px-4 py-1 lg:my-5 flex flex-row items-center transition-all hover:-translate-y-1'
              onClick={() => {
                window.open(props.demoLink);
              }}
            >
              <AiOutlineEye className='mr-2'/>
              Demo
            </motion.button>
          }
          {props.codeLink === '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true }}
              className='rounded-full bg-notion-text-default text-white px-4 py-1 lg:my-5 flex flex-row items-center'
            >
              <MdError className='mr-2'/>
              Code is Not Public 
            </motion.button>
          }
          {props.codeLink !== '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [200, 0] }}
              transition={{ type: "tween", duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true }}
              className='rounded-full bg-black text-white px-4 py-1 lg:my-5 flex flex-row items-center transition-all hover:-translate-y-1'
              onClick={() => {
                window.open(props.codeLink);
              }}
            >
              <FiCode className='mr-2'/>
              Code
            </motion.button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;