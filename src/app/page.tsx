import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 py-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-200">
          <div className="absolute inset-0 bg-gray-300 flex items-center justify-center text-gray-500">
            <span className="text-4xl">Photo</span>
          </div>
        </div>
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold mb-2">Oleksandr Kazan</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Frontend Developer</h2>
          <p className="text-gray-700 max-w-2xl">
            Frontend Developer with a technical background and over 1 year of
            experience creating modern and efficient web interfaces. Proficient
            in React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-100 p-6 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Contact Information</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <span>fe.oleksandr.kazan@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <span>+38 093 473 6590</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <span>Lviv, Ukraine, remote</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <a
              href="https://github.com/wxxzss"
              className="text-blue-600 hover:underline"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <a
              href="https://t.me/wxxzss"
              className="text-blue-600 hover:underline"
            >
              Telegram: @wxxzss
            </a>
          </div>
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
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
            <a
              href="https://www.linkedin.com/in/oleksandr-kazan-465771341/"
              className="text-blue-600 hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Profile */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Profile</h2>
        <p className="text-gray-700 mb-4">
          Frontend Developer with a technical background and over 1 year of
          experience creating modern and efficient web interfaces. Proficient in
          React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS, with
          hands-on expertise in React Native (Expo), WebSockets, and REST APIs.
          Skilled in building scalable web and mobile solutions, implementing
          authentication (JWT), and ensuring code quality with ESLint and
          Prettier.
        </p>
        <p className="text-gray-700 mb-4">
          Strong in problem-solving, having solved 100+ algorithmic challenges
          on LeetCode, which improved my logical thinking and ability to handle
          complex tasks. Winning the Math Olympiad (2022) further sharpened my
          analytical skills, which I now apply to tackle challenges in
          development. I thrive in collaborative environments, combining
          problem-solving and teamwork to deliver practical solutions.
        </p>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-3">Frontend</h3>
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
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">Backend & Tools</h3>
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
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Testing & Other</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              {[
                "Jest",
                "React Testing Library",
                "Fetch",
                "React Hook Form",
                "Basic OOP understanding",
                "Knowledge of Agile concepts (Scrum)",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-3 mt-6">
              Additional Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Algorithms: Solved 100+ problems on LeetCode",
                "Basic C/C++/C# knowledge",
                "English: Upper-Intermediate",
              ].map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Education</h2>
        <div className="mb-4">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h3 className="text-xl font-semibold">
              Mathematics and Computer Science
            </h3>
            <span className="text-gray-600">2022</span>
          </div>
          <p className="text-lg text-gray-700">Math Olympiad Winner</p>
        </div>
      </section>
    </div>
  );
}
