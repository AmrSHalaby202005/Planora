import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Tasks from "../pages/Tasks";
import Notes from "../pages/Notes";
import Resources from "../pages/Resources";
import Calendar from "../pages/Calendar";
import Analytics from "../pages/Analytics";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Settings from "../pages/Settings";

import SignUp from "../pages/SignUp";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";

export default function AppRoutes() {
  return (
    <Routes>


      {/* =========================
            Main Routes
      ========================== */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profile/edit" element={<EditProfile />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
            {/* =========================
            Auth Routes
      ========================== */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
      </Route>
    </Routes>
  );
}