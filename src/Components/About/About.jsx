import React from "react";
import AboutImg from "../../assets/7358653-removebg-preview.png";
import { IoArrowForward } from "react-icons/io5";
const About = () => {
  return (
    <div
      id="About"
      className="text-white md:flex overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12"
    >
      <div>
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <div className="md:flex flex-wrap flex-col md:flex-row items-center">
          <img className="md:h-80" src={AboutImg} alt="About img" />

          <ul>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Frontend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Frontend Developer skilled in creating visually
                  appealing and highly interactive web applications. My core
                  expertise includes HTML5, CSS3, JavaScript ES6+, React JS,
                  Tailwind CSS, and UI component libraries. I focus on
                  responsive layouts, optimized performance, reusable
                  components, and best development practices to ensure a smooth
                  user experience across devices.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Database developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Database Developer with expertise in designing,
                  implementing, and managing databases to ensure efficient data
                  storage and retrieval. I work with SQL and NoSQL databases,
                  focusing on data modeling, indexing, query optimization, and
                  ensuring data integrity and security.
                </p>
              </span>
            </div>
            <div className="flex gap-3 py-4">
              <IoArrowForward size={30} className="mt-1" />

              <span className="w-96">
                <h1 className="text-xl md:text-2xl font-semibold leading-normal">
                  Backend developer
                </h1>
                <p className="text-sm md:text-md leading-tight">
                  I am a Backend Developer who focuses on building reliable,
                  secure, and efficient server-side applications. I work with
                  Node.js and Express.js to create APIs and manage data flow
                  between the database and the user interface.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
