import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="container mx-auto px-5 px-5 sm:px-8 lg:px-12 py-10">
      <div
        className="relative overflow-hidden rounded-3xl px-6 sm:px-10 lg:px-16 py-12 md:py-16 text-center"
        style={{ backgroundColor: "var(--primary-color)" }}
      >
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,.25) 1px, transparent 1px)
            `,
            backgroundSize: "35px 35px",
          }}
        />

        {/* Blur Circle */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse" />

        {/* Blur Circle */}
        <div className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-cyan-300/10 blur-3xl animate-pulse" />

        {/* Floating Ring */}
        <div className="absolute top-10 right-12 w-20 h-20 border border-white/20 rounded-full animate-float hidden md:block" />

        {/* Floating Ring */}
        <div className="absolute bottom-10 left-10 w-12 h-12 border border-white/20 rounded-full animate-float hidden lg:block" />

        {/* Small Dots */}
        <div className="absolute top-8 left-1/3 w-2 h-2 rounded-full bg-white/60 animate-ping" />
        <div className="absolute bottom-12 right-1/4 w-2 h-2 rounded-full bg-cyan-200 animate-ping" />

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to boost your productivity?
          </h2>

          <p className="mt-5 text-blue-100 text-base md:text-lg leading-8">
            Join Planora today and manage your tasks, notes, and workflow in one
            clean and modern workspace.
          </p>

          <Link
            to="/signup"
            className="inline-flex items-center justify-center mt-8 px-9 py-3 rounded-xl font-semibold transition-all duration-300 animate-float hover:-translate-y-1 hover:scale-105"
            style={{
              backgroundColor: "var(--card-color)",
              color: "var(--primary-color)",
              border: "2px solid rgba(255,255,255,.7)",
              boxShadow:
                "0 15px 35px rgba(0,0,0,.2), inset 0 3px 8px rgba(255,255,255,.6)",
            }}
          >
            Create Free Account
          </Link>
        </div>
      </div>
    </section>
  );
}
