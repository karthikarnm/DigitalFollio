/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import {Tilt} from 'react-tilt';
import { styles } from '../style';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { Wrapper } from '../HOC';

const ServiceCard = ({index, title, icon}) =>{
  return(
    <Tilt className='xs:w-[250px] w-full' >
      <motion.div
      variants={fadeIn('right','spring', 0.5 * index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
        options = {{
          max : 45,
          scale: 1,
          speed : 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly flex-col'
        >
        <img src={icon} alt={title} className='w-16 h-16 object-contain' />
        <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>

        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants= { textVariant() }>
        <p className= {styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('', '', 0.1, 1)} className='
      mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I am a Data & Platform Engineer specializing in Databricks with hands-on expertise in data pipeline engineering, infrastructure-as-code, and identity/access governance. Databricks Certified Generative AI Engineer Associate with production experience building RAG pipelines and multi-agent systems. Passionate about building scalable enterprise solutions on cloud platforms like AWS with Python, PySpark, and Terraform.
      </motion.p>
      <div className=' mt-20 flex flex-row flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default Wrapper(About, "about");
