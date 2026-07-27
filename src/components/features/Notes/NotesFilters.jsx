import React, { useState } from "react";
import { Search, Plus, ChevronDown } from "lucide-react";

export default function NotesFilters({
  searchQuery,
  setSearchQuery,
  openAddModal,
  activeTab,
  setActiveTab,
  setCurrentPage,
  sortBy,
  setSortBy,
}) {
  const [isSortOpen, setIsSortOpen] = useState(false);

  const tabs = ["All Notes", "Pinned", "Favorites"];

  const sortOptions = ["Newest", "Oldest", "Title A-Z", "Title Z-A"];

  return (
    <div className="space-y-4">
      {/* Search & Add */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />

          <input
            type="text"
            placeholder="Search notes..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 text-sm bg-white border border-slate-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
          />
        </div>

        <button
          type="button"
          onClick={openAddModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white rounded-xl font-medium transition-all shadow-sm cursor-pointer"
        >
          <Plus className="w-4 h-4" />
          <span>Add Note</span>
        </button>
      </div>

      {/* Tabs + Sort */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 border-b border-slate-200 pb-3">
        {/* Tabs */}
        <div className="overflow-x-auto scrollbar-none">
          <div className="flex items-center gap-2 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setCurrentPage(1);
                }}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all shrink-0 cursor-pointer ${
                  activeTab === tab
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-100/60"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Sort Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="inline-flex items-center justify-between gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 shadow-sm cursor-pointer min-w-[140px]"
          >
            <span>{sortBy}</span>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
          </button>

          {isSortOpen && (
            <div className="absolute right-0 top-full mt-2 w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-50">
              {sortOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    setSortBy(option);
                    setIsSortOpen(false);
                    setCurrentPage(1);
                  }}
                  className={`w-full px-4 py-2 text-xs text-left transition-colors cursor-pointer ${
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
  );
}
