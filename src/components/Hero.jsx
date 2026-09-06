/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { motion } from 'framer-motion';
import { styles} from '../style'
import { ComputersCanvas } from './canvas';
const Hero = () => {
  return (
    <section className='relative w-full min-h-screen mx-auto'>
      <div className={`${styles.paddingX} max-w-7xl mx-auto pt-28 pb-12 sm:pt-32 lg:pt-36`}>
        <div className='flex items-start gap-5 max-w-5xl'>
          <div className='flex flex-col justify-center items-center pt-2'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]' />
            <div className='w-1 h-32 sm:h-40 violet-gradient' />
          </div>
          <div className='max-w-3xl'>
            <h3 className={`${styles.heroHeadText} text-white`}>
              Hi, I'm <span className='text-[#915eff]'>Karthik Karanam</span>
            </h3>
            <p className={`${styles.heroSubText} mt-5 text-white-100`}>
              Data Engineer | Databricks, PySpark, Python, AWS <br className='sm:hidden lg:block' />
              Building GenAI-powered data platforms (RAG, Agents) <br className='sm:hidden lg:block' />
              Databricks Certified GenAI Engineer
            </p>
          </div>
        </div>
      </div>

      <div className='xs:overflow hidden w-full'>
        <ComputersCanvas />
      </div>

      <div className='absolute xs:bottom-20 bottom-10 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 cursor-pointer'>
            <motion.div
              animate={{ y: [0, 23, 0] }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 1.5,
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
