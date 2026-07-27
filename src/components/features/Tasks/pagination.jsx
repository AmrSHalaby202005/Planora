import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  filteredTasks,
  indexOfFirstTask,
  indexOfLastTask,
  currentPage,
  totalPages,
  handlePageChange,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500 font-medium">
      <div>
        Showing {filteredTasks.length > 0 ? indexOfFirstTask + 1 : 0} to{" "}
        {Math.min(indexOfLastTask, filteredTasks.length)} of {filteredTasks.length} entries
      </div>

      <div className="flex items-center gap-1.5">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`w-8 h-8 rounded-lg font-semibold text-xs transition-colors cursor-pointer ${
              currentPage === page
                ? "bg-blue-600 text-white shadow-xs"
                : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="p-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}