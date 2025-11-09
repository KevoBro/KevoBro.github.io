import React from 'react'
import ProjectCard from './ProjectCard'
import PersonaCard from '/images/PersonaScreenshot.png'
import BulldogImage from '/images/BulldogExchange.png'
import ReelMovies from '/images/ReelMovies.png'
import GumballRoom from'/images/GumballRoom.png'
import Reveal from './utils/Reveal'

const projects = [
  { id: 1, title: 'Recreation of TAWOG Living Room', date:'Fall 2025' , image: GumballRoom, description: 'A recreation of the living room from "The Amazing World of Gumball", showcasing various design elements and furniture arrangements.', url: 'https://play.unity.com/en/games/44c69ea8-4cba-431a-97dd-f8bda03e5b2f/the-wattersons-room' },
  { id: 2, title: 'Persona 5-inspired UI Elements', date:'Summer 2025' , image: PersonaCard, description: 'A collection of UI elements inspired by the Persona 5 game, a popular JRPG known for its unique art style and user interface.', url: 'https://www.figma.com/design/GeNutfigqBLNXn7NMmy8kt/Prototype-Triptych-Panel-3?node-id=1-2&t=B8VYmz238fL6dkQo-1' },
  { id: 3, title: 'Bulldog Marketplace', date:'Spring 2025' ,image: BulldogImage,description: 'A marketplace platform for UGA students to buy and sell items. Sellers can handle price offers and set meeting locations using the Google Maps API.', url: 'https://github.com/tung555/Bulldog-Exchange' },
  { id: 4, title: 'ReelMovies', date:'Fall 2025',image: ReelMovies,description: 'A movie rating and review website developed for my Software Engineering class, using React, MongoDB, and OMDb API.', url: 'https://github.com/JoshuaPerras/rating-reviewBoard' },
]

export default function Projects(): React.ReactElement {
  return (
    <Reveal>
    <section id="projects" className="mt-6">
      <h3 className="text-center md:text-left text-3xl md:text-5xl font-semibold mb-6 md:mb-8 text-white font-josefin text-shadow-md text-shadow-[#759DC5]">Recent projects</h3>
      <div className="grid justify-center md:justify-start gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.id} title={p.title} date={p.date} image={p.image} description={p.description} url={p.url} />
        ))}
      </div>
    </section>
    </Reveal>
  )
}
