import React, { useState } from "react";
import { FiBell, FiClipboard, FiMail, FiBriefcase } from "react-icons/fi";

export default function NotificationsSection() {
  const [notifications, setNotifications] = useState({
    reminders: true,
    summary: true,
    projects: true,
    marketing: false,
  });

  const toggle = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <section className="rounded-2xl lg:rounded-3xl border border-[var(--border-color)] bg-[var(--card-color)] p-4 sm:p-6 lg:p-8 shadow-sm">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-xl sm:text-2xl font-semibold text-[var(--text-primary)]">
          Notifications
        </h2>
        <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
          Choose what you want to be notified about.
        </p>
      </div>
      {/* Notification List */}
      <div>
        <NotificationRow
          icon={<FiBell />}
          title="Task Reminders"
          description="Receive reminders for upcoming and overdue tasks."
          checked={notifications.reminders}
          onChange={() => toggle("reminders")}
        />
        <NotificationRow
          icon={<FiClipboard />}
          title="Daily Summary"
          description="Receive a summary of your daily activity."
          checked={notifications.summary}
          onChange={() => toggle("summary")}
        />
        <NotificationRow
          icon={<FiBriefcase />}
          title="Project Updates"
          description="Get notified when your projects are updated."
          checked={notifications.projects}
          onChange={() => toggle("projects")}
        />
        <NotificationRow
          icon={<FiMail />}
          title="Marketing Emails"
          description="Receive product updates and special offers."
          checked={notifications.marketing}
          onChange={() => toggle("marketing")}
          last
        />
      </div>
    </section>
  );
}
// Notification Row
function NotificationRow({
  icon,
  title,
  description,
  checked,
  onChange,
  last = false,
}) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 py-5
        ${!last ? "border-b border-[var(--border-color)]" : ""}
      `}
    >
      {/* Left Side */}
      <div className="flex items-start gap-4 flex-1">
        <div className="w-11 h-11 rounded-xl bg-[var(--background-color)] flex items-center justify-center text-lg text-[var(--primary-color)] shrink-0">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-[var(--text-primary)]">{title}</h3>
          <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
            {description}
          </p>
        </div>
      </div>
      {/* Toggle */}
      <div className="flex justify-end sm:justify-center">
        <button
          onClick={onChange}
          className={`relative h-7 w-12 rounded-full transition-all duration-300 ${
            checked ? "bg-[var(--primary-color)]" : "bg-[var(--border-color)]"
          }`}
        >
          <span
            className={`absolute top-1 h-5 w-5 rounded-full bg-white transition-all duration-300 ${
              checked ? "right-1" : "left-1"
            }`}
          />
        </button>
      </div>
    </div>
  );
}
