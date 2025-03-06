import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      className="p-8 rounded-3xl backdrop-blur-sm border border-white/10 shadow-xl relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-2xl -z-10 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="inline-block mb-6">
        <h2 className="text-2xl font-bold gradient-text">
          Let's Work Together
        </h2>
        <div className="h-1 w-1/4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
      </div>

      <p className="mb-6 backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
        I'm always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision. Feel free to contact me through
        any of the channels listed on my resume.
      </p>

      <div className="flex flex-wrap gap-4">
        <Link
          href="/"
          className="btn-primary shadow-lg shadow-blue-500/10 hover:shadow-blue-500/20 transition-all duration-300"
        >
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
          Contact Me
        </Link>
        <a
          href="https://github.com/no1pain"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
          GitHub Profile
        </a>
        <a
          href="https://www.linkedin.com/in/oleksandr-kazan-465771341/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          LinkedIn Profile
        </a>
      </div>
    </section>
  );
}
