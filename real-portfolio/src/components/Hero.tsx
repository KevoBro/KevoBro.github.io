import React from 'react'
import {motion, MotionConfig, useInView, useAnimation} from 'framer-motion'
import Reveal from './utils/Reveal'
import ProfilePic from '../images/ProfilePicture.jpg'

export default function Hero(): React.ReactElement {
  return (
    <Reveal>
    <section className="py-6 md:flex md:justify-start rounded-lg max-w-6xl gap-16">
      <div className=" max-w-2xl mr-4 flex-col items-start rounded-lg">
        <h1 className="text-7xl 2xl:text-8xl font-black font-outfit mt-2 mb-6 text-white text-shadow-[#759DC5] text-shadow-md">Kevin Huynh</h1>
        <h2 className="text-5xl 2xl:text-6xl font-bold tracking-tight mb-4 text-white">Hi — I build beautiful web experiences.</h2>
        <p className="text-gray-600 font-semibold text-2xl tracking-wide leading-12 mb-6 text-shadow-2xs">I'm a fullstack developer focused on building accessible, performant, and intuitive interfaces. Having personal interests in photography, video-editing, and game design, I have a passion for creating immersive digital experiences.</p>
      </div>
      <div className="mt-8 md:mt-0 shadow-2xl py-3 px-3 backdrop-blur-xl bg-black/10 rounded-md border-8 border-white/30 flex-col h-fit">
        <img src={ProfilePic} alt="Picture of the developer" className="w-56 h-auto rounded-lg shadow-lg mx-auto object-cover" />
        <a 
          className="no-underline flex-col items-center" href="/src/assets/KevinHuynhResume.pdf" download>
          <motion.h1 
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.03, backgroundColor: "#8AA2D8" }}
          whileTap={{ scale: 0.95, backgroundColor: "#5A92C8" }}
          transition={{ duration: 0.2 }}

          className="my-2 text-white text-shadow-lg text-center font-outfit font-bold text-xl align-inline py-2 bg-[#759DC5] rounded-md border-3 border-gray-200 shadow-lg">
          View Resume!
          </motion.h1> 
        </a>
      </div>
    </section>
    </Reveal>
  )
}
