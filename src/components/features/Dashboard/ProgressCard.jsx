import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const data = [
  {
    name: "Completed",
    value: 67,
    color: "var(--secondary-color)",
  },
  {
    name: "In Progress",
    value: 21,
    color: "var(--warning-color)",
  },
  {
    name: "Overdue",
    value: 12,
    color: "var(--error-color)",
  },
];

export default function ProgressCard() {
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full">
      {/* Header */}

      <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
        Tasks Progress
      </h2>

      <div className="flex flex-row lg:flex-col items-center justify-between gap-6">
        {/* Chart */}
        <div className="relative w-[140px] h-[140px] sm:w-[180px] sm:h-[180px] flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius="60%"
                outerRadius="80%"
                dataKey="value"
                stroke="none"
                paddingAngle={2}
              >
                {data.map((item) => (
                  <Cell key={item.name} fill={item.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-[var(--text-primary)]">
              67%
            </h3>

            <p className="text-[10px] sm:text-xs text-[var(--text-secondary)]">
              Completed
            </p>
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 w-full flex flex-col gap-3">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ background: item.color }}
                />

                <span className="text-xs sm:text-sm text-[var(--text-secondary)]">
                  {item.name}
                </span>
              </div>

              <span className="text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                {item.value}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
