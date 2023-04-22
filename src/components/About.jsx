import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-white text-[17px] max-w-xl leading-[30px]'
      >
        Coffee is one of the most widely consumed beverages in the world, with 
        a rich and complex history dating back centuries. Originating in 
        Ethiopia, coffee spread to the Arabian Peninsula and then to Europe, 
        eventually becoming a global phenomenon. Today, coffee is available in 
        countless varieties, from classic black coffee to lattes, cappuccinos, 
        and more. Many people rely on coffee as a source of energy and 
        motivation, while others simply enjoy its rich and unique flavor. 
        Whatever your preference, there's no denying that coffee plays an 
        important role in cultures around the world, and its popularity shows 
        no signs of slowing down.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about")