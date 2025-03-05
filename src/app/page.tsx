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
          <h1 className="text-4xl font-bold mb-2">John Doe</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Full Stack Developer</h2>
          <p className="text-gray-700 max-w-2xl">
            Passionate developer with expertise in building modern web
            applications. Skilled in React, Next.js, Node.js, and cloud
            technologies.
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
            <span>john.doe@example.com</span>
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
            <span>(123) 456-7890</span>
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
            <span>San Francisco, CA</span>
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
              href="https://github.com/johndoe"
              className="text-blue-600 hover:underline"
            >
              github.com/johndoe
            </a>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">
          Professional Experience
        </h2>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Senior Developer</h3>
            <span className="text-gray-600">Jan 2020 - Present</span>
          </div>
          <h4 className="text-lg text-gray-700 mb-2">Tech Innovations Inc.</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>
              Led development of a React-based dashboard that improved client
              engagement by 40%
            </li>
            <li>
              Architected and implemented microservices using Node.js and Docker
            </li>
            <li>Mentored junior developers and conducted code reviews</li>
          </ul>
        </div>

        <div className="mb-6">
          <div className="flex flex-col md:flex-row md:justify-between mb-2">
            <h3 className="text-xl font-semibold">Web Developer</h3>
            <span className="text-gray-600">Jun 2017 - Dec 2019</span>
          </div>
          <h4 className="text-lg text-gray-700 mb-2">Digital Solutions LLC</h4>
          <ul className="list-disc pl-5 space-y-1 text-gray-700">
            <li>Developed responsive web applications using React and Redux</li>
            <li>Implemented RESTful APIs using Express.js and MongoDB</li>
            <li>Improved site performance by 30% through code optimization</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-2xl font-bold mb-4 border-b pb-2">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Tailwind CSS", "Redux"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Backend</h3>
            <div className="flex flex-wrap gap-2">
              {["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                )
              )}
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
              Bachelor of Science in Computer Science
            </h3>
            <span className="text-gray-600">2013 - 2017</span>
          </div>
          <p className="text-lg text-gray-700">University of Technology</p>
        </div>
      </section>
    </div>
  );
}
