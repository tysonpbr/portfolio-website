import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[150px] w-[150px]'>
    <motion.p
      variants={fadeIn("right", "spring", index * 0.08 + 0.2, 0.7)}
      className='w-full bg-secondary p-[4px] rounded-[20px] shadow-card'
    >
      <div 
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-white rounded-[20px] py-0 px-12 min-h-[150px] lg:min-h-[180px] flex justify-evenly items-center flex-col"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain"/>
        <h3 className="text-primary text-[10px] lg:text-[14px] font-bold text-center">{title}</h3>
      </div>
    </motion.p>
  </Tilt>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Skills.</h2>
      </motion.div>

      <div className='mt-8 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills")