import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"

import 'react-vertical-timeline-component/style.min.css'

import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from "../utils/motion"

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
     contentStyle={{ background: "#fff", color: '#fff'}}
     contentArrowStyle={{ borderRight: '7px solid #fff' }}
     iconStyle={{ background: experience.iconBg}}
     icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
     }
  >
    <div>
      <h3 className="text-secondary text-[25px] font-bold">
        {experience.title}
      </h3>
      <p className="text-primary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>

    <ul className='my-3 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-primary text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

      <p className="text-primary text-[16px] font-semibold" style={{ margin: 0 }}>
        {experience.date}
      </p>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Technical work and projects</p>
        <h2 className={styles.sectionHeadText}>Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "experience")