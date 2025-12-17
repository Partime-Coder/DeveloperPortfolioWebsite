import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function SocialBar({ className = "", iconClass = "" }) {
  return (
    <div className={`flex gap-5 ${className}`}>
      <a
        href="https://github.com/Partime-Coder"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={`cursor-pointer ${iconClass}`} />
      </a>

      <a
        href="https://www.linkedin.com/in/sujal-bhagat-9b2492391/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="https://wa.me/9370280335">
        <FaWhatsapp className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="mailto:sujalbhagat22@gmail.com">
        <MdEmail className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="tel:+919370280335">
        <MdPhone className={`cursor-pointer ${iconClass}`} />
      </a>
    </div>
  );
}

export default SocialBar;
