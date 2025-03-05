import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Oleksandr Kazan | Frontend Developer",
  description:
    "Personal resume and portfolio website of Oleksandr Kazan, Frontend Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

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

        <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
          <div className="relative">
            {/* Decorative elements */}
            <div
              className="absolute top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
            ></div>
            <div
              className="absolute bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
            ></div>

            {/* Content */}
            <div className="relative z-10">{children}</div>
          </div>
        </main>

        <footer
          className="border-t py-8 mt-12 relative overflow-hidden"
          style={{ borderColor: "var(--border)" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-purple-900/10"></div>
          <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
            <p style={{ color: "var(--muted)" }}>
              © {new Date().getFullYear()} -{" "}
              <span className="gradient-text font-semibold">
                Oleksandr Kazan
              </span>{" "}
              | Frontend Developer
            </p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="https://github.com/wxxzss"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
                className="hover:text-[var(--primary)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/oleksandr-kazan-465771341/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
                className="hover:text-[var(--primary)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="https://t.me/wxxzss"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "var(--muted)" }}
                className="hover:text-[var(--primary)] transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.198 2.433a2.242 2.242 0 0 0-1.022.215l-8.609 3.33c-2.068.8-4.133 1.598-5.724 2.21a405.15 405.15 0 0 1-2.849 1.09c-.42.147-.99.332-1.473.901-.728.968.193 1.798.919 2.286 1.61.516 3.275 1.009 4.654 1.472.846 1.467 1.618 2.92 2.454 4.342l.159.273c.51.885.947 1.643 1.486 1.725.394.06.765-.45.945-.27.054-.486.076-.988.097-1.496.2-2.28.033-5.144.713-6.835.056-.14.235-.23.503-.21.378.03.87.398 1.17.644 1.7 1.383 3.562 2.674 5.35 4.015.928.7 1.387 1.337 1.756 1.103.281-.178.312-.798.31-1.368-.004-2.188-.018-4.118.023-5.952.036-1.529-.639-2.379-1.337-2.776l-.06-.03z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
