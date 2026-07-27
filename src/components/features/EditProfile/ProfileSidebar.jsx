import {
  User,
  Settings,
  Lock,
  Bell,
  Palette,
  Camera,
  Headphones,
} from "lucide-react";

import profile from "../../../assets/images/logo.png";

export default function ProfileSidebar() {
  return (
    <div
      className="w-full lg:w-80  rounded-2xl shadow-sm p-6"
      style={{ backgroundColor: "var(--background-color)" }}
    >
      {/* Profile name , photo,.. */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={profile}
            alt="Profile"
            className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
          />

          <button
            className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition cursor-pointer"
            style={{ color: "var(--card-color)" }}
          >
            <Camera size={18} />
          </button>
        </div>

        <h2 className="text-2xl font-bold mt-5">Rahma</h2>

        <p className="text-lg" style={{ color: "var(--text-secondary)" }}>
          Frontend Developer
        </p>
      </div>

      {/* Menu */}

      <div className="mt-8 space-y-2 ">
        <button
          className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-blue-50 text-lg font-semibold cursor-pointer"
          style={{
            color: "var(--primary-color)",
            backgroundColor: "var(--card-color)",
          }}
        >
          <User size={20} />
          Profile Information
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <Settings size={20} />
          Account Settings
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <Lock size={20} />
          Password
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <Bell size={20} />
          Notifications
        </button>

        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-100 transition cursor-pointer">
          <Palette size={20} />
          Appearance
        </button>
      </div>

      {/* Help */}

      <div
        className="mt-8 rounded-2xl p-5"
        style={{ backgroundColor: "var(--card-color)" }}
      >
        <Headphones
          size={28}
          className="text-lg"
          style={{ color: "var(--primary-color)" }}
        />

        <h3 className="font-bold mt-3">Need Help?</h3>

        <p className="text-sm mt-2" style={{ color: "var(--text-secondary)" }}>
          If you need assistance, feel free to contact our support team.
        </p>

        <button
          className="mt-5 w-full py-3 rounded-xl bg-blue-600 hover:bg-blue-700 font-semibold transition cursor-pointer"
          style={{ color: "var(--card-color)" }}
        >
          Contact Support
        </button>
      </div>
    </div>
  );
}
