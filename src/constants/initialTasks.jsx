export const initialTasks = [
  {
    id: 1,
    task: "Design landing page for Planora",
    project: "Planora Redesign",
    projectColor: "bg-blue-500",
    priority: "High",
    dueDate: "Today",
    status: "Completed",
    completed: true,
  },
  {
    id: 2,
    task: "Create a marketing strategy document",
    project: "Marketing Plan",
    projectColor: "bg-purple-500",
    priority: "High",
    dueDate: "Today",
    status: "In Progress",
    completed: false,
  },
  {
    id: 3,
    task: "User research and feedback analysis",
    project: "Planora Redesign",
    projectColor: "bg-blue-500",
    priority: "Medium",
    dueDate: "Tomorrow",
    status: "In Progress",
    completed: false,
  },
  {
    id: 4,
    task: "Fix responsive issues on dashboard",
    project: "Planora Redesign",
    projectColor: "bg-blue-500",
    priority: "Medium",
    dueDate: "May 20",
    status: "Completed",
    completed: true,
  },
  {
    id: 5,
    task: "Study React advanced concepts",
    project: "Study Plan",
    projectColor: "bg-emerald-500",
    priority: "Low",
    dueDate: "May 21",
    status: "Overdue",
    completed: false,
  },
  {
    id: 6,
    task: "Prepare presentation for client meeting",
    project: "Marketing Plan",
    projectColor: "bg-purple-500",
    priority: "High",
    dueDate: "May 22",
    status: "Overdue",
    completed: false,
  },
  {
    id: 7,
    task: "Read 30 pages of Atomic Habits",
    project: "Personal",
    projectColor: "bg-amber-500",
    priority: "Low",
    dueDate: "May 23",
    status: "Overdue",
    completed: false,
  },
  {
    id: 8,
    task: "Optimize images and assets",
    project: "Planora Redesign",
    projectColor: "bg-blue-500",
    priority: "Medium",
    dueDate: "May 24",
    status: "In Progress",
    completed: false,
  },
  {
    id: 9,
    task: "Setup CI/CD deployment pipeline",
    project: "Planora Redesign",
    projectColor: "bg-blue-500",
    priority: "High",
    dueDate: "May 25",
    status: "In Progress",
    completed: false,
  },
];

export const priorityOrder = { High: 1, Medium: 2, Low: 3 };

export const projectColorsMap = {
  "Planora Redesign": "bg-blue-500",
  "Marketing Plan": "bg-purple-500",
  "Study Plan": "bg-emerald-500",
  Personal: "bg-amber-500",
};

export const getPriorityBadge = (priority) => {
  switch (priority) {
    case "High":
      return "bg-rose-50 text-rose-500 border border-rose-100";
    case "Medium":
      return "bg-amber-50 text-amber-500 border border-amber-100";
    case "Low":
      return "bg-emerald-50 text-emerald-500 border border-emerald-100";
    default:
      return "bg-gray-50 text-gray-500";
  }
};

export const getStatusBadge = (status) => {
  switch (status) {
    case "Completed":
      return "bg-emerald-50 text-emerald-600 border border-emerald-100";
    case "In Progress":
      return "bg-blue-50 text-blue-600 border border-blue-100";
    case "Overdue":
      return "bg-rose-50 text-rose-500 border border-rose-100";
    default:
      return "bg-gray-50 text-gray-500";
  }
};