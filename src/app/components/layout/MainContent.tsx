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
          style={{ backgroundColor: "rgba(59, 130, 246, 0.1)" }}
        ></div>
        <div
          className="absolute bottom-20 -right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(139, 92, 246, 0.1)" }}
        ></div>

        <div className="relative z-10">{children}</div>
      </div>
    </main>
  );
}
