import TaskItem from "./TaskItem";

const tasks = [
  {
    id: 1,
    title: "Design Landing Page",
    time: "09:00 AM",
    status: "In Progress",
    completed: false,
  },
  {
    id: 2,
    title: "Write Project Documentation",
    time: "11:30 AM",
    status: "In Progress",
    completed: false,
  },
  {
    id: 3,
    title: "Fix Sidebar Responsive",
    time: "02:00 PM",
    status: "Completed",
    completed: true,
  },
  {
    id: 4,
    title: "User Research for New Feature",
    time: "04:30 PM",
    status: "Overdue",
    completed: false,
  },
  {
    id: 5,
    title: "Update Dashboard UI",
    time: "06:00 PM",
    status: "Overdue",
    completed: false,
  },
];

export default function TodayTasks() {
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-5 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            Today's Tasks
          </h2>

          <p className="text-xs text-[var(--text-secondary)]">
            You have {tasks.length} tasks today
          </p>
        </div>

        <button className="text-xs font-medium text-[var(--primary-color)] hover:scale-110">
          View All
        </button>
      </div>

      {/* Tasks */}
      <div className="space-y-1">
        {tasks.map((task) => (
          <TaskItem key={task.id} {...task} />
        ))}
      </div>
    </div>
  );
}
