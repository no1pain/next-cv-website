import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  // Sample project data for a Frontend Developer
  const projects = [
    {
      id: 1,
      title: "React E-Commerce Dashboard",
      description:
        "A responsive e-commerce admin dashboard built with React and Redux Toolkit. Features include product management, order tracking, and sales analytics with interactive charts.",
      technologies: [
        "React",
        "Redux Toolkit",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
      ],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
    {
      id: 2,
      title: "Next.js Portfolio Website",
      description:
        "A personal portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and optimized performance with Next.js Image component and SSG.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
    {
      id: 3,
      title: "React Native Weather App",
      description:
        "A mobile weather application built with React Native (Expo). Provides real-time weather data, forecasts, and location-based services using the OpenWeatherMap API.",
      technologies: [
        "React Native",
        "Expo",
        "JavaScript",
        "REST API",
        "Async Storage",
      ],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
    {
      id: 4,
      title: "Frontend Authentication System",
      description:
        "A complete authentication system with JWT implementation. Features include user registration, login, password reset, and protected routes with role-based access control.",
      technologies: ["React", "TypeScript", "JWT", "React Hook Form", "Axios"],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
    {
      id: 5,
      title: "Real-time Chat Application",
      description:
        "A real-time chat application using WebSockets. Features include private messaging, group chats, message notifications, and user presence indicators.",
      technologies: [
        "React",
        "Node.js",
        "WebSockets",
        "Express.js",
        "Tailwind CSS",
      ],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
    {
      id: 6,
      title: "Algorithm Visualizer",
      description:
        "An interactive web application that visualizes various sorting and pathfinding algorithms. Helps users understand how different algorithms work through step-by-step visualization.",
      technologies: [
        "JavaScript",
        "HTML5",
        "CSS3",
        "Data Structures",
        "Algorithms",
      ],
      image: "/placeholder.jpg",
      link: "https://github.com/wxxzss",
    },
  ];

  return (
    <div className="space-y-8">
      <section>
        <h1 className="text-3xl font-bold mb-2">My Projects</h1>
        <p className="text-gray-700 mb-8">
          Here are some of the frontend projects I've worked on. Each project
          demonstrates different skills and technologies in my stack.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gray-300 relative">
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  <span className="text-xl">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">
                    Technologies:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-200 px-2 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-100 p-6 rounded-lg mt-12">
        <h2 className="text-2xl font-bold mb-4">Let's Work Together</h2>
        <p className="text-gray-700 mb-4">
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your vision. Feel free to contact me
          through any of the channels listed on my resume.
        </p>
        <div className="flex gap-4">
          <Link
            href="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Contact Me
          </Link>
          <a
            href="https://github.com/wxxzss"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-900 transition-colors"
          >
            GitHub Profile
          </a>
          <a
            href="https://www.linkedin.com/in/oleksandr-kazan-465771341/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-800 text-white px-4 py-2 rounded hover:bg-blue-900 transition-colors"
          >
            LinkedIn Profile
          </a>
        </div>
      </section>
    </div>
  );
}
