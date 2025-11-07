/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import bannerImg from "../../assets/photo-C8q0KQHG.webp";

const IconExternal = () => (
  <svg
    className="w-4 h-4 inline-block ml-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    aria-hidden
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13 7h6m0 0v6m0-6L10 16"
    ></path>
  </svg>
);

const IconGithub = () => (
  <svg
    className="w-4 h-4 inline-block ml-1"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden
  >
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.19 7.69 10.67.56.1.76-.24.76-.53 0-.26-.01-.96-.02-1.88-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.64 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.28-.5-1.41.11-2.94 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96.01 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.78 1.16 1.78 1.16 3.01 0 4.32-2.64 5.28-5.15 5.55.4.35.75 1.05.75 2.11 0 1.52-.01 2.74-.01 3.12 0 .29.2.64.77.53 4.47-1.48 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const ProjectCard = ({
  // eslint-disable-next-line react/prop-types
  title = "Untitled Project",
  main = "No description provided.",
  // eslint-disable-next-line react/prop-types
  liveUrl,
  repoUrl,
  image,
}) => {
  const imgSrc = image ?? bannerImg;

  return (
    <article className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img
        className="rounded-xl w-full h-40 object-cover mb-4"
        src={imgSrc}
        alt={`${title} banner`}
      />

      <h3 className="px-1 text-xl md:text-2xl font-bold leading-normal text-white">
        {title}
      </h3>
      <p className="px-1 text-sm md:text-md leading-tight py-2 text-gray-300 flex-1">
        {main}
      </p>

      <div className="mt-4 p-2 md:p-4 flex gap-2 md:gap-4">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-95 duration-200 hover:scale-105 font-semibold rounded-3xl bg-orange-500"
            aria-label={`Open live demo for ${title}`}
          >
            Demo
            <IconExternal />
          </a>
        ) : (
          <span className="inline-flex items-center justify-center text-gray-400 py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-gray-800">
            No Demo
          </span>
        )}

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:bg-gray-800 duration-200 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
            aria-label={`Open source code for ${title}`}
          >
            Source Code
            <IconGithub />
          </a>
        ) : (
          <span className="inline-flex items-center justify-center text-gray-400 py-2 px-3 text-sm md:text-lg font-semibold rounded-3xl bg-gray-800">
            Private
          </span>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
