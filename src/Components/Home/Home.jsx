/* eslint-disable no-unused-vars */
import React from "react";
import avatarImg from "../../assets/7358602-removebg-preview.png";
import TextChange from "../TextChange";

const Home = () => {
  const handleContactClick = () => {
    const footer = document.getElementById("Footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10 ">
        <h1 className="text-xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-sm md:text-2xl tracking-tight ">
          I am a passionate Frontend Developer with experience in building
          functional, scalable, and interactive web applications. I work mainly
          with HTML, CSS, JavaScript, React, and Tailwind CSS, and I have a good
          understanding of responsive design and state management. I enjoy
          creating digital experiences that are both visually appealing and easy
          to use. I believe in writing clean, reusable code and continuously
          improving my skills to keep up with evolving web standards. My goal is
          to contribute to meaningful projects and grow as a developer by
          learning and collaborating with others.
        </p>
        <button
          onClick={handleContactClick}
          className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
        >
          Contact Me
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="" />
      </div>
    </div>
  );
};

export default Home;
