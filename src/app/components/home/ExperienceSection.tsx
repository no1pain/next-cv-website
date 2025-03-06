export default function ExperienceSection() {
  return (
    <section
      className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <h2 className="section-title gradient">Experience</h2>

      <div className="mb-8 relative backdrop-blur-sm rounded-xl bg-white/5 p-6 border border-white/10">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold gradient-text">
              Frontend Developer
            </h3>
            <span className="text-[var(--muted)]">2025 Jan - present</span>
          </div>
          <ul className="space-y-3 list-disc pl-5">
            <li className="text-[var(--foreground)]/90">
              Developed{" "}
              <span className="text-[var(--primary)]">user interfaces</span>{" "}
              using{" "}
              <span className="text-[var(--primary)]">
                React, Next.js, and TypeScript
              </span>
            </li>
            <li className="text-[var(--foreground)]/90">
              Implemented{" "}
              <span className="text-[var(--primary)]">
                authentication and authorization
              </span>{" "}
              systems using <span className="text-[var(--primary)]">JWT</span>{" "}
              and API integrations
            </li>
            <li className="text-[var(--foreground)]/90">
              Worked with{" "}
              <span className="text-[var(--primary)]">React Native</span>,
              ensuring cross-platform compatibility and smooth UI/UX
            </li>
            <li className="text-[var(--foreground)]/90">
              Integrated applications with databases such as{" "}
              <span className="text-[var(--primary)]">Rehive and MongoDB</span>
            </li>
            <li className="text-[var(--foreground)]/90">
              Worked with{" "}
              <span className="text-[var(--primary)]">WebSockets</span> to
              develop a real-time chat
            </li>
          </ul>
        </div>
      </div>

      <div className="relative backdrop-blur-sm rounded-xl bg-white/5 p-6 border border-white/10">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold gradient-text">
              Frontend Developer
            </h3>
            <span className="text-[var(--muted)]">2024 Feb - 2024 Dec</span>
          </div>
          <ul className="space-y-3 list-disc pl-5">
            <li className="text-[var(--foreground)]/90">
              Developed and maintained reusable components using{" "}
              <span className="text-[var(--primary)]">React</span> and{" "}
              <span className="text-[var(--primary)]">TypeScript</span> to
              enhance application scalability
            </li>
            <li className="text-[var(--foreground)]/90">
              Implemented responsive web designs using{" "}
              <span className="text-[var(--primary)]">HTML, CSS, and BEM</span>{" "}
              methodology
            </li>
            <li className="text-[var(--foreground)]/90">
              Optimized web performance by reducing load times and ensuring
              efficient rendering processes
            </li>
            <li className="text-[var(--foreground)]/90">
              Participated in code reviews and provided constructive feedback to
              maintain high code quality standards
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
