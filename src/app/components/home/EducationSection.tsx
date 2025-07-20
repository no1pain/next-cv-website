export default function EducationSection() {
  return (
    <section
      className="p-8 rounded-3xl backdrop-blur-sm border border-gray-700/30 shadow-xl"
      style={{
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.8))",
      }}
    >
      <h2 className="text-3xl font-bold text-white mb-8 pb-3 border-b border-gray-700/50">
        Education
      </h2>
      <div className="mb-6 relative backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-gray-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h3 className="text-xl font-semibold text-white">
              Frontend Developer Course at Mate Academy
            </h3>
            <span className="text-gray-400">2023 - 2024</span>
          </div>
        </div>
      </div>
      <div className="relative backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 hover:border-purple-600/50 transition-all duration-300">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-purple-600 to-gray-600 rounded-full"></div>
        <div className="pl-6">
          <div className="flex flex-col md:flex-row md:justify-between">
            <h3 className="text-xl font-semibold text-white">
              Computer Science at Lviv Polytechnic National University
            </h3>
            <span className="text-gray-400">2023 - 2027</span>
          </div>
        </div>
      </div>
    </section>
  );
}
