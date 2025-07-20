import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center gap-8 py-16 px-8 relative overflow-hidden rounded-3xl backdrop-blur-sm border border-gray-700/30"
      style={{
        background:
          "linear-gradient(145deg, rgba(17, 24, 39, 0.9), rgba(31, 41, 55, 0.8))",
      }}
    >
      <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-purple-600 via-gray-800 to-gray-900 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-purple-600/10 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl"></div>

      <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-transparent p-1 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 shadow-2xl shadow-purple-500/40 hover:shadow-purple-500/60 transition-all duration-300">
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 opacity-20"></div>
        <div className="absolute inset-0 rounded-full bg-gray-900 flex items-center justify-center text-gray-500">
          <Image
            src="https://i.ibb.co/JRwsfZ5P/5422589175946937056.jpg"
            alt="Oleksandr Kazan"
            width={192}
            height={192}
            className="rounded-full"
            unoptimized={true}
            priority
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <div className="inline-block mb-4">
          <h1 className="text-5xl font-bold text-white mb-2">
            Oleksandr Kazan
          </h1>
          <div className="h-1 w-3/4 bg-gradient-to-r from-purple-600 to-gray-600 rounded-full mt-2"></div>
        </div>
        <h2 className="text-2xl text-gray-400 mb-2 font-medium">
          Frontend Developer
        </h2>
        <p className="text-sm text-gray-500 mb-6">2+ years experience</p>
        <p className="text-gray-300 max-w-2xl backdrop-blur-sm rounded-2xl bg-gray-800/50 p-6 border border-gray-700/30 shadow-xl text-lg leading-relaxed">
          Frontend-focused JavaScript Developer with over 2 years of experience
          creating responsive web applications and mobile solutions. Specialized
          in React, Next.js, and TypeScript with additional fullstack skills in
          Node.js and modern databases. Passionate about building efficient,
          user-friendly interfaces and optimizing web performance.
        </p>
      </div>
    </section>
  );
}
