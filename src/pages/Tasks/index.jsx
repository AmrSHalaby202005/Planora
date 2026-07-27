import React, { useState, useEffect } from "react";

// Constants & Helpers
import {
  initialTasks,
  priorityOrder,
  projectColorsMap,
} from "../../constants/initialTasks";

// Components
import TaskFilters from "../../components/features/Tasks/TaskFilters";
import TaskTable from "../../components/features/Tasks/TaskTable";
import Pagination from "../../components/features/Tasks/pagination";
import TaskModal from "../../components/features/Tasks/TaskModal";

export default function Index() {
  const [tasks, setTasks] = useState(() => {
    try {
      const savedTasks = localStorage.getItem("planora_tasks");
      return savedTasks ? JSON.parse(savedTasks) : initialTasks;
    } catch (error) {
      console.error("Failed to load tasks from localStorage", error);
      return initialTasks;
    }
  });

  const [activeTab, setActiveTab] = useState("All Tasks");
  const [searchQuery, setSearchQuery] = useState("");

  const [selectedProject, setSelectedProject] = useState("All Projects");
  const [sortBy, setSortBy] = useState("None");

  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;

  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);

  const [isCreatingNewProject, setIsCreatingNewProject] = useState(false);
  const [newProjectName, setNewProjectName] = useState("");

  const [taskForm, setTaskForm] = useState({
    task: "",
    project: "Planora Redesign",
    priority: "Medium",
    dueDate: "Today",
  });

  useEffect(() => {
    localStorage.setItem("planora-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const uniqueProjects = [
    "All Projects",
    ...Array.from(new Set(tasks.map((t) => t.project))),
  ];

  const toggleTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id
          ? {
              ...t,
              completed: !t.completed,
              status: !t.completed ? "Completed" : "In Progress",
            }
          : t,
      ),
    );
  };

  const openAddModal = () => {
    setEditingTaskId(null);
    setIsCreatingNewProject(false);
    setNewProjectName("");
    setTaskForm({
      task: "",
      project: uniqueProjects[1] || "Planora Redesign",
      priority: "Medium",
      dueDate: "Today",
    });
    setIsModalOpen(true);
  };

  const openEditModal = (taskItem) => {
    setEditingTaskId(taskItem.id);
    setIsCreatingNewProject(false);
    setNewProjectName("");
    setTaskForm({
      task: taskItem.task,
      project: taskItem.project,
      priority: taskItem.priority,
      dueDate: taskItem.dueDate,
    });
    setActiveMenuId(null);
    setIsModalOpen(true);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    setActiveMenuId(null);
  };

  const getProjectColor = (projectName) => {
    if (projectColorsMap[projectName]) return projectColorsMap[projectName];
    const colors = [
      "bg-indigo-500",
      "bg-pink-500",
      "bg-teal-500",
      "bg-orange-500",
      "bg-cyan-500",
    ];
    return colors[projectName.length % colors.length];
  };

  const handleSaveTask = (e) => {
    e.preventDefault();
    if (!taskForm.task.trim()) return;

    const finalProject = isCreatingNewProject
      ? newProjectName.trim() || "General"
      : taskForm.project;

    const projectColor = getProjectColor(finalProject);

    const updatedForm = {
      ...taskForm,
      project: finalProject,
    };

    if (editingTaskId) {
      setTasks(
        tasks.map((t) =>
          t.id === editingTaskId ? { ...t, ...updatedForm, projectColor } : t,
        ),
      );
    } else {
      const createdTask = {
        id: Date.now(),
        ...updatedForm,
        projectColor,
        status: "In Progress",
        completed: false,
      };
      setTasks([createdTask, ...tasks]);
      setCurrentPage(1);
    }

    setIsModalOpen(false);
  };

  const filteredTasks = tasks
    .filter((t) => {
      const matchesSearch = t.task
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      const matchesTab =
        activeTab === "All Tasks" ||
        (activeTab === "Today" && t.dueDate === "Today") ||
        (activeTab === "Overdue" && t.status === "Overdue") ||
        (activeTab === "Upcoming" &&
          t.dueDate !== "Today" &&
          t.status !== "Overdue");

      const matchesProject =
        selectedProject === "All Projects" || t.project === selectedProject;

      return matchesSearch && matchesTab && matchesProject;
    })
    .sort((a, b) => {
      if (sortBy === "Priority") {
        return priorityOrder[a.priority] - priorityOrder[b.priority];
      }
      if (sortBy === "Task Name") {
        return a.task.localeCompare(b.task);
      }
      if (sortBy === "Due Date") {
        return a.dueDate.localeCompare(b.dueDate);
      }
      return 0;
    });

  const totalPages = Math.ceil(filteredTasks.length / tasksPerPage) || 1;

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [filteredTasks.length, totalPages, currentPage]);

  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = filteredTasks.slice(indexOfFirstTask, indexOfLastTask);

  const allCurrentTasksCompleted =
    currentTasks.length > 0 && currentTasks.every((t) => t.completed);

  const toggleAllCurrentTasks = () => {
    const targetState = !allCurrentTasksCompleted;
    const currentIds = new Set(currentTasks.map((t) => t.id));
    setTasks(
      tasks.map((t) =>
        currentIds.has(t.id)
          ? {
              ...t,
              completed: targetState,
              status: targetState ? "Completed" : "In Progress",
            }
          : t,
      ),
    );
  };

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div
      className="min-h-screen bg-slate-50/50 p-4 sm:p-6 md:p-10 font-sans text-slate-700"
      onClick={() => {
        setActiveMenuId(null);
        setIsProjectDropdownOpen(false);
        setIsSortDropdownOpen(false);
      }}
    >
      <div className="max-w-7xl mx-auto space-y-4 sm:space-y-6">
        <TaskFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setCurrentPage={setCurrentPage}
          openAddModal={openAddModal}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          selectedProject={selectedProject}
          setSelectedProject={setSelectedProject}
          uniqueProjects={uniqueProjects}
          isProjectDropdownOpen={isProjectDropdownOpen}
          setIsProjectDropdownOpen={setIsProjectDropdownOpen}
          sortBy={sortBy}
          setSortBy={setSortBy}
          isSortDropdownOpen={isSortDropdownOpen}
          setIsSortDropdownOpen={setIsSortDropdownOpen}
        />

        <TaskTable
          currentTasks={currentTasks}
          toggleTask={toggleTask}
          activeMenuId={activeMenuId}
          setActiveMenuId={setActiveMenuId}
          openEditModal={openEditModal}
          handleDeleteTask={handleDeleteTask}
          allCurrentTasksCompleted={allCurrentTasksCompleted}
          toggleAllCurrentTasks={toggleAllCurrentTasks}
        />

        <pagination
          filteredTasks={filteredTasks}
          indexOfFirstTask={indexOfFirstTask}
          indexOfLastTask={indexOfLastTask}
          currentPage={currentPage}
          totalPages={totalPages}
          handlePageChange={handlePageChange}
        />
      </div>

      <TaskModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        editingTaskId={editingTaskId}
        handleSaveTask={handleSaveTask}
        taskForm={taskForm}
        setTaskForm={setTaskForm}
        isCreatingNewProject={isCreatingNewProject}
        setIsCreatingNewProject={setIsCreatingNewProject}
        newProjectName={newProjectName}
        setNewProjectName={setNewProjectName}
        uniqueProjects={uniqueProjects}
      />
    </div>
  );
}
