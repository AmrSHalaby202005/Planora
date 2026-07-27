import {
  FiClipboard,
  FiCheckCircle,
  FiClock,
  FiAlertTriangle,
} from "react-icons/fi";

import StatCard from "./StatCard";

export default function StatsCards({
  totalTasks,
  completedTasks,
  inProgressTasks,
  overdueTasks,
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
      <StatCard
        title="Total Tasks"
        value={totalTasks}
        color="var(--primary-color)"
        icon={<FiClipboard size={24} color="white" />}
      />

      <StatCard
        title="Completed"
        value={completedTasks}
        color="var(--success-color)"
        icon={<FiCheckCircle size={24} color="white" />}
      />

      <StatCard
        title="In Progress"
        value={inProgressTasks}
        color="var(--warning-color)"
        icon={<FiClock size={24} color="white" />}
      />

      <StatCard
        title="Overdue"
        value={overdueTasks}
        color="var(--error-color)"
        icon={<FiAlertTriangle size={24} color="white" />}
      />
    </div>
  );
}
