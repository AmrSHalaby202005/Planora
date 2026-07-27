import { MdOutlineDashboard, MdOutlineTaskAlt } from "react-icons/md";
import { FaRegStickyNote, FaUserCircle } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { HiOutlineBookOpen } from "react-icons/hi";
import { MdOutlineEditCalendar } from "react-icons/md";
import { GrAnalytics } from "react-icons/gr";

export const menuItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <MdOutlineDashboard size={24} />,
  },
  {
    title: "Tasks",
    path: "/tasks",
    icon: <MdOutlineTaskAlt size={24} />,
  },
  {
    title: "Notes",
    path: "/notes",
    icon: <FaRegStickyNote size={24} />,
  },
  {
    title: "Resources",
    path: "/resources",
    icon: <HiOutlineBookOpen size={24} />,
  },
  {
    title: "Calendar",
    path: "/calendar",
    icon: <MdOutlineEditCalendar size={24} />,
    badge: "Soon",
  },
  {
    title: "Analytics",
    path: "/analytics",
    icon: <GrAnalytics size={24} />,
    badge: "Soon",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <FaUserCircle size={24} />,
  },
  {
    title: "Settings",
    path: "/settings",
    icon: <IoSettingsOutline size={24} />,
  },
];
