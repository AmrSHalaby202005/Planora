import React from "react";

export default function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-[var(--card-color)] rounded-2xl border border-[var(--border-color)] p-5 shadow-sm hover:shadow-md transition">
      <div className="flex items-start justify-between">
        {/* Left */}
        <div className="flex gap-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            {icon}
          </div>
          <div>
            <h2 className="text-3xl font-bold text-[var(--text-primary)]">
              {value}
            </h2>
            <p className="text-sm text-[var(--text-secondary)]">{title}</p>
          </div>
        </div>
        {/* Chart */}
        <div>chart</div>
      </div>
      {/* Bottom */}
      <p className="mt-2 text-sm text-center">
        <span className="text-[var(--success-color)] font-semibold">↑ 12%</span>
        <span className="text-[var(--text-secondary)]"> from last week</span>
      </p>
    </div>
  );
}
