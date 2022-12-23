import React from 'react'
import Image, { StaticImageData } from 'next/image';

import AxiosLogo from '../public/images/axios-logo.png';
import JavaScriptLogo from '../public/images/javascript-logo.png';
import NextLogo from '../public/images/next-js-logo.png';
import ReactLogo from '../public/images/react-logo.png';
import SpringBootLogo from '../public/images/spring-boot-logo.png';
import SSTLogo from '../public/images/sst-logo.png';
import TailwindLogo from '../public/images/tailwind-logo.png';
import TypeScriptLogo from '../public/images/typescript-logo.png';

const images : StaticImageData[] = [
  SSTLogo,
  NextLogo,
  TailwindLogo,
  AxiosLogo,
  SpringBootLogo,
]

const largerImages: StaticImageData[] = [
  ReactLogo,
  JavaScriptLogo,
  TypeScriptLogo,
]

export default function HorizontalCarousel() {
  return (
    <section className='bg-white h-screen/2 flex flex-col items-center'>
      <h1 className='mt-5'>My Technologies</h1>
      <p className='my-5 mx-60 text-center'>
        Here are all my favorite technologies! aliqua. Lectus quam id leo in vitae turpis massa sed. Pretium lectus quam id leo. 
        At quis risus sed vulputate odio ut enim blandit volutpat.
      </p>
      <ul className='w-full h-fit flex flex-nowrap justify-evenly items-center overflow-hidden my-3 ml-0'>
        {images.map((image, i) => 
          <li key={i} className='w-32 h-28 flex items-center'>
            <Image src={image} alt='axios-logo' className='h-auto flex items-center flex-shrink-0 transition duration-500 grayscale hover:grayscale-0'/>
          </li>
        )}
        {largerImages.map((image, i) => 
          <li key={i} className='w-20 h-16 flex items-center'>
            <Image src={image} alt='axios-logo' className='h-auto flex items-center flex-shrink-0 transition duration-500 grayscale hover:grayscale-0 '/>
          </li>)}
      </ul>
    </section>
  )
}