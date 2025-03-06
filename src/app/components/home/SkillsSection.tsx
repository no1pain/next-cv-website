export default function SkillsSection() {
  return (
    <section
      className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <h2 className="section-title gradient">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Frontend
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Redux-toolkit",
              "React Native (Expo)",
              "HTML5",
              "CSS3",
              "SCSS",
              "Tailwind CSS",
              "Material UI",
              "Styled Components",
              "Responsive Design",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Backend & APIs
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Node.js",
              "Express.js",
              "REST API",
              "WebSockets",
              "JWT Authentication",
              "Supabase",
              "Firebase",
              "MongoDB",
              "PostgreSQL",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Tools & Workflow
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Git",
              "GitHub",
              "VS Code",
              "Webpack",
              "Vite",
              "ESLint",
              "Prettier",
              "npm",
              "yarn",
              "Figma",
              "Jira",
              "Agile",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Other Skills
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Algorithms",
              "Data Structures",
              "Problem Solving",
              "Responsive Design",
              "Cross-browser Compatibility",
              "Performance Optimization",
              "SEO Basics",
              "UI/UX Principles",
              "Technical Documentation",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
