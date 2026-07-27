import { FiCheck, FiPlus, FiEdit2, FiFileText } from "react-icons/fi";

export default function ActivityItem({ type, title, time }) {
  const activity = {
    completed: {
      icon: <FiCheck size={12} />,
      bg: "bg-[var(--success-color)]/10",
      color: "text-[var(--success-color)]",
    },

    created: {
      icon: <FiPlus size={12} />,
      bg: "bg-[var(--primary-color)]/10",
      color: "text-[var(--primary-color)]",
    },

    updated: {
      icon: <FiEdit2 size={12} />,
      bg: "bg-[var(--warning-color)]/10",
      color: "text-[var(--warning-color)]",
    },

    note: {
      icon: <FiFileText size={12} />,
      bg: "bg-[var(--secondary-color)]/10",
      color: "text-[var(--secondary-color)]",
    },
  };

  const item = activity[type];

  return (
    <div className="flex items-start gap-3 py-2 border-b border-[var(--border-color)] last:border-none">
      <div
        className={`w-7 h-7 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}
      >
        {item.icon}
      </div>

      <div className="flex-1">
        <p className="text-[12px] font-medium text-[var(--text-primary)]">
          {title}
        </p>

        <span className="text-[10px] text-[var(--text-secondary)]">{time}</span>
      </div>
    </div>
  );
}
