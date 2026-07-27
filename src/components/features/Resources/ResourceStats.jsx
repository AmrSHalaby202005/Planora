import React from "react";
import { Folder, FileText, Link2, Star } from "lucide-react";

export default function ResourceStats({ resources }) {
  const totalFiles = resources.length;
  const docsCount = resources.filter(
    (r) => r.type === "PDF" || r.type === "Document",
  ).length;
  const linksCount = resources.filter((r) => r.type === "Link").length;
  const favoritesCount = resources.filter((r) => r.favorite).length;

  const stats = [
    {
      title: "Total",
      value: totalFiles,
      icon: Folder,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      title: "Docs",
      value: docsCount,
      icon: FileText,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      title: "Links",
      value: linksCount,
      icon: Link2,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-100",
    },
    {
      title: "Favorites",
      value: favoritesCount,
      icon: Star,
      color: "text-purple-600",
      bg: "bg-purple-50 border-purple-100",
    },
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 w-full">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <div
            key={index}
            className="bg-white rounded-xl border border-slate-200/80 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-2xs min-w-0"
          >
            <div
              className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 ${stat.bg}`}
            >
              <Icon className={`w-4 h-4 ${stat.color}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] sm:text-xs font-medium text-slate-500 truncate">
                {stat.title}
              </p>
              <h3 className="text-sm sm:text-lg font-bold text-slate-800 leading-tight">
                {stat.value}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
