import React from "react";
import { Mail, Calendar, LogOut } from "lucide-react";
import Profile from "../../../assets/images/logo.png";
import { useNavigate } from "react-router-dom";

export default function ProfileHeader({ user, onLogout }) {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden rounded-2xl shadow-md p-8 m-6"
      style={{
        background: "var(--card-color)",
      }}
    >
      {/* Buttons: Edit Profile & Logout */}
      <div className="absolute top-6 right-4 flex items-center gap-2">
        <button
          onClick={() => navigate("/profile/edit")}
          className="text-sm font-medium transition hover:opacity-80 px-4 py-2 rounded-xl cursor-pointer"
          style={{ color: "var(--text-primary)" }}
        >
          Edit Profile
        </button>

        {onLogout && (
          <button
            onClick={onLogout}
            className="flex items-center gap-1.5 text-sm font-medium transition hover:bg-rose-100/50 px-3 py-2 rounded-xl text-rose-500 cursor-pointer"
          >
            <LogOut size={16} />
            Logout
          </button>
        )}
      </div>

      {/* Profile Photo, Name, Email... */}
      <div className="flex items-center gap-6">
        <div className="relative">
          {/* لو اليوزر عنده صورة هتعرضها، لو مفيش هتعرض الصورة الافتراضية Profile */}
          <img
            src={user?.avatar || Profile}
            alt={user?.name || "Profile"}
            className="w-24 h-24 rounded-full border-4 object-cover"
            style={{ borderColor: "var(--card-color)" }}
          />

          {/* Online status indicator */}
          <span
            className="absolute bottom-1 right-1 w-4 h-4 rounded-full border-2"
            style={{
              backgroundColor: "var(--success-color)",
              borderColor: "var(--card-color)",
            }}
          ></span>
        </div>

        <div>
          <h2
            className="text-2xl font-bold"
            style={{ color: "var(--text-primary)" }}
          >
            {user?.name || "Guest"}
          </h2>

          <p
            className="font-medium mt-1 text-sm"
            style={{ color: "var(--text-secondary)" }}
          >
            {user?.role || "Frontend Developer"}
          </p>

          <div
            className="mt-4 space-y-2 text-md"
            style={{ color: "var(--text-secondary)" }}
          >
            <div className="flex items-center gap-2">
              <Mail size={16} />
              <span>{user?.email || "no-email@example.com"}</span>
            </div>

            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{user?.joinedDate || "Joined Recently"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
