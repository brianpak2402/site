import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import TechnologyItem from './TechnologyItem';

import { FiCode } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';
import { MdError } from 'react-icons/md';

import { Project } from '../typings/typings';

interface IProjectCardProps {
  item: Project,
  index: number
}

const ProjectCard : React.FC<IProjectCardProps> = ({item, index}: IProjectCardProps) => {
  const MotionImage = motion(Image, { forwardMotionProps: true});

  return (
    <div 
      className='flex flex-col flex-grow items-center sm:mx-3 lg:mx-5 my-5 lg:my-5 w-auto lg:w-1/2 h-auto'
    >
      {item.liveURL === '/' &&
        <MotionImage src={item.image} 
                     alt='project-screenshot' 
                     height={300} 
                     className='rounded-2xl'
                     whileInView={{ opacity: [0,1], y: [200, 0] }}
                     transition={{ type: "tween", duration: (1 + (0.2 * index)), ease: "easeOut" }}
                     viewport={{ once: true }}
        />
      }
      {item.liveURL !== "/" &&
        <Link href={item.liveURL}>
          <div className='transition-all hover:opacity-80'>
            <MotionImage src={item.image} 
                        alt='project-screenshot'
                        height={300} 
                        whileInView={{ opacity: [0,1], y: [200, 0] }}
                        transition={{ type: "tween", duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                  className='rounded-2xl hover:opacity-90'
            />
          </div>
        </Link>
      }
      <div className='h-auto w-full flex flex-col mx-5'>
        <motion.h1 
          whileInView={{ opacity: [0,1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className='text-center my-3 w-full'
        >
          {item.name}
        </motion.h1>
        <div className='flex flex-wrap justify-center w-auto mx-8'>
          {item.technologies.map((item, i) => 
            <TechnologyItem item={item} index={i} key={i}/>  
          )}
        </div>
        <motion.div 
          whileInView={{ opacity: [0,1], y: [200, 0] }}
          transition={{ type: "tween", duration: 1.05, ease: "easeOut" }}
          viewport={{ once: true }}
          className='mt-5 mb-1'
        >
          <p className='mb-3'>{item.description_p1}</p> 
          <p>{item.description_p2}</p>
        </motion.div>
        <div className='flex justify-center'>
          {item.demoLink === '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [100, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className=' bg-notion-text-default text-white px-1 md:px-4 py-1 mx-1 lg:mx-2 lg:my-5 flex rounded-full flex-row items-center'
            >
              <MdError className='mr-1 sm:mr-2'/>
              Demo Not Available
            </motion.button>
          }
          {item.demoLink !== '/' &&
            <motion.button 
              whileInView={{ opacity: [0,1], y: [100, 0] }}
              transition={{ type: "tween", duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className='text-white mx-1'
              onClick={() => {
                window.open(item.demoLink);
              }}
            >
              <div className=' bg-black rounded-full px-4 py-1 mx-2 md:px-4 lg:my-5 flex flex-row items-center transition-all hover:-translate-y-1'>
                <AiOutlineEye className='mr-1 sm:mr-2'/>
                Demo
              </div>
            </motion.button>
          }
          {item.codeLink === '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [100, 0] }}
              transition={{ type: "tween", duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true }}
              className=' bg-notion-text-default text-white px-1 md:px-4 py-1 mx-1 lg:mx-2 lg:my-5 flex rounded-full flex-row items-center'
            >
              <MdError className='mr-1 sm:mr-2'/>
              Code Not Public 
            </motion.button>
          }
          {item.codeLink !== '/' && 
            <motion.button 
              whileInView={{ opacity: [0,1], y: [100, 0] }}
              transition={{ type: "tween", duration: 1.25, ease: "easeOut" }}
              viewport={{ once: true }}
              className=' text-white mx-1'
              onClick={() => {
                window.open(item.codeLink);
              }}
            >
              <div className=' bg-black rounded-full px-2 md:px-4 py-1 lg:my-5 flex flex-row items-center transition-all hover:-translate-y-1'>
                <FiCode className='mr-1 sm:mr-2'/>
                Code
              </div>
            </motion.button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;