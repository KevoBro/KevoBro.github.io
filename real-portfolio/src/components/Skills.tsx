import React from 'react'
import SkillCard from './SkillCard'
import ReactSVG from '../assets/React_dark.svg'
import HTMLSVG from '../assets/html5.svg'
import JavaScriptSVG from '../assets/javascript.svg'
import CSSSVG from '../assets/css_old.svg'
import JavaSVG from '../assets/java.svg'
import CSVG from '../assets/c.svg'
import CSharpSVG from '../assets/csharp.svg'
import PythonSVG from '../assets/python.svg'
import NodeSVG from '../assets/nodejs.svg'
import MongoSVG from '../assets/mongodb.svg'
import SQLSVG from '../assets/mysql.svg'
import NextSVG from '../assets/nextjs_icon_dark.svg'
import ViteSVG from '../assets/vitejs.svg'
import MotionSVG from '../assets/motion.svg'
import GitSVG from '../assets/git.svg'
import TypeScriptSVG from '../assets/typescript.svg'
import PostmanSVG from '../assets/postman.svg'
import UnitySVG from '../assets/unity.svg'
import BlenderSVG from '../assets/blender.svg'
import PremiereSVG from '../assets/premiere.svg'
import LightroomSVG from '../assets/lightroom.svg'
import Reveal from './utils/Reveal'


const languageSkills = [
  { id: 1, title: 'HTML', image: HTMLSVG },
  { id: 2, title: 'JavaScript', image: JavaScriptSVG },
  { id: 3, title: 'CSS', image: CSSSVG },
  { id: 4, title: 'Java', image: JavaSVG },
  { id: 5, title: 'C Language', image: CSVG },
  { id: 6, title: 'C# Language', image: CSharpSVG },
  { id: 7, title: 'Python', image: PythonSVG },
  { id: 8, title: 'Vite', image: ViteSVG },
  { id: 9, title: 'TypeScript', image: TypeScriptSVG },
]

const serverSkills = [
  { id: 1, title: 'Node.js', image: NodeSVG },
  { id: 2, title: 'MongoDB', image: MongoSVG },
  { id: 3, title: 'MySQL', image: SQLSVG },
  { id: 4, title: 'Next.js', image: NextSVG },
]

const toolSkills = [
  { id: 1, title: 'React', image: ReactSVG },
  { id: 2, title: 'Motion', image: MotionSVG },
  { id: 3, title: 'Git', image: GitSVG },
  { id: 4, title: 'Postman', image: PostmanSVG },
  { id: 5, title: 'Unity', image: UnitySVG },  

]

const creativeSkills = [
  { id: 1, title: 'Blender', image: BlenderSVG },
  { id: 2, title: 'Premiere Pro', image: PremiereSVG },
  { id: 3, title: 'Lightroom', image: LightroomSVG },

]


export default function Skills(): React.ReactElement {
  return (
    <section id="skills" className="mt-20 border-y-2 py-8 border-white font-josefin">
      <Reveal>
      <h3 className="text-4xl font-bold mb-6 text-white text-shadow-[#759DC5] text-shadow-lg">Languages</h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {languageSkills.map((s) => (
          <SkillCard key={s.id} title={s.title} image={s.image} />
        ))}
    
      </div>
      </Reveal>
      <Reveal>
       <h3 className="text-4xl font-bold my-6 text-white text-shadow-[#759DC5] text-shadow-lg ">Server-side</h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {serverSkills.map((s) => (
          <SkillCard key={s.id} title={s.title} image={s.image} />
        ))}

      </div>
      </Reveal>
      <Reveal>
       <h3 className="text-4xl font-bold my-6 text-white text-shadow-[#759DC5] text-shadow-lg ">Tools</h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {toolSkills.map((s) => (
          <SkillCard key={s.id} title={s.title} image={s.image} />
        ))}
        
      </div>
      </Reveal>
        <Reveal>
       <h3 className="text-4xl font-bold my-6 text-white text-shadow-[#759DC5] text-shadow-lg">Creative</h3>
      <div className="flex gap-6 justify-center flex-wrap">
        {creativeSkills.map((s) => (
          <SkillCard key={s.id} title={s.title} image={s.image} />
        ))}
      </div>
      </Reveal>
    </section>
    
  )
}
