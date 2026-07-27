import React from "react";
import { Search, Plus, ChevronDown } from "lucide-react";

export default function TaskFilters({
  searchQuery,
  setSearchQuery,
  setCurrentPage,
  openAddModal,
  activeTab,
  setActiveTab,
  selectedProject,
  setSelectedProject,
  uniqueProjects,
  isProjectDropdownOpen,
  setIsProjectDropdownOpen,
  sortBy,
  setSortBy,
  isSortDropdownOpen,
  setIsSortDropdownOpen,
}) {
  return (
    <>
      {/* Header & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search tasks..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs"
          />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            openAddModal();
          }}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm rounded-xl transition-colors shadow-xs cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Task</span>
        </button>
      </div>

      {/* Navigation Tabs & Dropdowns */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-4 sm:gap-6 border-b border-slate-200/80 pb-2 md:border-b-0 md:pb-0 overflow-x-auto no-scrollbar">
          {["All Tasks", "Today", "Upcoming", "Overdue"].map((tab) => (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setCurrentPage(1);
              }}
              className={`text-sm font-medium transition-colors relative pb-2 md:pb-1 whitespace-nowrap cursor-pointer ${
                activeTab === tab
                  ? "text-blue-600 font-semibold"
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {tab}
              {activeTab === tab && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between sm:justify-end gap-3 relative">
          {/* Projects Dropdown */}
          <div className="relative flex-1 sm:flex-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsProjectDropdownOpen(!isProjectDropdownOpen);
                setIsSortDropdownOpen(false);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-xs cursor-pointer"
            >
              <span className="truncate">{selectedProject}</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {isProjectDropdownOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute left-0 mt-2 w-44 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-left"
              >
                {uniqueProjects.map((proj) => (
                  <button
                    key={proj}
                    onClick={() => {
                      setSelectedProject(proj);
                      setIsProjectDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full px-3.5 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      selectedProject === proj
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {proj}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort Dropdown */}
          <div className="relative flex-1 sm:flex-none">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsSortDropdownOpen(!isSortDropdownOpen);
                setIsProjectDropdownOpen(false);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-2 px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-50 shadow-xs cursor-pointer"
            >
              <div className="truncate">
                <span className="text-slate-400">Sort: </span>
                <span className="font-semibold text-slate-700">{sortBy}</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {isSortDropdownOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-slate-100 py-1.5 z-30 text-left"
              >
                {["None", "Priority", "Task Name", "Due Date"].map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSortBy(option);
                      setIsSortDropdownOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      sortBy === option
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}