import React, {useRef, useEffect, useState} from 'react'
import {motion, useInView, useAnimation, MotionConfig} from 'framer-motion'

const Reveal: React.FC<{children: React.ReactNode}> = ({children}) => {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start({opacity: 1, y: 0})
    } 
  }, [controls, inView])

  return (
    <motion.div ref={ref} animate={controls} initial={{opacity: 0, y: 100}} transition={{duration: 0.8, ease: 'easeInOut'}}>
      {children}
    </motion.div>
  )
}

export default Reveal
