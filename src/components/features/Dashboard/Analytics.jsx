import { FiBarChart2 } from "react-icons/fi";

export default function Analytics() {
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Analytics
        </h2>

        <span className="px-3 py-1 rounded-full bg-[var(--primary-color)] text-white text-[10px] font-semibold uppercase tracking-wide">
          Soon
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center flex-1 py-8">
        <div className="w-16 h-16 rounded-2xl bg-[var(--background-color)] flex items-center justify-center mb-5">
          <FiBarChart2 size={32} className="text-[var(--primary-color)]" />
        </div>

        <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
          Analytics Coming Soon
        </h3>

        <p className="text-xs text-[var(--text-secondary)] text-center leading-6 max-w-[220px]">
          Detailed productivity insights and performance reports will be
          available soon.
        </p>
      </div>
    </div>
  );
}
