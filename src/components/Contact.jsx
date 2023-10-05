/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import { useState, useRef } from "react"
import { motion } from "framer-motion"
import emailJs from '@emailjs/browser'
import { styles } from "../style"
import { EarthCanvas } from "./canvas"
import { Wrapper } from "../HOC"
import { slideIn } from "../utils/motion"

import  Resume  from "./Resume"
// template_qruq1ji 
// service_5gjaj2u
// xW5NnXCMjXW4lBGaO

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState(
    { name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({...form, [name]: value})

  }
  const handleSubmit = (e) => {
e.preventDefault();
setLoading(true);
    emailJs.send('service_5gjaj2u', 'template_49wbc7j',{
  from_name: form.name,
  from_email: form.email,
  to_name: 'Karanam Karthik',
  to_email: 'karanamkarthi5@gmail.com',
  message: form.message,
}, 'waDCX71fCi35ttqGc').then(() => {
setLoading(false);
alert("Thank you for Your time and message!");
setForm({ name: "", email: "", message: "" })
  

  }, (error) => {
    setLoading(false);
    console.log(error)
    alert("Something went wrong", error);
  }
)}

  return (
    <div className="xl:mt-12 xl flex
    flex-col-reverse  gap-10 overflow-hidden">
      <motion.div variants={slideIn("left", 'tween', 0, 1)}
        className="flex-[0.7] bg-black-100 p-10 rounded-2xl">
        <p className="{styles.sectionSubText} ">Get in Touch
        </p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <form ref={formRef} onSubmit={handleSubmit}
          className="mt-6 flex flex-col gp-8">
          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-4"> Your Name</span>
            <input type="text"
              placeholder="Enter Your Name"
              name="name" value={form.name}
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-5"> Your Email</span>
            <input type="email"
              placeholder="Enter Your Mail"
              name="email" value={form.email}
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
          <label className="flex flex-col mb-4">
            <span className="text-white font-medium mb-4" > If Any Message || Suggestion drop here:</span>
            <textarea 
            rows={5}
              placeholder="message"
              name="message" value={form.message}
              className=" bg-tertiary  text-area py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              onChange={handleChange}
            />
          </label>
<button type="submit" className="bg-tertiary py-3 px-8 md-2 outlined-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl">{loading ? 'Sending...' : 'Send'}</button>
          

        </form>
       

      </motion.div>
      <motion.div variants={slideIn("right", 'tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" >
        <EarthCanvas />
        
      </motion.div>
      <motion.div 
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]" >
        <Resume />
      </motion.div>
    

    </div>
  )
}

export default Wrapper(Contact, "contact")