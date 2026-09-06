/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { experiences } from '../constants';
import { Wrapper } from '../HOC';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({exp})=>(
  <VerticalTimelineElement
    contentStyle={{
      background: '#1d1836',
      color: '#fff',
      boxShadow: 'none',
      borderRadius: '18px',
      padding: '18px 24px 18px 24px',
      border: '1px solid rgba(255,255,255,0.06)',
      marginLeft: '0'
    }}
    contentArrowStyle={{ borderRight: '7px solid #1d1836' }}
    date={exp.date}
    iconClassName='vertical-timeline-icon-center'
    iconStyle={{
      background: exp.iconBg,
      boxShadow: '0 0 0 8px rgba(255,255,255,0.04)',
      width: '72px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '0',
      left: '50%',
      transform: 'translateX(-50%)'
    }}
    icon={
      <div className='flex justify-center items-center w-full h-full'>
        <img src={exp.icon} alt={exp.company_name} className='w-[58%] h-[58%] object-contain' />
      </div>
    }
  >
    <div className='mb-4'>
      <h3 className='text-white text-[28px] sm:text-[32px] font-black leading-tight'> {exp.title}</h3>
      <p className='text-secondary text-[20px] sm:text-[22px] font-semibold mt-2' style={{margin:0}}>{exp.company_name}</p>
    </div>
    <ul className='list-disc ml-5 space-y-3'>
      {exp.points.map((point, index)=>(
        <li
          key={`experience-point-${index}`}
          className='text-white-100 text-[17px] sm:text-[18px] leading-relaxed pl-1 tracking-wide'>
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)



const Experience = () => {
  return ( 
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
      <VerticalTimeline>
        {experiences.map((exp, index)=>(
          <ExperienceCard key={index} exp={exp} />

        ))}
      </VerticalTimeline>
      </div>
    </>
  )
}

export default Wrapper(Experience,'work')