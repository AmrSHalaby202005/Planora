export default function FeatureCard({ icon, title, text }) {
  return (
    <div
      className="h-full rounded-3xl border p-5 sm:p-6 lg:p-7 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      style={{
        backgroundColor: "var(--card-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Icon */}

      <div
        className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
        style={{
          backgroundColor: "var(--background-color)",
          color: "var(--primary-color)",
        }}
      >
        <span className="text-2xl sm:text-3xl">{icon}</span>
      </div>

      {/* Title */}

      <h3
        className="text-lg sm:text-xl font-bold leading-snug"
        style={{
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h3>

      {/* Description */}

      <p
        className="mt-3 text-sm sm:text-base leading-6 sm:leading-7"
        style={{
          color: "var(--text-secondary)",
        }}
      >
        {text}
      </p>
    </div>
  );
}
