export default function SkillsSection() {
  return (
    <section
      className="p-8 rounded-3xl backdrop-blur-sm border border-gray-700/30 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.8))",
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b border-gray-700/50">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Frontend Development
          </h3>

          <h4 className="text-lg font-medium mb-3 text-gray-300">
            Core Technologies
          </h4>
          <div className="flex flex-wrap gap-3 mb-6">
            {[
              "HTML5",
              "CSS3 (SCSS)",
              "Javascript",
              "Typescript",
              "React.js",
              "Next.js",
              "React Native",
              "Redux",
              "Zustand",
              "GraphQL",
              "REST API",
              "AI Integration",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm hover:bg-purple-600/40 transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>

          <h4 className="text-lg font-medium mb-3 text-gray-300">
            Styling & UI Libraries
          </h4>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              "Bootstrap",
              "Styled components",
              "MUI",
              "Framer Motion",
              "Shadcn/ui",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-sm hover:bg-purple-600/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Backend Development
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              "Node.js",
              "Express.js",
              "MongoDB",
              "PostgreSQL",
              "Prisma",
              "REST API",
              "WebSockets",
              "AWS S3",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-sm hover:bg-purple-600/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Tools & Workflow
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {[
              "Git",
              "Webpack",
              "Vite",
              "Prettier",
              "Eslint",
              "Agile / Scrum",
              "Jira",
              "Slack",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-sm hover:bg-purple-600/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Testing
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            {["Jest", "React Testing Library"].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-sm hover:bg-purple-600/80 hover:text-white transition-all duration-300 cursor-pointer"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300 col-span-1 md:col-span-2">
          <h3 className="text-xl font-semibold mb-4 text-purple-400">
            Language
          </h3>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="px-3 py-1 bg-gray-700/70 text-gray-300 rounded-full text-sm hover:bg-purple-600/80 hover:text-white transition-all duration-300 cursor-pointer">
              English: Upper-Intermediate
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
