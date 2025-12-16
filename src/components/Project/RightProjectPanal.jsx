import React from 'react'

function RightProjectPanal({ id, tech, repo, demo }) {
    return (
        <div className='p-5 pb-10 h-full text-white flex flex-col justify-between  '>
            <div>
                <div className='text-2xl pb-2.5 text-purple-400 '>Technology Stack</div>
                <div className='flex flex-wrap gap-2.5 text-purple-300'>{tech.map((e) => {
                    const Icon = e.icon
                    return (
                        <div
                            key={e.id}
                            className="px-2.5 py-1 min-w-16 text-center rounded-2xl border border-gray-400 hover:bg-gray-400/20 flex items-center gap-2"

                        >
                            <Icon style={{ color: e.color }} />
                            {e.label}
                        </div>
                    )
                })}</div>
            </div>
            <div className='flex flex-col items-center gap-5 pb-10'>
                <a
                    href={demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-30 h-10 rounded-lg border border-gray-400 hover:bg-purple-900 flex justify-center items-center text-purple-300 transition
    ${(id === 0 || id === 4) ? 'hidden' : ''}`}
                >
                    Live Demo
                </a>
                <a
                    href={repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-30 h-10 rounded-lg border border-gray-400 hover:bg-purple-900 flex justify-center items-center text-purple-300  transition "
                >
                    Github Repo
                </a>
            </div>
        </div>
    )
}

export default RightProjectPanal