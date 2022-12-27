import React from 'react'
import Image, { StaticImageData } from 'next/image';

import AxiosLogo from '../assets/images/logos/axios-logo.png';
import JavaScriptLogo from '../assets/images/logos/javascript-logo.png';
import NextLogo from '../assets/images/logos/next-js-logo.png';
import ReactLogo from '../assets/images/logos/react-logo.png';
import SpringBootLogo from '../assets/images/logos/spring-boot-logo.png';
import SSTLogo from '../assets/images/logos/sst-logo.png';
import TailwindLogo from '../assets/images/logos/tailwind-logo.png';
import SpotifyAPILogo from '../assets/images/logos/spotify-api-logo.png';
import TypeScriptLogo from '../assets/images/logos/typescript-logo.png';
import ChakraUILogo from '../assets/images/logos/chakra-ui-logo.png';
import FramerMotionLogo from '../assets/images/logos/framer-motion-logo.png';

const images:StaticImageData[] = [
  TailwindLogo,
  ChakraUILogo,
  SSTLogo,
  AxiosLogo,
  SpringBootLogo,
  SpotifyAPILogo,
  NextLogo,
  ReactLogo,
  JavaScriptLogo,
  TypeScriptLogo,
  FramerMotionLogo,
]

const imagesToRender:StaticImageData[] = images.concat(images).concat(images).concat(images);

export default function HorizontalCarousel() {
  return (
    <div className='h-fit overflow-hidden'>
      <ul className='flex flex-nowrap items-center self-center ml-0 animate-scrollHorizontal'>
        {imagesToRender.map((image, i) => 
          <li key={i} className='flex justify-center items-center flex-shrink-0 my-2 px-3 transition duration-300 ease-in-out hover:-translate-y-2'>
            <Image src={image} alt='tech-logo' width={i%images.length < 7 ? 80 : 60} className='w-full h-full transition duration-500 grayscale hover:grayscale-0'/>
          </li>
        )}
      </ul>
    </div>
  )
}