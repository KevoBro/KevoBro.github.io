import React from 'react'
import {motion} from 'framer-motion'

interface ProjectCardProps {
  title: string
  date: string
  image?: string
  description: string
  url: string
}

export default function ProjectCard({ title, date, image, description, url }: ProjectCardProps): React.ReactElement {
  return (
    <motion.article
    initial={{scale: 1}}
    whileHover={{scale: 1.01}}
    className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition h-fit md:w-[20em] w-[16em] text-[#759DC5]">
      <h4 className="font-semibold text-xl mb-.5 font-outfit ">{title}</h4>
      <h6 className="font-normal text-lg mb-3 font-outfit ">{date}</h6>
      {image && <img src={image} alt={title} className="mb-6 rounded-md h-40 w-full object-cover" />}
      <div className="">
      <p className="text-md text-black font-josefin mb-4 h-[5em] overflow-y-auto">{description}</p>
      </div>
      <div className="flex justify-between">
        <a href={url} className="font-black font-josefin text-blue-800 hover:underline">View project</a>
        
      </div>
    </motion.article>
  )
}
