import SocialIcons from "./SocialIcons";

export default function Footer() {
  return (
    <footer
      className="border-t py-8 mt-12 relative overflow-hidden"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <p style={{ color: "var(--muted)" }}>
          © {new Date().getFullYear()} -{" "}
          <span className="gradient-text font-semibold">Oleksandr Kazan</span> |
          Frontend Developer
        </p>
        <SocialIcons />
      </div>
    </footer>
  );
}
