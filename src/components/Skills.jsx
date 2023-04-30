import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { skills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='lg:w-[150px] w-[90px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.08 + 0.2, 0.7)}
      className='w-full bg-secondary p-[4px] rounded-[999px] shadow-card'
    >
      <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-white rounded-[999px] py-0 w-full min-h-[90px] lg:min-h-[150px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-8 h-8 lg:w-16 lg:h-16 object-contain"/>
        <h3 className="text-primary text-[10px] lg:text-[14px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="hidden lg:flex flex-col">
        <p className={styles.sectionSubText}>Technical Strengths</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>
      <div className="flex flex-col lg:hidden">
        <p className={styles.sectionSubText}>Technical Strengths</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </div>

      <div className='mt-8 flex flex-wrap gap-6 lg:gap-10'>
        {skills.map((skill, index) => (
          <ServiceCard key={skill.title} index={index} {...skill} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills")