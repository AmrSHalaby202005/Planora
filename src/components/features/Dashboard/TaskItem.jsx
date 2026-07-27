import { FiCheck } from "react-icons/fi";

export default function TaskItem({ title, time, status, completed = false }) {
  const statusStyle = {
    Completed: "bg-[var(--success-color)]/10 text-[var(--success-color)]",
    "In Progress": "bg-[var(--warning-color)]/10 text-[var(--warning-color)]",
    Overdue: "bg-[var(--error-color)]/10 text-[var(--error-color)]",
  };

  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 py-2 border-b border-[var(--border-color)] last:border-none">
      {/* Left */}
      <div className="flex items-center gap-2">
        <button
          className={`w-5 h-5 rounded-lg border-2 flex items-center justify-center transition
            ${
              completed
                ? "bg-[var(--primary-color)] border-[var(--primary-color)] text-white"
                : "border-[var(--border-color)]"
            }`}
        >
          {completed && <FiCheck size={12} />}
        </button>
        <div>
          <h3 className="text-xs font-medium text-[var(--text-primary)]">
            {title}
          </h3>
          <p className="text-xs text-[var(--text-secondary)]">{time}</p>
        </div>
      </div>
      {/* Status */}
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium w-fit ${
          statusStyle[status]
        }`}
      >
        {status}
      </span>
    </div>
  );
}
