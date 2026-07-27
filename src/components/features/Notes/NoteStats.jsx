import React from "react";
import { StickyNote, Pin, Star, Archive } from "lucide-react";

export default function NoteStats({
  totalNotes,
  pinnedNotes,
  favoriteNotes,
  archivedNotes,
}) {
  const stats = [
    {
      title: "Total",
      value: totalNotes,
      icon: StickyNote,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      title: "Pinned",
      value: pinnedNotes,
      icon: Pin,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Favorites",
      value: favoriteNotes,
      icon: Star,
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;

        return (
          <div
            key={index}
            className="bg-white rounded-2xl border border-slate-200/80 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl border flex items-center justify-center shrink-0 ${stat.bg}`}
            >
              <Icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium">
                {stat.title}
              </p>
              <h3 className="text-sm sm:text-lg font-bold text-slate-800">
                {stat.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
