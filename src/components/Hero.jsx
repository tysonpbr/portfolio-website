import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#B19DD0]"/>
          <div className="w-1 sm:h-80 h-40 rounded-xl bg-[#B19DD0]"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#B19DD0]'>Tyson</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This is where I can put some text in <br className='sm:block hidden' />about who I am and what I have to <br className='sm:block hidden' />offer as a computer engineer.
          </p>
        </div>
      </div>
      <ComputersCanvas/>
    </section>
  )
}

export default Hero