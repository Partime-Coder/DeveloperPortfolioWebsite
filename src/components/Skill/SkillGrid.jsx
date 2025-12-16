import React from 'react'
import { Skills } from './SkillData'
import SkillGridCard from './SkillGridCard'


function SkillGrid() {
   const skill = Object.values(Skills)

  return (
    <div className="py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skill.map((skill) => (
          <SkillGridCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  )
}

export default SkillGrid