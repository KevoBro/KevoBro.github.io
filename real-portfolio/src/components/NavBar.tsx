import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {AnimatePresence, motion, MotionConfig} from 'framer-motion'
import LinkedinSVG from '../assets/whiteLinkedIn.svg'
import GithubSVG from '../assets/GitHub_dark.svg'
import KHLogo from '/images/KHLogo.png'
import iconClose from '../assets/icons-close.svg'


const base = 'text-sm px-3 rounded-md'


export default function NavBar(): React.ReactElement {

 const [isOpen, setIsOpen] = useState(false);

const handleClick = () => {
  setIsOpen(!isOpen);
};

  return (
    

    
    <motion.div 
    initial={{y:-2}}
    whileHover={{y:0, boxShadow: "0 0 12px #FFFFFF"}}
    transition={{type:"spring", stiffness:100, damping:20, duration:0.3}}
    
    className="shadow-md z-[9999] relative bg-[#759DC5] min-h-24">
    <MotionConfig
    transition = {{duration:0.2, ease:"easeInOut"}}
    >

      <div className="mx-auto flex justify-between items-center max-w-6xl">
        <motion.div initial={{scale:1}} whileHover={{scale:1.02}} whileTap={{scale:0.95}}>
        <NavLink to="/" className="inline-block" >
          <img src={KHLogo} alt="Logo" className="h-24 w-24 rounded-md border-2 border-white bg-white" />
        </NavLink>
        
        </motion.div>
        <motion.button onClick={handleClick} className="md:hidden relative h-20 w-20 mr-4"
        animate={isOpen ? "open" : "closed"}>
           <MotionConfig
        transition = {{duration:0.5 , ease:"easeInOut"}}
        >
        <motion.span
        style={{left: "50%",
        top: "35%",
        x: "-50%",
        y: "-50%" 
        }}
        className="absolute h-1 w-10 bg-white"
        variants={{
          open: {rotate: ["0deg","0deg","45deg"],

            top:["35%","50%","50%"],


          },
          closed: {rotate: ["45deg","0deg","0deg"],
            top:["50%","50%","35%"],
          },


        }}
        />

        <motion.span
        style={{left: "50%",
        top: "50%",
        x: "-50%",
        y: "-50%", 
        }}
        className="absolute h-1 w-10 bg-white"
        variants={{
          open: {rotate: ["0deg","0deg","-45deg"],

          },
          closed: {rotate: ["-45deg","0deg","0deg"],
          },


        }}
        />
        <motion.span
        style={{left: "50%",
        bottom: "35%", 
        x: "-50%",
        y: "50%"
        }}
        className="absolute h-1 w-10 bg-white"
        variants={{
          open: {rotate: ["0deg","0deg","45deg"],

            bottom:["35%","50%","50%"],


          },
          closed: {rotate: ["45deg","0deg","0deg"],
            bottom:["50%","50%","35%"],
          },


        }}
        />
        </MotionConfig>
        
        </motion.button>


        <AnimatePresence>
  {isOpen && (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="bg-[#759DC5] flex flex-col content-end fixed right-0 p-4 md:p-2 top-24 md:top-0 md:static md:flex-row md:justify-end items-center gap-10 md:w-full z-50"
    >
      <NavLink to="/about" className="font-outfit text-xl text-slate-100">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          About me
        </motion.div>
      </NavLink>
      <NavLink to="/projects" className="font-outfit text-xl text-slate-100">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Projects
        </motion.div>
      </NavLink>
      <NavLink to="/contact" className="font-outfit text-xl text-slate-100">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          Contact
        </motion.div>
      </NavLink>
      <a href="https://www.linkedin.com/in/kevin-huynh-van" target="_blank">
        <motion.img
          src={LinkedinSVG}
          alt="LinkedIn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </a>
      <a href="https://github.com/KevoBro" target="_blank">
        <motion.img
          src={GithubSVG}
          alt="GitHub"
          className="w-10"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        />
      </a>
    </motion.nav>
  )}
</AnimatePresence>

    

        <nav className="bg-[#759DC5] flex-col content-end absolute right-0 p-4 md:p-2 top-24 md:top-0 md:static md:flex-row md:justify-end items-center gap-10 md:w-full hidden md:flex">
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
