/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../style';
import { educations } from '../constants';
import { Wrapper } from '../HOC';
import { textVariant } from '../utils/motion';

const EducationCard = ({edu}) => (
    <VerticalTimelineElement
        contentStyle={{ background: '#1d1836', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #232631' }}
        date={edu.date}
        iconStyle={{ background: edu.iconBg }}
        icon={
            <div className=' flex justify-center items-center w-full h-full'>
                <img src={edu.icon} alt={edu.description} className='w-[60%] h-[60%] object-contain' />
            </div>
        }l
    >
        <div>
            <h3 className='text-white text-[24px] font-bold'> {edu.name}</h3>
            <p className='text-secondary text-[16px] font-semibold' style={{ margin: 0 }}>{edu.description}</p>
        </div>
        {/* <ul className='mt-5 list-disc ml-5 space-y-2'>
            {exp.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className='text-white-100 text-[14px] pl-1 tracking-wider'>
                    {point}
                </li>
            ))}

        </ul> */}

    </VerticalTimelineElement>
)
    

const Education = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Educational Qualification</p>
                <h2 className={styles.sectionHeadText}>My Education</h2>
            </motion.div>
            <div className='mt-20 flex flex-col-reverse'>
                <VerticalTimeline>
                    {educations.map((edu, index) => (
                        <EducationCard key={index} edu={edu} />

                    ))}
                </VerticalTimeline>
            </div>
        </>   
            )
}

export default Wrapper(Education, 'education')