import React from "react";

function Footer({ className = "" }) {
  const year = new Date().getFullYear();

  return (
    <footer className={`text-white text-sm text-center ${className}`}>
      © {year} Sujal. All rights reserved.
    </footer>
  );
}

export default Footer;
