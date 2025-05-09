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
              Fullstack JavaScript Developer
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-[var(--muted)]">2025 Apr - now</span>
              <span className="text-[var(--muted)]">Remote</span>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-2">Neteject AB</h4>
          <ul className="space-y-3 list-disc pl-5">
            <li className="text-[var(--foreground)]/90">
              Built responsive UIs with{" "}
              <span className="text-[var(--primary)]">
                React, TypeScript, and modern state tools (Redux, Context, React
                Query)
              </span>
            </li>
            <li className="text-[var(--foreground)]/90">
              Developed RESTful APIs and backend logic using{" "}
              <span className="text-[var(--primary)]">Node.js and Express</span>
            </li>
            <li className="text-[var(--foreground)]/90">
              Designed scalable schemas in{" "}
              <span className="text-[var(--primary)]">
                PostgreSQL, MongoDB, and Supabase
              </span>
            </li>
            <li className="text-[var(--foreground)]/90">
              Integrated third-party services (payments, messaging, file
              storage)
            </li>
            <li className="text-[var(--foreground)]/90">
              Contributed to CI/CD and peer code reviews
            </li>
            <li className="text-[var(--foreground)]/90">
              Deployed and maintained services on{" "}
              <span className="text-[var(--primary)]">Heroku and AWS</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mb-8 relative backdrop-blur-sm rounded-xl bg-white/5 p-6 border border-white/10">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-4">
            <h3 className="text-xl font-semibold gradient-text">
              Fullstack JavaScript Developer
            </h3>
            <div className="flex flex-col items-end">
              <span className="text-[var(--muted)]">2025 Jan - 2025 May</span>
              <span className="text-[var(--muted)]">Lviv, Ukraine</span>
            </div>
          </div>
          <h4 className="text-lg font-medium mb-2">Insiders</h4>
          <ul className="space-y-3 list-disc pl-5">
            <li className="text-[var(--foreground)]/90">
              Built user interfaces with{" "}
              <span className="text-[var(--primary)]">
                React, Next.js, and TypeScript
              </span>
              , focusing on performance and maintainability
            </li>
            <li className="text-[var(--foreground)]/90">
              Developed cross-platform mobile apps using{" "}
              <span className="text-[var(--primary)]">React Native</span> with
              attention to UI/UX consistency
            </li>
            <li className="text-[var(--foreground)]/90">
              Integrated real-time features using{" "}
              <span className="text-[var(--primary)]">WebSockets</span> for chat
              and live updates
            </li>
            <li className="text-[var(--foreground)]/90">
              Connected applications to cloud-hosted databases and
              authentication systems
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
          </ul>
        </div>
      </div>
    </section>
  );
}
