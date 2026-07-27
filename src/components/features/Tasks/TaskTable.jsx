import React from "react";
import { Check, MoreVertical, Pencil, Trash2 } from "lucide-react";
import { getPriorityBadge, getStatusBadge } from "../../../constants/initialTasks";

export default function TaskTable({
  currentTasks,
  toggleTask,
  activeMenuId,
  setActiveMenuId,
  openEditModal,
  handleDeleteTask,
  allCurrentTasksCompleted,
  toggleAllCurrentTasks,
}) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200/80 shadow-xs overflow-hidden">
      {/* Mobile Cards View (< md) */}
      <div className="block md:hidden divide-y divide-slate-100">
        {currentTasks.length > 0 ? (
          currentTasks.map((row) => (
            <div key={row.id} className="p-4 space-y-3 relative">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <button
                    onClick={() => toggleTask(row.id)}
                    className={`mt-0.5 w-5 h-5 rounded-full border flex items-center justify-center transition-all shrink-0 cursor-pointer ${
                      row.completed
                        ? "bg-emerald-500 border-emerald-500 text-white"
                        : "border-slate-300"
                    }`}
                  >
                    {row.completed && <Check className="w-3 h-3 stroke-[3]" />}
                  </button>
                  <span
                    className={`text-sm font-medium ${
                      row.completed ? "line-through text-slate-400" : "text-slate-800"
                    }`}
                  >
                    {row.task}
                  </span>
                </div>

                <div className="relative shrink-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveMenuId(activeMenuId === row.id ? null : row.id);
                    }}
                    className="text-slate-400 hover:text-slate-600 p-1 rounded-lg cursor-pointer"
                  >
                    <MoreVertical className="w-4 h-4" />
                  </button>

                  {activeMenuId === row.id && (
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="absolute right-0 top-8 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-left"
                    >
                      <button
                        onClick={() => openEditModal(row)}
                        className="w-full px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Pencil className="w-3.5 h-3.5 text-blue-500" />
                        <span>Edit Task</span>
                      </button>
                      <button
                        onClick={() => handleDeleteTask(row.id)}
                        className="w-full px-3.5 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                        <span>Delete</span>
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
                <div className="flex items-center gap-1.5">
                  <span className={`w-2 h-2 rounded-full ${row.projectColor}`} />
                  <span className="text-slate-600 font-medium">{row.project}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${getPriorityBadge(
                      row.priority
                    )}`}
                  >
                    {row.priority}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded text-[11px] font-semibold ${getStatusBadge(
                      row.status
                    )}`}
                  >
                    {row.status}
                  </span>
                  <span className="text-slate-400">{row.dueDate}</span>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-slate-400 text-sm">No tasks found</div>
        )}
      </div>

      {/* Desktop Table View (>= md) */}
      <div className="hidden md:block overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-slate-100 bg-slate-50/50 text-xs font-medium text-slate-400 uppercase tracking-wider">
              <th className="py-4 px-4 w-12 text-center">
                <input
                  type="checkbox"
                  checked={allCurrentTasksCompleted}
                  onChange={toggleAllCurrentTasks}
                  className="rounded border-slate-300 text-blue-600 focus:ring-blue-500/20 w-4 h-4 cursor-pointer"
                />
              </th>
              <th className="py-4 px-4 font-semibold text-slate-500">Task</th>
              <th className="py-4 px-4 font-semibold text-slate-500">Project</th>
              <th className="py-4 px-4 font-semibold text-slate-500">Priority</th>
              <th className="py-4 px-4 font-semibold text-slate-500">Due Date</th>
              <th className="py-4 px-4 font-semibold text-slate-500">Status</th>
              <th className="py-4 px-4 font-semibold text-slate-500 text-right pr-6">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {currentTasks.length > 0 ? (
              currentTasks.map((row) => (
                <tr key={row.id} className="hover:bg-slate-50/60 transition-colors group">
                  <td className="py-4 px-4 text-center">
                    <button
                      onClick={() => toggleTask(row.id)}
                      className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                        row.completed
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-slate-300 group-hover:border-slate-400"
                      }`}
                    >
                      {row.completed && <Check className="w-3 h-3 stroke-[3]" />}
                    </button>
                  </td>

                  <td className="py-4 px-4 font-medium text-slate-800">
                    <span
                      className={
                        row.completed ? "line-through text-slate-400" : "text-slate-800"
                      }
                    >
                      {row.task}
                    </span>
                  </td>

                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${row.projectColor}`} />
                      <span className="text-slate-600 text-xs font-medium">
                        {row.project}
                      </span>
                    </div>
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${getPriorityBadge(
                        row.priority
                      )}`}
                    >
                      {row.priority}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-slate-500 text-xs font-medium">
                    {row.dueDate}
                  </td>

                  <td className="py-4 px-4">
                    <span
                      className={`inline-block px-2.5 py-1 rounded-md text-xs font-semibold ${getStatusBadge(
                        row.status
                      )}`}
                    >
                      {row.status}
                    </span>
                  </td>

                  <td className="py-4 px-4 text-right pr-6 relative">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenuId(activeMenuId === row.id ? null : row.id);
                      }}
                      className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                    >
                      <MoreVertical className="w-4 h-4" />
                    </button>

                    {activeMenuId === row.id && (
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-6 top-10 w-36 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-left"
                      >
                        <button
                          onClick={() => openEditModal(row)}
                          className="w-full px-3.5 py-2 text-xs font-medium text-slate-600 hover:bg-slate-50 flex items-center gap-2 cursor-pointer"
                        >
                          <Pencil className="w-3.5 h-3.5 text-blue-500" />
                          <span>Edit Task</span>
                        </button>
                        <button
                          onClick={() => handleDeleteTask(row.id)}
                          className="w-full px-3.5 py-2 text-xs font-medium text-rose-600 hover:bg-rose-50 flex items-center gap-2 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5 text-rose-500" />
                          <span>Delete</span>
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className="text-center py-8 text-slate-400 text-sm">
                  No tasks found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}