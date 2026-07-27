import { Folder } from "lucide-react";

export default function ProjectCard({
  title,
  tasks,
  progress,
  bgColor,
  progressColor,
}) {
  return (
    <div
      className="rounded-2xl p-5 shadow-sm border-2"
      style={{
        backgroundColor: "var(--card-background)",
        borderColor: "var(--border-color)",
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: bgColor }}
      >
        <Folder size={22} color="white" />
      </div>

      <h3
        className="font-semibold"
        style={{ color: "var(--text-primary)" }}
      >
        {title}
      </h3>

      <p
        className="text-sm mt-1"
        style={{ color: "var(--text-secondary)" }}
      >
        {tasks} Tasks
      </p>

      <div
        className="w-full h-2 rounded-full mt-5"
        style={{ backgroundColor: "#E5E7EB" }}
      >
        <div
          className="h-2 rounded-full"
          style={{
            width: `${progress}%`,
            backgroundColor: progressColor,
          }}
        ></div>
      </div>

      <p
        className="text-right text-sm mt-2"
        style={{ color: "var(--text-secondary)" }}
      >
        {progress}%
      </p>
    </div>
  );
}