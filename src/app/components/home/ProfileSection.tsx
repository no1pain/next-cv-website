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
          Frontend Developer with a technical background and over 1 year of
          experience creating modern and efficient web interfaces. Proficient in
          React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS, with
          hands-on expertise in React Native (Expo), WebSockets, and REST APIs.
          Skilled in building scalable web and mobile solutions, implementing
          authentication (JWT), and ensuring code quality with ESLint and
          Prettier.
        </p>
        <p className="backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10">
          Strong in problem-solving, having solved 100+ algorithmic challenges
          on LeetCode, which improved my logical thinking and ability to handle
          complex tasks. I thrive in collaborative environments, combining
          problem-solving and teamwork to deliver practical solutions.
        </p>
      </div>
    </section>
  );
}
