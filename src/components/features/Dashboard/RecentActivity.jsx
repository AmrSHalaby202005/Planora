import ActivityItem from "./ActivityItem";

const activities = [
  {
    id: 1,
    type: "completed",
    title: 'Completed "Fix login bug"',
    time: "2 hours ago",
  },
  {
    id: 2,
    type: "created",
    title: 'Created "API integration task"',
    time: "5 hours ago",
  },
  {
    id: 3,
    type: "updated",
    title: 'Updated "Project roadmap"',
    time: "Yesterday",
  },
  {
    id: 4,
    type: "note",
    title: "Added a new note",
    time: "2 days ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {/* Header */}

      <div className="flex items-center justify-between mb-5">
        <div>
          <h2 className="text-lg font-semibold text-[var(--text-primary)]">
            Recent Activity
          </h2>

          <p className="text-xs text-[var(--text-secondary)]">
            Your latest actions
          </p>
        </div>

        <button className="text-xs font-medium text-[var(--primary-color)] hover:scale-110">
          View All
        </button>
      </div>

      {/* Activities */}

      <div>
        {activities.map((activity) => (
          <ActivityItem key={activity.id} {...activity} />
        ))}
      </div>
    </div>
  );
}
