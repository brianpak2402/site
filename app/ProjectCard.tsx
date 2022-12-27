import React from 'react'
import Image from 'next/image';
import TechnologyItem from './TechnologyItem';

import { FiCode } from 'react-icons/fi';
import { AiOutlineEye } from 'react-icons/ai';

import { Project } from '../typings/typings';


const ProjectCard = (props: Project) => {
  return (
    <div className='flex flex-col items-center my-5 mx-5 w-1/2 h-auto'>
      <Image src={props.image} alt='project-screenshot' height={300} className='rounded-2xl'/>
      <div className='h-auto w-full flex flex-col mx-5'>
        <h2 className='text-center my-3 w-full'>Spotify Jukebox</h2>
        <div className='flex flex-wrap w-auto mx-8'>
          {props.technologies.map((item, i) => 
            <TechnologyItem {...item} key={i}/>  
          )}
        </div>
        <div className='mt-4'>
          <p>{props.description}</p>
        </div>
        <div className='flex justify-center'>
          <button 
            className='rounded-full mx-2 bg-black text-white px-4 py-1 md:my-5 flex flex-row items-center transition-all hover:-translate-y-1'
            onClick={() => {
              window.open(props.demoLink);
            }}
          >
            <AiOutlineEye className='mr-2'/>
            Demo
          </button>
          <button 
            className='rounded-full bg-black text-white px-4 py-1 md:my-5 flex flex-row items-center transition-all hover:-translate-y-1'
            onClick={() => {
              window.open(props.codeLink);
            }}
          >
            <FiCode className='mr-2'/>
            Code
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;