import React from 'react'
import SocialBar from '../SocialBar'
import AboutCard from './AboutCard'


function AboutContent() {
  return (
    <div className='w-full h-[calc(100%-60px)] flex relative '>
        <div className='w-full sm:w-1/2 h-full  relative flex items-center'>
        <AboutCard/>
        </div>
        <div></div>
        <SocialBar
                className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0  text-white text-3xl"
                iconClass="hover:text-purple-300 transition"
              />
    </div>
  )
}

export default AboutContent