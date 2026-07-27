import React from "react";
import { Search, Upload, ChevronDown } from "lucide-react";

export default function ResourceFilters({
  searchQuery,
  setSearchQuery,
  openUploadModal,
  activeTab,
  setActiveTab,
  selectedCategory,
  setSelectedCategory,
  sortBy,
  setSortBy,
  isCategoryOpen,
  setIsCategoryOpen,
  isSortOpen,
  setIsSortOpen,
  setCurrentPage,
}) {
  const tabs = [
    "All",
    "Documents",
    "PDFs",
    "Images",
    "Videos",
    "Links",
    "Favorites",
  ];
  const categories = [
    "All Categories",
    "Documents",
    "Images",
    "Videos",
    "Links",
  ];
  const sortOptions = ["Sort by: Recent", "Sort by: Name"];

  return (
    <div className="space-y-4">
      {/* Search Bar & Upload Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <div className="relative flex-1 max-w-full sm:max-w-md">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 shadow-xs transition-all"
          />
        </div>

        <button
          type="button"
          onClick={openUploadModal}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-medium text-xs sm:text-sm rounded-xl transition-all shadow-xs cursor-pointer shrink-0"
        >
          <Upload className="w-4 h-4" />
          <span>Upload Resource</span>
        </button>
      </div>

      {/* Tabs & Dropdowns Container */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 border-b border-slate-200/80 pb-3">
        {/* Scrollable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none -mx-1 px-1">
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

        {/* Categories & Sort Dropdowns */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          {/* Categories Dropdown */}
          <div className="relative flex-1 md:flex-initial">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsCategoryOpen(!isCategoryOpen);
                setIsSortOpen(false);
              }}
              className="w-full md:w-auto inline-flex items-center justify-between gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer"
            >
              <span className="truncate max-w-[110px] sm:max-w-none">
                {selectedCategory}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {isCategoryOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-full mt-1.5 w-full sm:w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-40 text-left"
              >
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => {
                      setSelectedCategory(cat);
                      setIsCategoryOpen(false);
                      setCurrentPage(1);
                    }}
                    className={`w-full px-3.5 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      selectedCategory === cat
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="relative flex-1 md:flex-initial">
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsSortOpen(!isSortOpen);
                setIsCategoryOpen(false);
              }}
              className="w-full md:w-auto inline-flex items-center justify-between gap-2 px-3 py-2 bg-white border border-slate-200 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 shadow-xs cursor-pointer"
            >
              <span className="truncate max-w-[110px] sm:max-w-none">
                {sortBy}
              </span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {isSortOpen && (
              <div
                onClick={(e) => e.stopPropagation()}
                className="absolute right-0 top-full mt-1.5 w-full sm:w-44 bg-white rounded-xl shadow-xl border border-slate-100 py-1.5 z-40 text-left"
              >
                {sortOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setSortBy(opt);
                      setIsSortOpen(false);
                    }}
                    className={`w-full px-3.5 py-2 text-xs font-medium text-left transition-colors cursor-pointer ${
                      sortBy === opt
                        ? "bg-blue-50 text-blue-600 font-semibold"
                        : "text-slate-600 hover:bg-slate-50"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
