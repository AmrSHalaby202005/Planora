import React from "react";
import { X } from "lucide-react";

export default function TaskModal({
  isModalOpen,
  setIsModalOpen,
  editingTaskId,
  handleSaveTask,
  taskForm,
  setTaskForm,
  isCreatingNewProject,
  setIsCreatingNewProject,
  newProjectName,
  setNewProjectName,
  uniqueProjects,
}) {
  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs"
      onClick={() => setIsModalOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-slate-100 relative animate-in fade-in zoom-in-95 duration-150"
      >
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <h3 className="text-base font-semibold text-slate-800">
            {editingTaskId ? "Edit Task" : "Add New Task"}
          </h3>
          <button
            onClick={() => setIsModalOpen(false)}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <form onSubmit={handleSaveTask} className="space-y-4 pt-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1.5">
              Task Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Design landing page"
              value={taskForm.task}
              onChange={(e) =>
                setTaskForm({ ...taskForm, task: e.target.value })
              }
              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
            />
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-xs font-semibold text-slate-600">
                Project
              </label>
              <button
                type="button"
                onClick={() => setIsCreatingNewProject(!isCreatingNewProject)}
                className="text-[11px] font-semibold text-blue-600 hover:underline cursor-pointer"
              >
                {isCreatingNewProject ? "Select existing" : "+ New project"}
              </button>
            </div>

            {isCreatingNewProject ? (
              <input
                type="text"
                placeholder="Enter new project name..."
                value={newProjectName}
                onChange={(e) => setNewProjectName(e.target.value)}
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              />
            ) : (
              <select
                value={taskForm.project}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, project: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              >
                {uniqueProjects
                  .filter((p) => p !== "All Projects")
                  .map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
              </select>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Priority
              </label>
              <select
                value={taskForm.priority}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, priority: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1.5">
                Due Date
              </label>
              <input
                type="text"
                placeholder="e.g. Today, May 24"
                value={taskForm.dueDate}
                onChange={(e) =>
                  setTaskForm({ ...taskForm, dueDate: e.target.value })
                }
                className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white transition-all"
              />
            </div>
          </div>

          <div className="flex items-center justify-end gap-2 pt-4 border-t border-slate-100">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-xs font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-colors shadow-xs cursor-pointer"
            >
              {editingTaskId ? "Save Changes" : "Create Task"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}