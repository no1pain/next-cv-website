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
  title: "My Professional Resume",
  description: "Personal resume and portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="bg-gray-800 text-white p-4">
          <nav className="max-w-6xl mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              My Resume
            </Link>
            <div className="space-x-4">
              <Link href="/" className="hover:underline">
                Home
              </Link>
              <Link href="/projects" className="hover:underline">
                Projects
              </Link>
            </div>
          </nav>
        </header>
        <main className="max-w-6xl mx-auto p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-4 mt-8">
          <div className="max-w-6xl mx-auto text-center">
            <p>© {new Date().getFullYear()} - My Professional Resume</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
