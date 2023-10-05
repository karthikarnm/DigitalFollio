/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { styles } from '../style';
import { certificates } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';

import { Wrapper } from '../HOC';

const CertificationCard = ({index, title, icon, description}) =>{
  return (
    <Tilt className='xs:w-[250px] w-full' >
   
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col items-center justify-evenly flex-col'
        > 
          <img src={icon} alt={title} className='w-16 h-16 object-contain' /><a href="https://drive.google.com/file/d/1qW5lo6SD9USsuONC-5P180UmspMX_zyl/view?usp=share_link" >Link  </a>
          <h3 className='text-white text-[15px] font-bold text-center'>{title}</h3>
          <motion.p variants={fadeIn('', '', 0.1, 1)} className='
      mt-4 text-secondary text-[5px]'>
  
          </motion.p>

        </div>
      </motion.div>
    
    </Tilt>
  )
}
const Stars = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Certifications I got so far</p>
        <h2 className={styles.sectionHeadText}>My Certifications</h2>
      </motion.div>
     
      <div className=' mt-20 flex flex-row flex-wrap gap-10'>
        {certificates.map((certificate, index) => (
          <CertificationCard key={certificate.title} index={index} {...certificate} />
        ))}
      </div>
    </>
  )
}

export default Wrapper(Stars, "stars");