import { FiPlus, FiFileText, FiUpload, FiBarChart2 } from "react-icons/fi";

import QuickActionCard from "./QuickActionCard";

const actions = [
  {
    id: 1,
    title: "New Task",
    icon: <FiPlus size={18} />,
    bgColor: "bg-[var(--primary-color)]/10",
    iconColor: "text-[var(--primary-color)]",
  },
  {
    id: 2,
    title: "New Note",
    icon: <FiFileText size={18} />,
    bgColor: "bg-[var(--secondary-color)]/10",
    iconColor: "text-[var(--secondary-color)]",
  },
  {
    id: 3,
    title: "Resource",
    icon: <FiUpload size={18} />,
    bgColor: "bg-[var(--warning-color)]/10",
    iconColor: "text-[var(--warning-color)]",
  },
  {
    id: 4,
    title: "Analytics",
    icon: <FiBarChart2 size={18} />,
    bgColor: "bg-[var(--success-color)]/10",
    iconColor: "text-[var(--success-color)]",
  },
];

export default function QuickActions() {
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {/* Header */}

      <div className="mb-5">
        <h2 className="text-lg font-semibold text-[var(--text-primary)]">
          Quick Actions
        </h2>

        <p className="text-xs text-[var(--text-secondary)]">
          Shortcuts to common actions
        </p>
      </div>

      {/* Grid */}

      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <QuickActionCard key={action.id} {...action} />
        ))}
      </div>
    </div>
  );
}
