/* eslint-disable no-undef */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import Karanam_Karthik from "../assets/ResumeDownload/Karanam_Karthik.pdf"
import { Wrapper } from '../HOC'
import { fadeIn, textVariant } from '../utils/motion';

const Resume = () =>{

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Want to see my Resume </p>
                <h2 className={styles.sectionHeadText}>Download Here</h2>
            </motion.div>
            <a
                href={Karanam_Karthik}
                download="Resume_Pdf"
                target="_blank"
                rel="noreferrer"
            >
                <button className="bg-tertiary py-3 px-8 md-6 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">Resume</button>
            </a>
        </>
    )
}

export default Wrapper(Resume, "resume")