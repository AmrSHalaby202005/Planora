import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  nextPage,
  prevPage,
  setCurrentPage,
}) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6">
      <p className="text-sm text-slate-500">
        Page <span className="font-semibold text-slate-700">{currentPage}</span>{" "}
        of <span className="font-semibold text-slate-700">{totalPages}</span>
      </p>

      <div className="flex items-center gap-2">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-9 h-9 rounded-xl text-sm font-semibold transition cursor-pointer ${
              currentPage === i + 1
                ? "bg-blue-600 text-white"
                : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className="w-9 h-9 flex items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
}
