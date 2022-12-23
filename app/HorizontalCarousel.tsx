import React from 'react'
import Image, { StaticImageData } from 'next/image';

import AxiosLogo from '../public/images/axios-logo.png';
import JavaScriptLogo from '../public/images/javascript-logo.png';
import NextLogo from '../public/images/next-js-logo.png';
import ReactLogo from '../public/images/react-logo.png';
import SpringBootLogo from '../public/images/spring-boot-logo.png';
import SSTLogo from '../public/images/sst-logo.png';
import TailwindLogo from '../public/images/tailwind-logo.png';
import SpotifyAPILogo from '../public/images/spotify-api-logo.png';
import TypeScriptLogo from '../public/images/typescript-logo.png';
import ChakraUILogo from '../public/images/chakra-ui-logo.png';
import WebSocketsLogo from '../public/images/websocket-logo.png';

const images:StaticImageData[] = [
  SSTLogo,
  NextLogo,
  TailwindLogo,
  ChakraUILogo,
  AxiosLogo,
  SpringBootLogo,
  SpotifyAPILogo,
  WebSocketsLogo,
  ReactLogo,
  JavaScriptLogo,
  TypeScriptLogo,
]

const imagesToRender:StaticImageData[] = images.concat(images).concat(images).concat(images);

export default function HorizontalCarousel() {
  return (
    <div className='w-4/5 h-fit overflow-hidden'>
      <ul className='w-scroll flex flex-nowrap items-center self-center overflow-hidden my-3 ml-0 animate-scrollHorizontal'>
        {imagesToRender.map((image, i) => 
          <li key={i} className={`flex justify-center items-center flex-shrink-0 my-2 px-3 animate-fadeIn animation-delay-400 transition duration-300 ease-in-out hover:-translate-y-2`}>
            <Image src={image} alt='tech-images' width={i%images.length < 8 ? 80 : 60} className='w-full h-full transition duration-500 grayscale hover:grayscale-0'/>
          </li>
        )}
      </ul>
    </div>
  )
}