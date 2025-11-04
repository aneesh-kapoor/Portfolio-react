import React from "react";

const projects = [
  {
    id: 1,
    title: "Blogging Website",
    main: "A blogging website built with Next.js, markdown posts and SSR. Responsive layout and SEO friendly.",
    liveUrl: "https://your-live-blog.example.com",
    repoUrl: "https://github.com/yourusername/blogging-website",
  },
  {
    id: 2,
    title: "YouTube Clone",
    main: "A YouTube-like app using React and YouTube API. Search, watch and browse channels.",
    liveUrl: "https://your-live-youtube-clone.example.com",
    repoUrl: "https://github.com/yourusername/youtube-clone",
  },
  {
    id: 3,
    title: "Netflix Clone",
    main: "A Netflix UI clone using React, Tailwind and TMDB API. Dynamic lists and lazy-loaded images.",
    liveUrl: "https://your-live-netflix-clone.example.com",
    repoUrl: "https://github.com/yourusername/netflix-clone",
  },
];

const IconExternal = () => (
  <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h6m0 0v6m0-6L10 16"></path>
  </svg>
);

const IconGithub = () => (
  <svg className="w-4 h-4 inline-block ml-1" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.98 3.22 9.19 7.69 10.67.56.1.76-.24.76-.53 0-.26-.01-.96-.02-1.88-3.13.68-3.79-1.51-3.79-1.51-.51-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1.01 1.73 2.64 1.23 3.29.94.1-.73.39-1.23.71-1.51-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.01-.12-.28-.5-1.41.11-2.94 0 0 .95-.3 3.12 1.15a10.8 10.8 0 0 1 2.84-.38c.96.01 1.93.13 2.84.38 2.17-1.45 3.12-1.15 3.12-1.15.61 1.53.23 2.66.11 2.94.72.78 1.16 1.78 1.16 3.01 0 4.32-2.64 5.28-5.15 5.55.4.35.75 1.05.75 2.11 0 1.52-.01 2.74-.01 3.12 0 .29.2.64.77.53 4.47-1.48 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5z" />
  </svg>
);

const ProjectCard = ({ title, main, liveUrl, repoUrl }) => {
  const safeTitle = title ?? "Untitled Project";
  const safeMain = main ?? "No description provided.";

  return (
    <article className="bg-gray-900 border border-gray-700 rounded-lg p-6 w-full sm:w-[48%] md:w-[31%] flex flex-col justify-between shadow-lg">
      <div>
        <h3 className="text-xl font-semibold text-white mb-2">{safeTitle}</h3>
        <p className="text-sm text-gray-300 mb-4">{safeMain}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 bg-orange-500 text-white text-sm rounded-md hover:bg-orange-600 transition"
            aria-label={`Open live demo for ${safeTitle}`}
          >
            Live
            <IconExternal />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-2 bg-gray-700 text-gray-400 text-sm rounded-md">No demo</span>
        )}

        {repoUrl ? (
          <a
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 border border-gray-700 text-sm text-gray-200 rounded-md hover:bg-gray-800 transition"
            aria-label={`Open source code for ${safeTitle}`}
          >
            Source
            <IconGithub />
          </a>
        ) : (
          <span className="inline-flex items-center gap-2 px-3 py-2 border border-gray-700 text-sm text-gray-500 rounded-md">Private</span>
        )}
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <section id="Projects" className="px-6 md:px-12 py-12 md:py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
          <p className="text-gray-300 mt-2">Selected projects — click Live or Source to open in a new tab.</p>
        </header>

        <div className="flex flex-wrap gap-6">
          {projects.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              main={p.main}
              liveUrl={p.liveUrl}
              repoUrl={p.repoUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
