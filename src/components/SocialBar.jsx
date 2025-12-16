import React from "react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function SocialBar({ className = "", iconClass = "" }) {
  return (
    <div className={`flex gap-5 ${className}`}>
      <a
        href="https://github.com/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className={`cursor-pointer ${iconClass}`} />
      </a>

      <a
        href="https://linkedin.com/in/your-username"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="https://wa.me/9370280335">
        <FaWhatsapp className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="mailto:your@email.com">
        <MdEmail className={`cursor-pointer ${iconClass}`} />
      </a>

      <a href="tel:+919999999999">
        <MdPhone className={`cursor-pointer ${iconClass}`} />
      </a>
    </div>
  );
}

export default SocialBar;
