import React from "react";
import { FiGlobe, FiClock, FiCalendar, FiList } from "react-icons/fi";

export default function PreferencesSection() {
  return (
    <section className="rounded-2xl lg:rounded-3xl border border-[var(--border-color)] bg-[var(--card-color)] p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
          Preferences
        </h2>

        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Customize your productivity experience.
        </p>
      </div>
      {/* Preferences List */}
      <div>
        <PreferenceRow
          icon={<FiGlobe />}
          title="Language"
          options={["English", "العربية"]}
        />
        <PreferenceRow
          icon={<FiClock />}
          title="Time Zone"
          options={["GMT+2 (Cairo)", "GMT+1", "GMT+0"]}
        />
        <PreferenceRow
          icon={<FiCalendar />}
          title="Week Starts On"
          options={["Sunday", "Saturday", "Monday"]}
        />
        <PreferenceRow
          icon={<FiCalendar />}
          title="Date Format"
          options={["DD/MM/YYYY", "MM/DD/YYYY"]}
        />
        <PreferenceRow
          icon={<FiList />}
          title="Default Task View"
          options={["List View", "Board", "Calendar"]}
          last
        />
      </div>
    </section>
  );
}
// Preference Row
function PreferenceRow({ icon, title, options, last = false }) {
  return (
    <div
      className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 py-5
        ${!last ? "border-b border-[var(--border-color)]" : ""}
      `}
    >
      {/* Left Side */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-[var(--background-color)] flex items-center justify-center text-lg text-[var(--primary-color)] shrink-0">
          {icon}
        </div>
        <span className="font-medium text-[var(--text-primary)]">{title}</span>
      </div>
      {/* Right Side */}
      <select
        className="w-full lg:w-64 h-10 rounded-xl border border-[var(--border-color)] bg-[var(--background-color)] px-1
            text-sm text-[var(--text-primary)] outline-none transition-all duration-300 focus:border-[var(--primary-color)]
            focus:ring-2 focus:ring-[var(--primary-color)]/20"
      >
        {options.map((item) => (
          <option key={item} className="rounded-xl">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
