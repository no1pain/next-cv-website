import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="border-t border-gray-700/30 py-8 mt-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-gray-800/10 to-purple-900/10"></div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} -{" "}
          <span className="text-white font-semibold">Oleksandr Kazan</span> |
          Frontend Developer
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
