import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col md:flex-row items-center gap-8 py-12 px-6 relative overflow-hidden rounded-3xl backdrop-blur-sm border border-white/10"
      style={{
        background:
          "linear-gradient(145deg, rgba(30, 41, 59, 0.7), rgba(15, 23, 42, 0.8))",
      }}
    >
      <div className="absolute inset-0 opacity-20 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-3xl -z-10"></div>
      <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>

      <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-transparent p-1 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg shadow-blue-500/20">
        <div className="absolute inset-0 rounded-full bg-[var(--card)] flex items-center justify-center text-gray-500">
          <Image
            src="https://i.postimg.cc/9FT2FRym/IMG-3048.jpg"
            alt="Oleksandr Kazan"
            width={192}
            height={192}
            className="rounded-full"
          />
        </div>
      </div>

      <div className="text-center md:text-left">
        <div className="inline-block mb-2">
          <h1 className="text-4xl font-bold gradient-text">Oleksandr Kazan</h1>
          <div className="h-1 w-1/2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mt-1"></div>
        </div>
        <h2 className="text-2xl text-[var(--muted)] mb-4">
          Frontend Developer
        </h2>
        <p className="text-[var(--foreground)] max-w-2xl backdrop-blur-sm rounded-xl bg-white/5 p-4 border border-white/10 shadow-lg">
          Frontend Developer with a technical background and over 1 year of
          experience creating modern and efficient web interfaces. Proficient in
          React, Next.js, Redux Toolkit, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
