import React from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const data = [
  { day: "Mon", completed: 6, created: 12 },
  { day: "Tue", completed: 10, created: 18 },
  { day: "Wed", completed: 20, created: 30 },
  { day: "Thu", completed: 15, created: 25 },
  { day: "Fri", completed: 20, created: 30 },
  { day: "Sat", completed: 26, created: 35 },
  { day: "Sun", completed: 24, created: 33 },
];

export default function ProductivityChart() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("This Week");

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const options = ["This Week", "This Month", "This Year"];
  return (
    <div className="bg-[var(--card-color)] border border-[var(--border-color)] rounded-[28px] p-5 md:p-7 shadow-sm hover:shadow-md transition-all duration-300">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h2 className="text-xl font-bold text-[var(--text-primary)]">
          Productivity Overview
        </h2>

        <div className="relative" ref={dropdownRef}>
          {/* Button */}

          <button
            onClick={() => setOpen(!open)}
            className=" flex items-center justify-between gap-3 min-w-[100px] h-11 px-4 rounded-2xl border border-[var(--border-color)]
                bg-[var(--background-color)] text-[var(--text-primary)] text-sm font-medium transition-all duration-200
                hover:border-[var(--primary-color)] hover:bg-white"
          >
            {selected}

            <FiChevronDown
              size={18}
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Menu */}

          {open && (
            <div className="absolute right-0 mt-3 w-full overflow-hidden rounded-2xl border border-[var(--border-color)] bg-[var(--card-color)] shadow-xl z-50">
              {options.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    setSelected(item);
                    setOpen(false);
                  }}
                  className={`w-full px-4 py-3 text-left text-sm transition
                ${
                  selected === item
                    ? "bg-[var(--primary-color)] text-white"
                    : "text-[var(--text-primary)] hover:bg-[var(--background-color)]"
                }
              `}
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* Legend */}
      <div className="flex flex-wrap items-center gap-8 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-5 h-[4px] rounded-full bg-[var(--secondary-color)]"></span>
          <p className="text-sm text-[var(--text-secondary)]">
            Completed Tasks
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-5 h-[4px] rounded-full bg-[var(--primary-color)]"></span>
          <p className="text-sm text-[var(--text-secondary)]">Tasks Created</p>
        </div>
      </div>
      {/* Chart */}
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid
              vertical={false}
              stroke="var(--border-color)"
              strokeDasharray="3 6"
            />
            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              padding={{ left: 10, right: 10, top: 200 }}
              tick={{
                fill: "var(--text-secondary)",
                fontSize: 13,
              }}
            />
            <YAxis
              domain={[0, 36]}
              ticks={[0, 9, 18, 27, 36]}
              width={40}
              axisLine={false}
              tickLine={false}
              tick={{
                fill: "var(--text-secondary)",
                fontSize: 13,
              }}
            />
            <Tooltip
              cursor={false}
              contentStyle={{
                background: "var(--card-color)",
                border: "1px solid var(--border-color)",
                borderRadius: "16px",
                boxShadow: "0 8px 24px rgba(0,0,0,.08)",
              }}
            />
            <Line
              type="monotone"
              dataKey="completed"
              stroke="var(--secondary-color)"
              strokeWidth={4}
              strokeLinecap="round"
              dot={false}
              activeDot={{
                r: 6,
                fill: "var(--secondary-color)",
              }}
            />
            <Line
              type="monotone"
              dataKey="created"
              stroke="var(--primary-color)"
              strokeWidth={4}
              strokeLinecap="round"
              dot={false}
              activeDot={{
                r: 6,
                fill: "var(--primary-color)",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
