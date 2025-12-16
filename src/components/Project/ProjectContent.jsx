import React, { useState } from 'react'
import Screen from '../../assets/Icon/Screen.png'
import { projects } from './ProjectData'
import PcPreview from './PcPreview'
import MobilePreview from './MobilePreview'
import LeftProjectPanal from './LeftProjectPanal'
import RightProjectPanal from './RightProjectPanal'
import MobileProjectPanal from './MobileProjectPanal'



function ProjectContent() {

   const [index , setIndex] = useState(0);

   const project = projects[index];




  return (
      <div className='w-full h-[calc(100%-60px)] flex relative '>
         <img src={Screen} alt="screen" className='absolute bottom-10 left-1/2 -translate-x-1/2  w-72 sm:w-100'  /> 
         <div className="PC-Container w-57 sm:w-78 h-36 sm:h-49  border-red-600 absolute bottom-24 sm:bottom-30  left-[calc(50%-2px)] sm:left-[50%] -translate-x-1/2 -z-20 ">
         <PcPreview image={project.pcImage}/>
         </div>
         <div className="Mobile-Container w-[54px] sm:w-[73px] h-28 sm:h-39 rounded-lg  border-red-600 absolute bottom-[41px]  left-[calc(50%+117px)] sm:left-[calc(50%+162px)] -translate-x-1/2 -z-10">
         <MobilePreview image={project.mobileImage}/>
         </div> 


         <div className='hidden sm:block sm:w-[48%] sm:h-[60%] xl:w-[33%] xl:h-[93%]  rounded-2xl bg-black/20 absolute'>
            <LeftProjectPanal
            title={project.title}
            disc={project.description} />
         </div>
         <div className='hidden sm:block sm:w-[48%] sm:h-[60%] xl:w-[33%] xl:h-[93%]  rounded-2xl bg-black/20 absolute right-0'>
            <RightProjectPanal
            id={project.id}
            tech={project.tech}
            repo={project.github}
            demo={project.live}/>
         </div>
         <div className=' sm:hidden w-full h-[65%] rounded-2xl bg-black/20 absolute '>
           <MobileProjectPanal
           id={project.id}
           title={project.title}
            disc={project.description}
           tech={project.tech}
            repo={project.github}
            demo={project.live}
           />
         </div>

          <button className='absolute origin-center text-3xl bottom-10  left-[calc(50%+40px)]  bg-purple-300 text-purple-600 flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer' onClick={() => setIndex((index + 1) % projects.length)}>
        &gt; 
      </button>
          <button className='absolute origin-center text-3xl bottom-10 left-[calc(50%-80px)]  bg-purple-300 text-purple-600 flex justify-center items-center w-10 h-10 rounded-[50%] cursor-pointer' onClick={() => setIndex((index - 1 + projects.length ) % projects.length)}>
        &lt;
      </button>
        </div>
  )
}

export default ProjectContent