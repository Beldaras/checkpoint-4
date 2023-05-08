import React from "react";
import github from "../assets/icons/github-mark.svg";
import linkedin from "../assets/icons/linkedin.svg";

function Footer() {
  return (
    <div className="flex justify-center gap-4">
      <p>Roblot Jean-Philippe © - 2023</p>
      <img src={github} alt="logo github" className="h-5 w-5" />
      <img src={linkedin} alt="logo linkedin" className="h-5 w-5" />
    </div>
  );
}

export default Footer;
