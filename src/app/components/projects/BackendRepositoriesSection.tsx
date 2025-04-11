import React from "react";

interface Repository {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
}

const repositories: Repository[] = [
  {
    id: 1,
    title: "SkillSpark Backend",
    description:
      "Backend API service for the SkillSpark learning platform. Built with Node.js and Express, this REST API provides authentication, course management, user progress tracking, and content delivery functionality.",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "JWT Authentication",
      "RESTful API",
      "MVC Architecture",
      "Serverless Deployment",
    ],
    githubLink: "https://github.com/no1pain/backend-skillspark",
  },
];

export default function BackendRepositoriesSection() {
  return (
    <section className="mt-16">
      <h2 className="text-3xl font-bold gradient-text mb-6">
        Backend Repositories
      </h2>
      <p className="text-[var(--foreground)]/80 mb-8 backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
        These backend repositories support the frontend projects shown above,
        providing API services, data management, and server-side functionality.
        Each repository contains the necessary backend code to enable the
        full-stack functionality of the applications.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {repositories.map((repo) => (
          <div
            key={repo.id}
            className="backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px]"
            style={{
              background:
                "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 gradient-text">
                {repo.title}
              </h3>
              <p className="mb-4 text-[var(--foreground)]/90">
                {repo.description}
              </p>

              <div className="mb-5">
                <h4 className="text-sm font-semibold text-[var(--muted)] mb-2">
                  Technologies:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {repo.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[var(--foreground)]/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex">
                <a
                  href={repo.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
