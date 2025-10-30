import React from 'react'
import { NavLink } from 'react-router-dom'
import {motion, MotionConfig} from 'framer-motion'
import LinkedinSVG from '../assets/whiteLinkedIn.svg'
import GithubSVG from '../assets/GitHub_dark.svg'
import KHLogo from '/images/KHLogo.png'

const base = 'text-sm px-3 rounded-md'

export default function NavBar(): React.ReactElement {
  return (
    
    <motion.div 
    initial={{y:-2}}
    whileHover={{y:0, boxShadow: "0 0 12px #FFFFFF"}}
    transition={{type:"spring", stiffness:100, damping:20, duration:0.3}}
    
    className="shadow-md z-10 bg-[#759DC5]">
    <MotionConfig
    transition = {{duration:0.2, ease:"easeInOut"}}
    >

      <div className="mx-auto flex justify-between items-center max-w-6xl">
        <motion.div initial={{scale:1}} whileHover={{scale:1.02}} whileTap={{scale:0.95}}>
        <NavLink to="/" className="inline-block" >
          <img src={KHLogo} alt="Logo" className="h-24 w-24 rounded-md border-2 border-white bg-white" />
        </NavLink>
        </motion.div>
        <nav className="flex justify-end items-center gap-10 w-full">
      <NavLink to="/about" className="font-outfit text-xl text-slate-100" ><motion.div initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>About me</motion.div></NavLink>
      <NavLink to="/projects" className="font-outfit text-xl text-slate-100" ><motion.div initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Projects</motion.div></NavLink>
      <NavLink to="/contact" className="font-outfit text-xl text-slate-100" ><motion.div initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}>Contact</motion.div></NavLink>
      <a href="https://www.linkedin.com/in/kevin-huynh-van" className="" target="_blank" ><motion.img src={LinkedinSVG} alt="LinkedIn" initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}></motion.img></a>
      <a href="https://github.com/KevoBro" className="" target="_blank" ><motion.img className="w-10 " src={GithubSVG} alt="GitHub" initial={{scale:1}} whileHover={{scale:1.05}} whileTap={{scale:0.95}}></motion.img></a>
        </nav>
      </div>

    </MotionConfig>
    </motion.div>
   
  )
}
