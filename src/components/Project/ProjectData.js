import { TECH } from './ProjectTechData'

import P4 from '../../assets/Project/P4.png'
import M4 from '../../assets/Project/M4.png'

import P1 from '../../assets/Project/P1.png'
import M1 from '../../assets/Project/M1.png'

import P2 from '../../assets/Project/P2.png'
import M2 from '../../assets/Project/M2.png'

import P3 from '../../assets/Project/P3.png'
import M3 from '../../assets/Project/M3.png'

import P5 from '../../assets/Project/P5.png'
// import M5 from '../../assets/Project/M5.png'



export const projects = [
  {
    id: 0,
    title: "My Portfolio Website",
    description:
      "A personal portfolio website designed and developed to showcase my projects, technical skills, and experience in a clean, visually engaging way. The site focuses on responsive layouts, smooth interactions, and a space-inspired visual theme influenced by my interest in astrophotography. Built with modern frontend tools, it emphasizes performance, accessibility, and maintainable component-based architecture.",
    pcImage: P4,
    mobileImage: M4,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.TAILWIND,
      TECH.REACT,
      TECH.ROUTER
    ],
    github: "",
    live: ""
  },
  {
    id: 1,
    title: "I-Phone Landing Page UI/UX Clone",
    description:
      "I created a pixel-perfect iPhone landing page using only HTML and CSS, closely following a Figma design, built a fully responsive layout with CSS Grid and Flexbox to handle a complex page structure with precision, and developed the project as part of my HTML/CSS practice to strengthen my UI implementation and layout skills..",
    pcImage: P1,
    mobileImage: M1,
    tech: [
      TECH.HTML,
      TECH.CSS,
    ],
    github: "https://github.com/Partime-Coder/Weather-Site",
    live: "https://partime-coder.github.io/Weather-Site/"
  },
  {
    id: 2,
    title: "Weather Site Website",
    description:
      "I developed a large-scale, real-world weather application by integrating multiple APIs for accurate and up-to-date data, built a fully responsive and dynamic user interface that presents current weather information in a clean and intuitive layout, and implemented forecast functionality using a dedicated forecast API to provide dynamically updated multi-day weather predictions.",
    pcImage: P2,
    mobileImage: M2,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.API
    ],
    github: "https://github.com/Partime-Coder/Weather-Site",
    live: "https://partime-coder.github.io/Weather-Site/"
  },
  {
    id: 3,
    title: "Simple Portfolio Website",
    description:
      "A simple and clean portfolio website created for a QA professional to showcase skills, experience, and tools. The site focuses on clarity, responsive layout, and easy content navigation, making it suitable for presenting QA profiles and work in a professional manner.",
    pcImage: P3,
    mobileImage: M3,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.TAILWIND,
      TECH.REACT,
    ],
    github: "https://github.com/Partime-Coder/Weather-Site",
    live: "https://partime-coder.github.io/Weather-Site/"
  },
  {
    id: 4,
    title: "E-Commerce Website(In Process)",
    description:
      "Currently working on a full-scale e-commerce web application focused on building a complete shopping experience, including product listings, cart management, and a smooth user interface. The project is designed to strengthen my understanding of application architecture, state management, and scalable frontend development practices.",
    pcImage: P5,
    mobileImage: P5,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.TAILWIND,
      TECH.REACT,
      TECH.API,
      TECH.ROUTER,
      TECH.REDUX,
    ],
    github: "https://github.com/Partime-Coder/Weather-Site",
    live: "https://partime-coder.github.io/Weather-Site/"
  }
]