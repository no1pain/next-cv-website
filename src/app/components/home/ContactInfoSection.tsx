export default function ContactInfoSection() {
  return (
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
            href="https://github.com/no1pain"
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
  );
}
