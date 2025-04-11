import ProjectsSection from "../components/projects/ProjectsSection";
import ContactSection from "../components/projects/ContactSection";
import BackendRepositoriesSection from "../components/projects/BackendRepositoriesSection";
import { projects } from "../components/projects/ProjectsData";

export default function Projects() {
  return (
    <div className="space-y-12">
      <ProjectsSection projects={projects} />
      <BackendRepositoriesSection />
      <ContactSection />
    </div>
  );
}
