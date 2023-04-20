import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas, CoffeeCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#b58c77]"/>
          <div className="w-1 sm:h-80 h-40 rounded-xl bg-[#b58c77]"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#b58c77]'>Tyson</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            This is where I can put some text in <br className='sm:block hidden' />about who I am and what I have to <br className='sm:block hidden' />offer as a computer engineer.
          </p>
        </div>
      </div>

      <CoffeeCanvas/>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href="#about">
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-[#2b434f] flex justify-center items-start p-2'>
            <motion.div 
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5, 
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-[#2b434f] mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero