/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {BallCanvas}  from "./canvas";
import { Wrapper } from "../HOC";
import { technologies } from "../constants";


const Tech = () => {
  return (
<div className=" flex flex-row flex-wrap justify-center gap-10">
  {technologies.map((tech) => (
    <div className="w-28 h-28 " key={tech.name}>
      <BallCanvas icon={tech.icon} tech={tech} />
    </div>
  ))}
</div>
  )
} 

export default Wrapper(Tech, "tech");