import React, { useState } from 'react'
import './SkillCluster.css'
import { FaHtml5, FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiReactrouter, SiRedux, SiPostman, SiGit, SiGithub } from 'react-icons/si';
import { BiServer } from 'react-icons/bi';
import { Skills } from './SkillData';

function SkillCluster({Select}) {

// const [btn , setBtn] = useState(false);

  return (
    <div className='absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2  w-32 h-32 sm:w-40 sm:h-40 rounded-full border border-gray-400  flex justify-center items-center rotating-wrapper '>
      <h2 className='text-purple-300 font-semibold text-center text-[20px] sm:text-2xl title-rotate'>Frontend <br />
        Skill <br />
        Cluster
      </h2>
      <div
        onClick={() => Select(Skills.HTML)}
      className="Node hover:bg-purple-300 transition-colors duration-500 HTMLNode w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl tir"><FaHtml5 className='text-[#E34F26] title-rotate' />
      
      </div>



      <div
       onClick={(e) => {
      e.stopPropagation()
      Select(Skills.CSS)
    }}
      className="Node hover:bg-purple-300 transition-colors duration-500 CSSNode w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl"><FaCss3Alt className='text-[#1572B6] title-rotate' />
        <div
        onClick={(e) => {
      e.stopPropagation()
      Select(Skills.TAILWIND)
    }}
        className="Node hover:bg-purple-300 transition-colors duration-500 TailwindNode w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl" ><SiTailwindcss className='text-[#38BDF8] title-rotate' /></div>
        <div className="Nodeline  TailwindLine border border-gray-400"></div>
      </div>


      <div
       onClick={(e) => {
      e.stopPropagation()
      Select(Skills.GIT)
    }}
      className="Node GitNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl">< SiGit className='text-[#F05032] title-rotate' />
        <div
         onClick={(e) => {
      e.stopPropagation()
      Select(Skills.GITHUB)
    }}
        className="Node GithubNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl"><SiGithub className='text-white title-rotate' /></div>
        <div className="Nodeline GithubLine border border-gray-400"></div>
      </div>


      <div 
      onClick={() => Select(Skills.JS)}
      className="Node JSNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl">< SiJavascript className='text-[#F7DF1E] title-rotate' /></div>


      <div
       onClick={(e) => {
      e.stopPropagation()
      Select(Skills.REACT)
    }} 
      className="Node ReactNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl">< FaReact className='text-[#61DAFB] title-rotate' />
      
        <div
         onClick={(e) => {
      e.stopPropagation()
      Select(Skills.ROUTER)
    }}
        className="Node RouterNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl"><SiReactrouter className='text-[#CA4245] title-rotate' />
        
        </div>
        <div
         onClick={(e) => {
      e.stopPropagation()
      Select(Skills.REDUX)
    }}
        className="Node ReduxNode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl"><SiRedux className='text-[#764ABC] title-rotate' /></div>
        <div className="Nodeline RouterLine border border-gray-400"></div>
        <div className="Nodeline ReduxLine border border-gray-400"></div>
      </div>


      <div 
      onClick={() => Select(Skills.API)}
      className="Node APINode hover:bg-purple-300 transition-colors duration-500 w-16 h-16 rounded-full absolute border border-gray-400 flex justify-center items-center text-4xl">< BiServer className='text-[#FF6C37] title-rotate' /></div>


      <div className='line HtmlLine  border border-gray-400'></div>
      <div className="line CSSLine border border-gray-400"></div>
      {/* <div className="line TailwindLine border border-gray-400"></div> */}
      <div className="line GitLine border border-gray-400"></div>
      {/* <div className="line GithubLine border border-gray-400"></div> */}
      <div className="line JSLine border border-gray-400"></div>
      <div className="line ReactLine border border-gray-400"></div>
      {/* <div className="line RouterLine border border-gray-400"></div> */}
      {/* <div className="line ReduxLine border border-gray-400"></div> */}
      <div className="line APILine border border-gray-400"></div>

    </div>

    
  )

}

export default SkillCluster
