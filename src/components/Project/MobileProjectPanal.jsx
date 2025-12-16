import React from 'react'

function MobileProjectPanal({ id, title, disc, tech, repo, demo }) {
  return (
    <div className=' w-full h-full p-5 text-white '>



      <div className='w-full h-[60%] pb-2.5 flex flex-col'>
        <div className='text-2xl pb-2.5 shrink-0 text-purple-400'>{title}</div>
        <div className='text-sm sm:text-base overflow-y-auto pr-1 '>
          {disc}
        </div>
      </div>


      <div className='w-full h-[40%] flex flex-col justify-between '>
        <div className='flex-1 overflow-y-auto pr-1 '>
          {/* <div className='text-xl pb-2.5'>Tech Stack</div> */}
          <div className='flex flex-wrap gap-2.5 text-purple-300  '>{tech.map((e) => {
            const Icon = e.icon
            return (
              <div
                key={e.id}
                className='px-2 py-1 min-w-16 text-xs sm:text-base text-center rounded-2xl border border-gray-400 hover:bg-gray-400/20 flex items-center gap-2'
              >
                <Icon style={{ color: e.color }} />
                {e.label}
              </div>
            )
          })}</div>
        </div>
        <div className='flex justify-evenly pt-2.5 '>
          <a
            href={repo}
            target="_blank"
            rel="noopener noreferrer"
            className="w-30  h-9  sm:h-10 text-sm sm:text-base rounded-lg border border-gray-400 hover:bg-purple-900 flex justify-center items-center text-purple-300  transition "
          >
            Github Repo
          </a>
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-30 h-10 rounded-lg border border-gray-400 hover:bg-purple-900 flex justify-center items-center text-purple-300 transition
    ${(id === 0 || id === 4) ? 'hidden' : ''}`}
          >
            Live Demo
          </a>
        </div>
      
      </div>

    </div>
  )
}

export default MobileProjectPanal