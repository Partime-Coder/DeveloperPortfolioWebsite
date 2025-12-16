import React from 'react'
import { Typewriter } from 'react-simple-typewriter'


function TextAnimation() {
  return (
    <span className="text-purple-400">
      <Typewriter
        words={[
          'Software Developer',
          'Web Developer',
          'Frontend Developer',
          'UI/UX Developer',
          'JavaScript Developer',
          'React Developer'
        ]}
        loop={0}
        cursor
        cursorStyle="|"
        typeSpeed={50}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </span>
  )
}

export default TextAnimation