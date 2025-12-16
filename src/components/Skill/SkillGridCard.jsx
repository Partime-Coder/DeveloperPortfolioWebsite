import React from 'react'

function SkillGridCard({ skill }) {
  const Icon = skill.icon

  return (
    <div
      className="
        border border-gray-700 rounded-2xl p-6
        bg-black/40 backdrop-blur
        transition-all duration-500
      "
    >
      {/* icon */}
      <div className="flex items-center gap-4 mb-4">
        <Icon
          className="text-4xl"
          style={{ color: skill.color }}
        />
        <h3 className="text-lg font-semibold">
          {skill.label}
        </h3>
      </div>

      {/* progress */}
      {skill.level && (
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-1">
            <span>Proficiency</span>
            <span>{skill.level}%</span>
          </div>
          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: `${skill.level}%`,
                backgroundColor: skill.color,
              }}
            />
          </div>
        </div>
      )}

      {/* points */}
      {skill.points && (
        <ul className="list-disc list-inside text-sm space-y-1 opacity-90">
          {skill.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SkillGridCard
