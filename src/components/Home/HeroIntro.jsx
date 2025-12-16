import React from 'react'
import TextAnimation from './TextAnimation'
import SocialBar from '../SocialBar'
import Footer from '../Footer/Footer'



function HeroIntro() {
  return (
    <div className=' w-full h-[calc(100%-60px)] flex justify-center items-center relative'>
              <h1 className='text-white text-3xl sm:text-5xl font-medium Hero'>
                Hello, My Name is <span className='text-purple-300'>Sujal.</span><br />
                <span className='text-purple-400'>&lt;<TextAnimation /> /&gt;</span><br />
                Based in <span className='text-purple-300'>India.</span><br />
              </h1>
              <SocialBar
                className="absolute bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0  text-white text-3xl"
                iconClass="hover:text-purple-300 transition"
              />
              <Footer className='absolute bottom-6 left-1/2 -translate-x-1/2 sm:right-auto sm:left-6 sm:translate-x-0'/>
            </div>
  )
}

export default HeroIntro