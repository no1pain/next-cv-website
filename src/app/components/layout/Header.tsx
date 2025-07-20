import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b border-gray-700/30 py-4"
      style={{
        backgroundColor: "rgba(17, 24, 39, 0.95)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold relative group">
          <span className="text-white">Oleksandr Kazan</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-gray-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div className="space-x-6">
          <Link
            href="/"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/projects"
            className="text-gray-300 hover:text-white transition-colors duration-300"
          >
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
