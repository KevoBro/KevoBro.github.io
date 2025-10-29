import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Reveal from './utils/Reveal';
import CameraPic from '/images/KevinHoldingCamera.jpg';
import EboardPic from '/images/EboardPic.jpg';
import MediaNight from '/images/MediaNight.jpg';



const images = [
  {
    original: CameraPic,
    thumbnail: CameraPic,
  },
  {
    original: EboardPic,
    thumbnail: EboardPic,
  },
  {
    original: MediaNight,
    thumbnail: MediaNight,
  },
];

export default function About(): React.ReactElement {
  return (
    <Reveal>
    <div className="flex gap-8">
    <section id="about" className=" bg-white/35 rounded-lg py-8 shadow-md w-2xl px-8 border-3 border-[#759DC5]">
      <h3 className=" text-3xl font-outfit font-semibold mb-6 text-[#759DC5] text-shadow-gray-600 text-shadow-xl">More about me!</h3>
      <h2 className="text-2xl font-outfit font-medium mb-9 text-[#759DC5] leading-8 text-shadow-xl">I am a Comp Sci undergraduate based in Lawrenceville, GA</h2>
      <p className="text-gray-700 font-josefin leading-6">Ever since I was young, I have always aimed to express the limitless ideas in my mind through creative outlets and projects. Since then, I have turned my attention to convey that through my work as a developer, creating engaging and user-friendly applications. In my free-time, I enjoy spending quality time with friends and families and pursue my hobbies such as content creation, gaming, and working out.</p>
      <p className="text-gray-700 font-josefin mt-6 leading-6 pb-8">At my time at the University of Georgia, I have gained valuable leadership experience through the UGA Vietnamese Student Association, where I was able to contribute creative digital media to the organization and help promote cultural events as an Executive Board member and Digital Media Director.</p>
    </section>
    <div className="w-xl h-fit pt-6 pb-2 px-3 shadow-md bg-white/35 rounded-lg border-3 border-[#759DC5]">
    <ImageGallery className="w-fit h-fit" items={images} />
    </div>
    </div>
    </Reveal>
  )
}
