/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion';
import { styles} from '../style'
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
      <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0  xs:top-20 top-[170px] max-w-7xl mx-auto flex flex-row items-start gap-5 mb-5 `}>
        <div className='flex flex-col justify-center items-center mt-5' >
        <div className='w-5 h-5 rounded-full bg-[#915eff]' />
        <div className='w-1 sm:h-90 h-40 violet-gradient' />
        </div>
        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>Hi, I'm 
          <span className='text-[#915eff]'>Karanam Karthik</span></h3>
          <p className={`${styles.heroSubText}mt-2 text-white-100`}>Versatile and ambitious computer science
            engineer, <br className='sm:hidden ls:hidden lg:block' /> with experience in front-end and <br className='sm:hidden lg:block' />backend development</p>
        </div>
      </div>
      <div className=' xs:overflow hidden w-full'>       
        <ComputersCanvas />
</div>
        <div className='absolute xs:bottom-20  bottom-[160px] w-full flex justify-center items-center'>
          <a href = '#about'>
            <div className=' w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer '>
            <motion.dev
            animate= {{
              y:[0,23,0]
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1.5
            }}
            className='w-4 h-4 rounded-full bg-[#915eff] mb-5'
            />

            </div>
          </a>
        </div>
    </section>
  )
}

export default Hero