import React, { useState } from 'react'
import SkillCluster from './SkillCluster'

function SkillContent() {

    const [activeSkill , setActiveSkill ] = useState(null);

    return (
        <div className='w-full h-[calc(100%-60px)] flex justify-center items-center relative overflow-hidden '>
           <div className='h-full w-1/2 '>
            <SkillCluster Select={setActiveSkill}/>
           </div>
{/* card is here ... */}
         <div
        className={`
          absolute top-1/2 -translate-y-1/2 right-0
          hidden xl:block w-1/4 h-4/5 p-5
          border border-gray-400 rounded-2xl
          transition-transform duration-500 bg-black/40
          ${activeSkill ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        {/* close button */}
        <button
          onClick={() => setActiveSkill(null)}
          className="absolute top-3 right-3 text-xl text-white"
        >
          ✕
        </button>

        {activeSkill && (
  <div className="mt-10 text-white space-y-6">

    {/* Icon */}
    <div className="flex justify-center">
      <activeSkill.icon
        className="text-6xl"
        style={{ color: activeSkill.color }}
      />
    </div>

    {/* Skill name */}
    <h3 className="text-2xl font-semibold text-center">
      {activeSkill.label}
    </h3>

    {/* Percentage bar (optional, safe if missing) */}
    {activeSkill.level && (
      <div className="w-full">
        <div className="flex justify-between text-sm mb-1">
          <span>Proficiency</span>
          <span>{activeSkill.level}%</span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${activeSkill.level}%`,
              backgroundColor: activeSkill.color,
            }}
          />
        </div>
      </div>
    )}

    {/* Points */}
    {activeSkill.points && (
      <ul className="space-y-2 text-sm list-disc list-inside opacity-90">
        {activeSkill.points.map((point, idx) => (
          <li key={idx}>{point}</li>
        ))}
      </ul>
    )}

  </div>
)}

      </div>
        </div>


) 
        
}

export default SkillContent