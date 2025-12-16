import React, { useState } from 'react'
import Logo from '../Logo'
import { FiMenu, FiX } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function Header() {

   const [open, setOpen] = useState(false);

    

  const linkClasses = ({ isActive }) =>
    `px-4 py-2 text-lg  
     ${isActive ? "text-purple-400" : "text-white hover:text-purple-300"}`;
  return (
    <>
    <div className='w-full h-[60px]  flex items-center justify-between  relative z-50 Header'>
      <Logo />
      <div className=' hidden md:block'>
        <NavLink to="/" className={linkClasses}>
          Home
        </NavLink>

        <NavLink to="/skills" className={linkClasses}>
          Skills
        </NavLink>

        <NavLink to="/projects" className={linkClasses}>
          Projects
        </NavLink>

        <NavLink to="/about" className={linkClasses}>
          About
        </NavLink>

        <NavLink to="/contact" className={linkClasses}>
          Contact
        </NavLink>

        
      </div>
      <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl focus:outline-none"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>

    </div>

    <div
        className={`fixed inset-0 bg-black flex flex-col items-center justify-center gap-8
        transform transition-transform duration-500 ease-in-out
        ${open ? "translate-x-0" : "translate-x-full"}
        md:hidden z-40`}
      >
        <NavLink to="/" className={linkClasses} onClick={() => setOpen(false)}>
          Home
        </NavLink>
        <NavLink to="/skills" className={linkClasses} onClick={() => setOpen(false)}>
          Skills
        </NavLink>
        <NavLink to="/projects" className={linkClasses} onClick={() => setOpen(false)}>
          Projects
        </NavLink>
        <NavLink to="/about" className={linkClasses} onClick={() => setOpen(false)}>
          About
        </NavLink>
        <NavLink to="/contact" className={linkClasses} onClick={() => setOpen(false)}>
          Contact
        </NavLink>
      </div>
    </>
  )
}

export default Header