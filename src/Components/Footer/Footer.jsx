/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      <div>
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free To reach out!
        </h3>
      </div>

      <ul className="text-sm md:text-xl">
        <li>
          <a
            href="mailto:aneeshkapoor786@gmail.com"
            className="flex gap-1 items-center hover:text-orange-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineEmail size={20} />
            aneeshkapoor786@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/aneesh-kapoor-11101996aneesh"
            className="flex gap-1 items-center hover:text-orange-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="https://github.com/aneesh-kapoor"
            className="flex gap-1 items-center hover:text-orange-300 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
