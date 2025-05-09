export default function ProfileSection() {
  return (
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
          Fullstack JavaScript Developer with expertise in building responsive,
          scalable web applications and mobile solutions. Skilled in modern
          frontend technologies including React, Next.js, TypeScript, and Redux,
          as well as backend development with Node.js, Express, and database
          management (PostgreSQL, MongoDB). Experienced in implementing RESTful
          APIs, WebSockets for real-time features, and integrating third-party
          services. Proficient in deployment workflows using AWS and Heroku with
          a strong focus on code quality and performance optimization.
        </p>
      </div>
    </section>
  );
}
