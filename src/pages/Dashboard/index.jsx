import React from "react";
import DashboardHeader from "../../components/features/Dashboard/DashboardHeader";
import SearchBar from "../../components/features/Dashboard/SearchBar";
import StatsCards from "../../components/features/Dashboard/StatsCards";
import ProductivityChart from "../../components/features/Dashboard/ProductivityChart";
import TodayTasks from "../../components/features/Dashboard/TodayTasks";
import Calendar from "../../components/features/Dashboard/Calendar";
import Analytics from "../../components/features/Dashboard/Analytics";
import ProgressCard from "../../components/features/Dashboard/ProgressCard";
import RecentActivity from "../../components/features/Dashboard/RecentActivity";
import QuickActions from "../../components/features/Dashboard/QuickActions";
import FocusTimer from "../../components/features/Dashboard/FocusTimer";

export default function Dashboard() {
  const currentHour = new Date().getHours();

  let greeting = "";

  if (currentHour < 12) {
    greeting = "Good Morning";
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  const tasks = JSON.parse(localStorage.getItem("planora-tasks")) || [];

  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed",
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress",
  ).length;

  const overdueTasks = tasks.filter((task) => task.status === "Overdue").length;
  return (
    <div className="px-4 md:px-6 lg:px-8 space-y-5">
      <DashboardHeader greeting={greeting} />
      <SearchBar />
      <StatsCards
        totalTasks={totalTasks}
        completedTasks={completedTasks}
        inProgressTasks={inProgressTasks}
        overdueTasks={overdueTasks}
      />
      {/* First Section */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6">
        <div className="xl:col-span-5">
          <ProductivityChart />
        </div>

        <div className="xl:col-span-4">
          <TodayTasks />
        </div>

        <div className="xl:col-span-3">
          <Calendar />
        </div>
      </div>
      {/* Second Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        <ProgressCard />
        <RecentActivity />
        <QuickActions />
        <Analytics />
      </div>
      <div>
        <FocusTimer />
      </div>
    </div>
  );
}
