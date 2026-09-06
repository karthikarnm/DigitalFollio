/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { Wrapper } from "../HOC";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from '../style';

import { textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="mb-8">
        <p className={styles.sectionSubText}>Technical stack</p>
        <h2 className={styles.sectionHeadText}>Technical Skills</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-3 max-w-6xl mx-auto pb-8">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-white text-[14px] sm:text-[16px] font-medium shadow-md shadow-primary/20"
          >
            {tech.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default Wrapper(Tech, "tech");