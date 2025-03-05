import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section with animated gradient border and glass morphism */}
      <section
        className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
        }}
      >
        <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl -z-10"></div>
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-transparent p-1 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
          <div className="absolute inset-0 rounded-full bg-[var(--card)] flex items-center justify-center text-gray-500">
            <span className="text-4xl">Photo</span>
          </div>
        </div>

        <div className="text-center md:text-left">
          <div className="inline-block mb-2">
            <h1 className="text-4xl font-bold gradient-text">
              Oleksandr Kazan
            </h1>
            <div className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"></div>
          </div>
          <h2 className="text-2xl text-[var(--muted)] mb-4">
            Frontend Developer
          </h2>
          <p className="text-[var(--foreground)] max-w-2xl backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10 shadow-lg">
            Frontend Developer with a technical background and over 1 year of
            experience creating modern and efficient web interfaces. Proficient
            in React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section
        className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
        }}
      >
        <h2 className="section-title gradient">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <span>fe.oleksandr.kazan@gmail.com</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <span>+38 093 473 6590</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <span>Lviv, Ukraine, remote</span>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
            <a
              href="https://github.com/wxxzss"
              className="text-[var(--primary)] hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <a
              href="https://t.me/wxxzss"
              className="text-[var(--primary)] hover:underline"
            >
              Telegram: @wxxzss
            </a>
          </div>
          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 group">
            <div className="p-3 rounded-full bg-blue-500/10 text-[var(--primary)] group-hover:bg-blue-500/20 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2 9h4v12H2z"
                />
                <circle cx="4" cy="4" r="2" stroke="currentColor" />
              </svg>
            </div>
            <a
              href="https://www.linkedin.com/in/oleksandr-kazan-465771341/"
              className="text-[var(--primary)] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section
        className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl relative overflow-hidden"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
        }}
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
        <h2 className="section-title gradient">Profile</h2>
        <div className="space-y-4">
          <p className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
            Frontend Developer with a technical background and over 1 year of
            experience creating modern and efficient web interfaces. Proficient
            in React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS, with
            hands-on expertise in React Native (Expo), WebSockets, and REST
            APIs. Skilled in building scalable web and mobile solutions,
            implementing authentication (JWT), and ensuring code quality with
            ESLint and Prettier.
          </p>
          <p className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
            Strong in problem-solving, having solved 100+ algorithmic challenges
            on LeetCode, which improved my logical thinking and ability to
            handle complex tasks. I thrive in collaborative environments,
            combining problem-solving and teamwork to deliver practical
            solutions.
          </p>
        </div>
      </section>

      {/* Skills */}
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
                "Tailwind CSS",
                "Sass (SCSS)",
                "BEM",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              Backend & Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Node.js",
                "Express.js",
                "JWT",
                "REST API",
                "Web sockets",
                "Git",
                "Webpack",
                "Vite",
                "ESLint",
                "Prettier",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
            <h3 className="text-xl font-semibold mb-3 text-[var(--primary)]">
              Testing & Other
            </h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Jest",
                "React Testing Library",
                "Fetch",
                "React Hook Form",
                "Basic OOP understanding",
                "Knowledge of Agile concepts (Scrum)",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6 text-[var(--primary)]">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Algorithms: Solved 100+ problems on LeetCode",
                "Basic C/C++/C# knowledge",
                "English: Upper-Intermediate",
              ].map((skill) => (
                <span key={skill} className="skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section
        className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
        }}
      >
        <h2 className="section-title gradient">Experience</h2>

        {/* First Experience */}
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
                <span className="text-[var(--primary)]">
                  Rehive and MongoDB
                </span>
              </li>
              <li className="text-[var(--foreground)]/90">
                Worked with{" "}
                <span className="text-[var(--primary)]">WebSockets</span> to
                develop a real-time chat
              </li>
            </ul>
          </div>
        </div>

        {/* Second Experience */}
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
                <span className="text-[var(--primary)]">
                  HTML, CSS, and BEM
                </span>{" "}
                methodology
              </li>
              <li className="text-[var(--foreground)]/90">
                Optimized web performance by reducing load times and ensuring
                efficient rendering processes
              </li>
              <li className="text-[var(--foreground)]/90">
                Participated in code reviews and provided constructive feedback
                to maintain high code quality standards
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        className="card p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl"
        style={{
          background:
            "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
        }}
      >
        <h2 className="section-title gradient">Education</h2>
        <div className="mb-4 relative backdrop-blur-sm rounded-xl bg-white/5 p-6 border border-white/10">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <div className="pl-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-xl font-semibold">
                Frontend Developer Course at Mate Academy
              </h3>
              <span className="text-[var(--muted)]">2023 - 2024</span>
            </div>
          </div>
        </div>
        <div className="mb-4 relative backdrop-blur-sm rounded-xl bg-white/5 p-6 border border-white/10">
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 rounded-full"></div>
          <div className="pl-6">
            <div className="flex flex-col md:flex-row md:justify-between">
              <h3 className="text-xl font-semibold">
                Computer Science at Lviv Polytechnic National University
              </h3>
              <span className="text-[var(--muted)]">2023 - 2027</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
