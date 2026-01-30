import { TECH } from './ProjectTechData'

import P4 from '../../assets/Project/P4.png'
import M4 from '../../assets/Project/M4.png'

import P1 from '../../assets/Project/P1.png'
import M1 from '../../assets/Project/M1.png'

import P2 from '../../assets/Project/P2.png'
import M2 from '../../assets/Project/M2.png'

import P3 from '../../assets/Project/TodoP.png'
import M3 from '../../assets/Project/TodoM.png'

import P5 from '../../assets/Project/BlogP.png'
import M5 from '../../assets/Project/BlogM.png'



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
    github: "https://github.com/Partime-Coder/DeveloperPortfolioWebsite",
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
    github: "https://github.com/Partime-Coder/IPhone-Website",
    live: "https://partime-coder.github.io/IPhone-Website/"
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
    title: "Simple Todo Application",
    description:
      "Developed a scalable Todo application using React and Redux Toolkit to strengthen understanding of centralized state management and predictable data flow. Designed a clean, responsive user interface with reusable components, focusing on maintainability and consistent user experience. Followed production-level practices such as structured folder organization, separation of concerns, and clean, readable code to ensure long-term scalability.",
    pcImage: P3,
    mobileImage: M3,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.TAILWIND,
      TECH.REACT,
      TECH.REDUX,
    ],
    github: "https://github.com/Partime-Coder/Todo-App",
    live: "https://todo-app-dun-ten-47.vercel.app/"
  },
  {
    id: 4,
    title: "Blog Application",
    description:
      "Architected a production-oriented blog application using React, Redux Toolkit, Tailwind CSS, and Appwrite, enabling users to create, publish, edit, and delete blog posts through a clean and responsive interface. Implemented secure authentication and role-based authorization with Appwrite to ensure that only post authors can modify or remove their own content. Integrated image uploads and rendering using Appwrite Storage and implemented SEO-friendly slug-based routing to support individual blog pages and improve content discoverability.",
    pcImage: P5,
    mobileImage: M5,
    tech: [
      TECH.HTML,
      TECH.CSS,
      TECH.JS,
      TECH.TAILWIND,
      TECH.REACT,
      TECH.API,
      TECH.ROUTER,
      TECH.REDUX,
      TECH.APPWRITE,
    ],
    github: "https://github.com/Partime-Coder/AppwriteBlogWebsite",
    live: "https://appwrite-blog-website-flax.vercel.app/"
  }
]