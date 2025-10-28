import React from 'react'
import {motion} from 'framer-motion'

interface SkillCardProps {
  title: string
  image: string
}
  
export default function SkillCard({ title, image }: SkillCardProps): React.ReactElement {
  return (
  <motion.div 
  initial={{ scale: 1,  }} 
  whileHover={{ scale: 1.03, boxShadow: "0 0 8px #759DC5" }}
  transition={{ duration:.3 }}
   className="p-3 bg-white rounded-lg shadow-sm flex items-center gap-4 min-w-[8rem]">
      <img src={image} alt={`${title} logo`} className="h-[2em] w-auto" />
      <h4 className="font-semibold font-josefin text-3xl truncate">{title}</h4>
    </motion.div>
  )
}
