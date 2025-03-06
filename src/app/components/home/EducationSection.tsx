export default function EducationSection() {
  return (
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
  );
}
