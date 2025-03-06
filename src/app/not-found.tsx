import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-4">
      <div className="backdrop-blur-sm rounded-3xl bg-white/5 p-8 border border-white/10 max-w-md">
        <h1 className="text-4xl font-bold gradient-text mb-4">
          404 - Page Not Found
        </h1>
        <p className="mb-6 text-[var(--foreground)]/90">
          Oops! The page you are looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className="btn-primary inline-block">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
