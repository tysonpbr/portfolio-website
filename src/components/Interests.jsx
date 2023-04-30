import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { BasketballCanvas, GuitarCanvas, SurfCanvas } from './canvas';

const Interests = () => {
  const [selected, setSelected] = useState("Basketball")

  return (
    <>
      <motion.div variants={textVariant()} className="hidden lg:flex flex-col">
        <p className={styles.sectionSubText}>What I do in my free time</p>
        <h2 className={styles.sectionHeadText}>Interests.</h2>
      </motion.div>
      <div className="flex flex-col lg:hidden">
        <p className={styles.sectionSubText}>What I do in my free time</p>
        <h2 className={styles.sectionHeadText}>Interests.</h2>
      </div>

      <div className='mt-0 flex flex-wrap gap-6 lg:gap-10'>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[3px] rounded-[10px] shadow-card'
            onClick={() => setSelected("Basketball")}
          >
            <div 
              className={`${(selected == "Basketball") ? "bg-secondary" : "bg-white"} rounded-[10px] py-0 w-full min-h-[40px] lg:min-h-[50px] flex justify-evenly items-center flex-col`}
            >
              <h3 className="text-primary text-[8px] lg:text-[14px] font-bold text-center" >Basketball</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[3px] rounded-[10px] shadow-card'
            onClick={() => setSelected("Surf")}
          >
            <div 
              className={`${(selected == "Surf") ? "bg-secondary" : "bg-white"} rounded-[10px] py-0 w-full min-h-[40px] lg:min-h-[50px] flex justify-evenly items-center flex-col`}
            >
              <h3 className="text-primary text-[8px] lg:text-[14px] font-bold text-center" >Wake Surfing</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[3px] rounded-[10px] shadow-card'
            onClick={() => setSelected("Guitar")}
          >
            <div 
              className={`${(selected == "Guitar") ? "bg-secondary" : "bg-white"} rounded-[10px] py-0 w-full min-h-[40px] lg:min-h-[50px] flex justify-evenly items-center flex-col`}
            >
              <h3 className="text-primary text-[8px] lg:text-[14px] font-bold text-center" >Guitar</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
      
      <div className='w-full max-w-[530px] h-[250px] md:h-[500px] flex'>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Basketball") ? "flex" : "hidden"}`}>
          <BasketballCanvas /> 
        </div>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Guitar") ? "flex" : "hidden"}`}>
          <GuitarCanvas />
        </div>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Surf") ? "flex" : "hidden"}`}>
          <SurfCanvas />
        </div>
      </div>
    </>
  );
};

export default Interests