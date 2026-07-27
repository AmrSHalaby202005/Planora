export default function QuickActionCard({ icon, title, bgColor, iconColor }) {
  return (
    <button
      className="w-full border border-[var(--border-color)] rounded-2xl p-4 flex flex-col items-center
     justify-center gap-3 bg-[var(--card-color)] transition-all duration-300 hover:-translate-y-1 
     hover:shadow-md hover:border-[var(--primary-color)]"
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgColor}`}
      >
        <span className={iconColor}>{icon}</span>
      </div>

      <span className="text-xs font-medium text-[var(--text-primary)] text-center">
        {title}
      </span>
    </button>
  );
}
