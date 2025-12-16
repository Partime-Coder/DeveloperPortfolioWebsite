import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skill from './Pages/Skill.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/DeveloperPortfolioWebsite/about', element: <About /> },
  { path: '/DeveloperPortfolioWebsite/skills', element: <Skill /> },
  { path: '/DeveloperPortfolioWebsite/projects', element: <Project /> },
  { path: '/DeveloperPortfolioWebsite/contact', element: <Contact /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
