import React from "react";

interface MainContentProps {
  children: React.ReactNode;
}

export default function MainContent({ children }: MainContentProps) {
  return (
    <main className="flex-grow max-w-6xl w-full mx-auto px-4 py-8">
      <div className="relative">
        <div
          className="absolute top-20 -left-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(168, 85, 247, 0.05)" }}
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(75, 85, 99, 0.1)" }}
        ></div>

        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
}
