import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Routes, Route, Navigate } from 'react-router-dom'
import Skills from './components/Skills'
import ProjectCard from './components/ProjectCard'
import PersonaCard from './images/PersonaScreenshot.png'
import BulldogImage from './images/BulldogExchange.png'
import ReelMovies from './images/ReelMovies.png'
import { motion, MotionConfig } from 'framer-motion'
import Reveal from './components/utils/Reveal'

const projects = [
  { id: 1, title: 'Persona 5-inspired UI Elements', date:'Summer 2025' , image: PersonaCard, description: 'A collection of UI elements inspired by the Persona 5 game, a popular JRPG known for its unique art style and user interface.', url: 'https://www.figma.com/design/GeNutfigqBLNXn7NMmy8kt/Prototype-Triptych-Panel-3?node-id=1-2&t=B8VYmz238fL6dkQo-1' },
  { id: 2, title: 'Bulldog Marketplace', date:'Spring 2025' ,image: BulldogImage,description: 'A marketplace platform for UGA students to buy and sell items. Sellers can handle price offers and set meeting locations using the Google Maps API.', url: 'https://github.com/tung555/Bulldog-Exchange' },
  { id: 3, title: 'ReelMovies', date:'Fall 2025',image: ReelMovies,description: 'A movie rating and review website developed for my Software Engineering class, using React, MongoDB, and OMDb API.', url: 'https://github.com/JoshuaPerras/rating-reviewBoard' },
]

export default function App(): React.ReactElement {
  return (
    <div className="min-h-screen bg-[#ACC4DC] text-gray-900">
       <NavBar />
      <header className="mx-auto p-6 flex items-center justify-between max-w-6xl">
        
      </header>

      <main className="mx-auto p-6 max-w-6xl">
        <div className="mt-8">
          <Routes>
            <Route path="/" element={<><Hero /><Skills />
             <Reveal>
             <section id="projects" className="mt-20">
                  <h3 className="text-5xl font-semibold mb-10 text-white font-josefin text-shadow-md text-shadow-[#759DC5]  pb-2 border-white">Latest projects</h3>
                  <div className="grid gap-6 md:grid-cols-3">
                    {projects.map((p) => (
                      <ProjectCard key={p.id} title={p.title} date={p.date} image={p.image} description={p.description} url={p.url} />
                    ))}
                  </div>
                </section>
                </Reveal>
            
            
            </>} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </main>

      <Footer />
    </div>
  )
}
