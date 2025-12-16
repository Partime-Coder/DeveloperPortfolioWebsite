import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Skill from './Pages/Skill.jsx'
import Project from './Pages/Project.jsx'
import Contact from './Pages/Contact.jsx'


const router = createBrowserRouter([
  
  {
    path:'/',
    element:<Home />
  },
   {
    path:'about',
    element:<About />
  },
   {
    path:'skills',
    element:<Skill />
  },
   {
    path:'projects',
    element:<Project />
  },
   {
    path:'contact',
    element:<Contact />
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <BrowserRouter basename="/DeveloperPortfolioWebsite">
      <RouterProvider router={router} />
    </BrowserRouter>
  </StrictMode>,
)
