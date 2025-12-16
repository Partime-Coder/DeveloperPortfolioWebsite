import React from 'react'

function AboutCard() {
  return (
    <div  className="
         w-full h-[80%] sm:h-[90%]
    rounded-lg text-white
    p-4 pr-3
    overflow-y-auto

    [&::-webkit-scrollbar]:w-1.5
    [&::-webkit-scrollbar-track]:bg-transparent
    [&::-webkit-scrollbar-thumb]:bg-purple-300/70
    [&::-webkit-scrollbar-thumb]:rounded-full
    hover:[&::-webkit-scrollbar-thumb]:bg-purple-300
  ">
      <h2 className="text-3xl font-bold mb-6">About Me</h2>

      <p className="leading-7 mb-4">
        I’m <span className="font-semibold">Sujal Bhagat</span>, a frontend-focused developer who enjoys turning ideas
        into clean, interactive, and meaningful digital experiences. My interest in technology started with simple
        curiosity — how websites work, how interfaces respond — and over time it evolved into a strong passion for
        building things that people can actually use and enjoy.
      </p>

      <p className="leading-7 mb-4">
        I primarily work with <span className="font-semibold">React, JavaScript, HTML, CSS, Tailwind CSS</span>, and
        <span className="font-semibold"> Redux Toolkit</span>. I enjoy structuring UI thoughtfully, managing state
        cleanly, and focusing on smooth user interactions rather than just making things “look good”.
      </p>

      <p className="leading-7 mb-4">
        I completed my <span className="font-semibold">BSc in Information Technology</span> from Mumbai University with
        a <span className="font-semibold">CGPA of 8.33</span>. Alongside academics, I focused heavily on self-learning
        and building real projects to strengthen my practical skills.
      </p>

      <p className="leading-7 mb-4">
        One of my notable projects is a <span className="font-semibold">Weather Application</span> built by integrating
        multiple APIs to deliver accurate and dynamic data. Currently, I’m working on a larger, more complex project
        designed to push my understanding of application architecture, performance, and scalability.
      </p>

      <p className="leading-7 mb-4">
        Outside of coding, I’m deeply interested in <span className="font-semibold">photography, video games</span>,
        and especially <span className="font-semibold">astrophotography</span>. Capturing the night sky has strongly
        influenced the visual theme of this portfolio — the dark tones, cosmic elements, and sense of depth reflect
        that inspiration.
      </p>

      <p className="leading-7">
        I’m currently learning full-stack development, but my main focus is frontend engineering.
        I’m actively looking for a good opportunity where I can contribute, learn from experienced developers,
        and grow into a strong professional frontend developer.
      </p>
    </div>
  )
}

export default AboutCard
