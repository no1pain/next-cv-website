export default function ProjectsHeader() {
  return (
    <div className="relative z-10">
      <div className="inline-block mb-6">
        <h1 className="text-4xl font-bold gradient-text">My Projects</h1>
        <div className="h-1 w-1/3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-2"></div>
      </div>
      <p className="mb-8 backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10 max-w-3xl">
        Here are some of the frontend projects I've worked on. Each project
        demonstrates different skills and technologies in my stack.
      </p>
    </div>
  );
}
