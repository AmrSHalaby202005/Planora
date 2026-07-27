import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Planora",
      tasks: 8,
      progress: 75,
      bgColor: "#3B82F6",
      progressColor: "#3B82F6",
    },
    {
      id: 2,
      title: "Marketing",
      tasks: 6,
      progress: 60,
      bgColor: "#8B5CF6",
      progressColor: "#8B5CF6",
    },
    {
      id: 3,
      title: "Study",
      tasks: 12,
      progress: 90,
      bgColor: "#10B981",
      progressColor: "#10B981",
    },
    {
      id: 4,
      title: "Personal",
      tasks: 5,
      progress: 45,
      bgColor: "#F59E0B",
      progressColor: "#F59E0B",
    },
  ];

  return (
    <div
      className="rounded-2xl shadow-md p-8 m-6"
      style={{ backgroundColor: "var(--card-color)" }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2
          className="text-lg font-semibold"
          style={{ color: "var(--text-primary)" }}
        >
          My Projects
        </h2>

        <button
          className="text-sm font-medium"
          style={{ color: "var(--primary-color)" }}
        >
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            tasks={project.tasks}
            progress={project.progress}
            bgColor={project.bgColor}
            progressColor={project.progressColor}
          />
        ))}
      </div>
    </div>
  );
}