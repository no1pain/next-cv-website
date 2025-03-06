import Link from "next/link";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b py-4"
      style={{
        backgroundColor: "rgba(15, 23, 42, 0.9)",
        borderColor: "var(--border)",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold relative group">
          <span className="gradient-text">Oleksandr Kazan</span>
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
        </Link>
        <div className="space-x-6">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/projects" className="nav-link">
            Projects
          </Link>
        </div>
      </nav>
    </header>
  );
}
