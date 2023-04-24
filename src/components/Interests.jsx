import React, { useState } from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { interests } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { BasketballCanvas, GuitarCanvas, SnowboardCanvas } from './canvas';

const Interests = () => {
  const [selected, setSelected] = useState("")

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

      <div className='mt-8 flex flex-wrap gap-6 lg:gap-10'>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[4px] rounded-[20px] shadow-card'
            onClick={() => setSelected("Basketball")}
          >
            <div 
              className="bg-white rounded-[20px] py-0 w-full min-h-[90px] lg:min-h-[50px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-primary text-[10px] lg:text-[14px] font-bold text-center" >Basketball</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[4px] rounded-[20px] shadow-card'
            onClick={() => setSelected("Guitar")}
          >
            <div 
              className="bg-white rounded-[20px] py-0 w-full min-h-[90px] lg:min-h-[50px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-primary text-[10px] lg:text-[14px] font-bold text-center" >Guitar</h3>
            </div>
          </motion.div>
        </Tilt>
        <Tilt className='lg:w-[150px] w-[90px]'>
          <motion.div
            variants={fadeIn("right", "spring", 0, 0.7)}
            className='w-full bg-secondary p-[4px] rounded-[20px] shadow-card'
            onClick={() => setSelected("Snowboarding")}
          >
            <div 
              className="bg-white rounded-[20px] py-0 w-full min-h-[90px] lg:min-h-[50px] flex justify-evenly items-center flex-col"
            >
              <h3 className="text-primary text-[10px] lg:text-[14px] font-bold text-center" >Snowboarding</h3>
            </div>
          </motion.div>
        </Tilt>
      </div>
      
      <div className='w-full h-[300px] md:h-[600px] flex'>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Basketball") ? "flex" : "hidden"}`}>
          <BasketballCanvas /> 
        </div>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Guitar") ? "flex" : "hidden"}`}>
          <GuitarCanvas />
        </div>
        <div className={`w-full h-[300px] md:h-[600px] flex ${(selected == "Snowboard") ? "flex" : "hidden"}`}>
          <SnowboardCanvas />
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Interests, "interests")