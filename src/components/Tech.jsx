/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {BallCanvas}  from "./canvas";
import { Wrapper } from "../HOC";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { styles } from '../style';

import { fadeIn, textVariant } from '../utils/motion';

const Tech = () => {
  return (
    <>
    <motion.div variants= { textVariant() } className="mb-6">
        <p className= {styles.sectionSubText}>Skills I got</p>
        <h2 className={styles.sectionHeadText}>Overall SkillSet</h2>
      </motion.div>
<div className=" flex flex-row flex-wrap justify-center gap-5">
  {technologies.map((tech) => (
    <div className="w-28 h-28 " key={tech.name}>
      <BallCanvas icon={tech.icon} tech={tech} />
    </div>
  ))}
</div>
    </>
  )
} 

export default Wrapper(Tech, "tech");