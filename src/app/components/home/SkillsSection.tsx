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
            Frontend Development
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "HTML5",
              "CSS3 (SCSS)",
              "Bootstrap",
              "Styled components",
              "MUI",
              "Javascript",
              "React.js",
              "Next.js",
              "React Native",
              "Redux",
              "Typescript",
              "GraphQL",
              "REST API",
              "AI Integration",
              "MongoDB, PostgreSQL",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "REST API",
              "WebSockets",
              "AWS (EC2, Lambda, API Gateway, S3)",
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
              "Webpack",
              "Vite",
              "Prettier",
              "Eslint",
              "Agile / Scrum",
            ].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Testing
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            {["Jest", "React Testing Library"].map((skill) => (
              <span key={skill} className="skill-tag">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10 col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
            Language
          </h3>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="skill-tag">English: Upper-Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
