import React from "react";
import { motion } from "framer-motion";
import Tilt from "react-tilt";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

import { about_portrait } from "../assets";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="hidden lg:flex flex-col">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>
      <div className="flex flex-col lg:hidden">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4'
      >
        <div className='flex flex-col lg:flex-row gap-12 lg:gap-24 items-center align-middle'>
          <p className='text-white text-[17px] leading-[30px]'>
            I'm a third-year Computer Engineering student at UBC, eager to broaden my knowledge 
            and obtain technical work experience. My past co-op work and personal coding projects 
            have provided me with extensive experience in software development and testing in 
            various programming languages. In addition to my technical proficiency, I possess 
            strong interpersonal skills, am an efficient communicator, and function well as a 
            team player. These attributes enable me to work collaboratively with peers and 
            clients. Coupled with my self-motivated, meticulous, and hardworking personality, 
            I believe that I would make a valuable contribution to any development team.
          </p>
          <Tilt className='xs:w-[250px] w-full md:w-auto'>
            <motion.div
              variants={fadeIn("right", "spring", 0.08, 1)}
              className='w-full shadow-card overflow-hidden lg:max-w-xl lg:w-auto lg:h-auto'
            >
              <img src={about_portrait} alt="about_portrait" className="w-auto h-auto bg-secondary p-[4px] rounded-[20px] lg:max-w-xl"/>
            </motion.div>
          </Tilt>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about")