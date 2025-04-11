import Image from "next/image";

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  icon: string;
  gradient: string;
  link: string;
  demoLink: string;
  githubLink: string;
  previewImage?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="group rounded-2xl backdrop-blur-sm border border-white/10 overflow-hidden shadow-xl transition-all duration-300 hover:shadow-blue-500/10 hover:border-blue-500/30 hover:translate-y-[-5px]"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <div
        className={`h-60 relative overflow-hidden ${
          project.previewImage ? "" : `bg-gradient-to-br ${project.gradient}`
        }`}
      >
        {project.previewImage && (
          <div className="absolute inset-0">
            <Image
              src={project.previewImage}
              alt={project.title}
              fill
              className="object-cover"
              unoptimized={true}
            />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-full h-full flex flex-wrap items-center justify-center gap-3 p-4">
            {project.technologies.slice(0, 4).map((tech) => (
              <div
                key={tech}
                className="px-3 py-2 rounded-lg bg-black/40 backdrop-blur-sm border border-white/20 text-white font-medium text-sm"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[rgba(10,15,30,0.95)] to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <h3 className="text-white text-xl font-bold drop-shadow-md">
            {project.title}
            {project.id === 2 && (
              <span className="ml-2 text-xs font-normal px-2 py-1 bg-blue-500/30 rounded-full border border-blue-400/30">
                In Development
              </span>
            )}
          </h3>
        </div>
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-3 gradient-text">
          {project.title}
        </h2>
        <p className="mb-4 text-[var(--foreground)]/90">
          {project.description}
        </p>
        <div className="mb-5">
          <h3 className="text-sm font-semibold text-[var(--muted)] mb-2">
            Technologies:
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="skill-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          {project.demoLink && (
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              Demo
            </a>
          )}
          {project.githubLink && (
            <a
              href={project.githubLink}
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
          )}
        </div>
      </div>
    </div>
  );
}
