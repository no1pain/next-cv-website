import ProjectCard from "./ProjectCard";
import ProjectsHeader from "./ProjectsHeader";
import { Project } from "./ProjectCard";

interface ProjectsSectionProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section
      className="relative p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl -z-10 rounded-3xl"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <ProjectsHeader />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
