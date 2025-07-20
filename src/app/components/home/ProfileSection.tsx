export default function ProfileSection() {
  return (
    <section
      className="p-8 rounded-3xl backdrop-blur-sm border border-gray-700/30 shadow-xl relative overflow-hidden"
      style={{
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.8))",
      }}
    >
      <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-purple-600/20 to-gray-800/20 rounded-full blur-2xl -z-10 transform translate-x-1/2 -translate-y-1/2"></div>
      <h2 className="text-3xl font-bold text-white mb-6 pb-3 border-b border-gray-700/50">
        Profile
      </h2>
      <div className="space-y-4">
        <p className="backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 text-gray-300 text-lg leading-relaxed">
          Frontend Developer with expertise in building responsive, scalable web
          applications and mobile solutions. Skilled in modern frontend
          technologies including React, Next.js, TypeScript, and Redux, as well
          as backend development with Node.js, Express, and database management
          (PostgreSQL, MongoDB). Experienced in implementing RESTful APIs,
          WebSockets for real-time features, and integrating third-party
          services. Proficient in deployment workflows using AWS and Heroku with
          a strong focus on code quality and performance optimization.
        </p>
      </div>
    </section>
  );
}
