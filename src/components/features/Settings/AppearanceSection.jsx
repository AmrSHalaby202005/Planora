import React, { useState } from "react";
import { FiSun, FiMoon, FiMonitor, FiDroplet } from "react-icons/fi";

export default function AppearanceSection() {
  const [theme, setTheme] = useState("Light");
  const [accent, setAccent] = useState("blue");

  const colors = [
    { id: "blue", color: "#2563EB" },
    { id: "purple", color: "#8B5CF6" },
    { id: "green", color: "#10B981" },
    { id: "orange", color: "#F59E0B" },
    { id: "red", color: "#EF4444" },
  ];

  return (
    <section className="rounded-2xl lg:rounded-3xl border border-[var(--border-color)] bg-[var(--card-color)] p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
          Appearance
        </h2>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Customize how Planora looks for you.
        </p>
      </div>
      {/* Theme */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 py-5 border-b border-[var(--border-color)]">
        {/* Left */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-[var(--background-color)] flex items-center justify-center text-lg text-[var(--primary-color)] shrink-0">
            <FiSun />
          </div>
          <div>
            <h3 className="font-medium text-[var(--text-primary)]">Theme</h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Choose your preferred appearance.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-wrap gap-3">
          {[
            { name: "Light", icon: <FiSun /> },
            { name: "Dark", icon: <FiMoon /> },
            { name: "System", icon: <FiMonitor /> },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => setTheme(item.name)}
              className={`flex items-center justify-center gap-2 min-w-[100px] h-11 rounded-xl px-4 text-sm font-medium transition-all duration-300 ${
                theme === item.name
                  ? "bg-[var(--primary-color)] text-white"
                  : "border border-[var(--border-color)] bg-[var(--background-color)] text-[var(--text-primary)] hover:border-[var(--primary-color)]"
              }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>
      {/* Accent Color */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pt-6">
        {/* Left */}
        <div className="flex items-start gap-3">
          <div className="w-11 h-11 rounded-xl bg-[var(--background-color)] flex items-center justify-center text-lg text-[var(--primary-color)] shrink-0">
            <FiDroplet />
          </div>
          <div>
            <h3 className="font-medium text-[var(--text-primary)]">
              Accent Color
            </h3>
            <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
              Choose your favorite accent color.
            </p>
          </div>
        </div>
        {/* Right */}
        <div className="flex flex-wrap gap-4">
          {colors.map((item) => (
            <button
              key={item.id}
              onClick={() => setAccent(item.id)}
              className={`w-10 h-10 rounded-full border-4 transition-all duration-300 ${
                accent === item.id
                  ? "border-[var(--text-primary)] scale-110"
                  : "border-transparent hover:scale-105"
              }`}
              style={{ backgroundColor: item.color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
