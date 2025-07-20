export default function ExperienceSection() {
  return (
    <section
      className="p-8 rounded-3xl backdrop-blur-sm border border-gray-700/30 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.8))",
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b border-gray-700/50">
        Experience
      </h2>

      <div className="mb-8 relative backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-gray-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              Fullstack Developer
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-gray-400">2025 Apr - now</span>
              <span className="text-gray-400">Remote</span>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-4 text-purple-400">
            Neteject AB
          </h4>
          <ul className="space-y-3 list-disc pl-5 text-gray-300">
            <li>
              Built and maintained scalable frontend applications using{" "}
              <span className="text-purple-400">
                React, TypeScript, and Next.js
              </span>
              , implementing advanced state management with Redux Toolkit and
              React Query
            </li>
            <li>
              Developed responsive user interfaces with modern CSS frameworks
              and ensured cross-browser compatibility and accessibility
              standards
            </li>
            <li>
              Integrated third-party services including payment systems,
              messaging, and file storage with proper error handling
            </li>
            <li>
              Worked with{" "}
              <span className="text-purple-400">PostgreSQL and MongoDB</span>{" "}
              databases, designing efficient data models for optimal performance
            </li>
            <li>
              Deployed applications on{" "}
              <span className="text-purple-400">AWS and Heroku</span>,
              implementing CI/CD pipelines and monitoring solutions
            </li>
            <li>
              Conducted code reviews and collaborated with team members to
              maintain high code quality and best practices
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8 relative backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-gray-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              Frontend Developer
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-gray-400">2025 Jan - 2025 May</span>
              <span className="text-gray-400">Lviv, Ukraine</span>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-4 text-purple-400">Insiders</h4>
          <ul className="space-y-3 list-disc pl-5 text-gray-300">
            <li>
              Built user interfaces with{" "}
              <span className="text-purple-400">
                React, Next.js, and TypeScript
              </span>
              , focusing on performance and maintainability
            </li>
            <li>
              Developed cross-platform mobile apps using{" "}
              <span className="text-purple-400">React Native</span> with
              attention to UI/UX consistency
            </li>
            <li>
              Integrated real-time features using{" "}
              <span className="text-purple-400">WebSockets</span> for chat and
              live updates
            </li>
            <li>
              Connected applications to cloud-hosted databases and
              authentication systems
            </li>
          </ul>
        </div>
      </div>

      <div className="relative backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-gray-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold text-white">
              Frontend Developer
            </h3>
            <span className="text-gray-400">2024 Feb - 2024 Dec</span>
          </div>
          <ul className="space-y-3 list-disc pl-5 text-gray-300">
            <li>
              Developed and maintained reusable components using{" "}
              <span className="text-purple-400">React</span> and{" "}
              <span className="text-purple-400">TypeScript</span> to enhance
              application scalability
            </li>
            <li>
              Implemented responsive web designs using{" "}
              <span className="text-purple-400">HTML, CSS, and BEM</span>{" "}
              methodology
            </li>
            <li>
              Optimized web performance by reducing load times and ensuring
              efficient rendering processes
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
