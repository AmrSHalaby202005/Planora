// import { HiOutlineMenuAlt2 } from "react-icons/hi";
// import { IoNotificationsOutline } from "react-icons/io5";
// import { FiMoon, FiSun } from "react-icons/fi";
// import { useState } from "react";
// import { useLocation } from "react-router-dom";

// import Button from "../common/Button";
// import { menuItems } from "../../constants/menuItems";

// export default function Navbar({ setIsOpen, progress }) {
//   /* ==========================================================================
//                                   STATES
//   ========================================================================== */

//   const [darkMode, setDarkMode] = useState(false);

//   /* ==========================================================================
//                               CURRENT PAGE TITLE
//   ========================================================================== */

//   const location = useLocation();

//   const currentPage =
//     menuItems.find((item) => location.pathname.startsWith(item.path))?.title ||
//     "Home";

//   /* ==========================================================================
//                                LOCAL STORAGE
//   ========================================================================== */

//   const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

//   const user = JSON.parse(localStorage.getItem("user") || "null");

//   return (
//     <nav
//       className="relative h-20 flex items-center justify-between px-5 md:px-10 border-b shadow-sm"
//       style={{
//         backgroundColor: "var(--card-color)",
//         borderColor: "var(--border-color)",
//       }}
//     >
//       {/* ======================================================================
//                                   LEFT
//       ====================================================================== */}

//       <div className="flex items-center gap-4">
//         <button
//           onClick={() => setIsOpen(true)}
//           className="md:hidden text-3xl"
//           style={{ color: "var(--text-primary)" }}
//         >
//           <HiOutlineMenuAlt2 />
//         </button>

//         <h2
//           className="text-xl md:text-2xl font-bold"
//           style={{ color: "var(--text-primary)" }}
//         >
//           {currentPage}
//         </h2>
//       </div>

//       {/* ======================================================================
//                                   RIGHT
//       ====================================================================== */}

//       <div className="flex items-center gap-3 md:gap-5">
//         {/* Dark Mode */}

//         <button
//           onClick={() => setDarkMode(!darkMode)}
//           className="text-2xl transition duration-300 hover:scale-110"
//           style={{ color: "var(--text-secondary)" }}
//         >
//           {darkMode ? <FiSun /> : <FiMoon />}
//         </button>

//         {/* Notifications */}

//         {/* ==================================================================
//                                   USER
//         ================================================================== */}

//         {isLoggedIn && user ? (
//           <div className="flex items-center gap-3 cursor-pointer">
//             <button
//               className="relative text-2xl transition duration-300 hover:scale-110"
//               style={{ color: "var(--text-secondary)" }}
//             >
//               <IoNotificationsOutline />

//               <span
//                 className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full"
//                 style={{
//                   backgroundColor: "var(--primary-color)",
//                 }}
//               />
//             </button>
//             <img
//               src={`https://ui-avatars.com/api/?name=${user.username}&background=2563eb&color=fff`}
//               alt={user.username}
//               className="w-10 h-10 rounded-full border-2"
//               style={{
//                 borderColor: "var(--primary-color)",
//               }}
//             />

//             <div className="hidden sm:block">
//               <h3
//                 className="font-semibold"
//                 style={{
//                   color: "var(--text-primary)",
//                 }}
//               >
//                 {user.username}
//               </h3>

//               <p
//                 className="text-sm"
//                 style={{
//                   color: "var(--text-secondary)",
//                 }}
//               >
//                 Welcome Back
//               </p>
//             </div>
//           </div>
//         ) : (
//           <div className="hidden sm:flex items-center gap-3">
//             <Button to="/login" variant="secondary">
//               Login
//             </Button>

//             <Button to="/signup">Sign Up</Button>
//           </div>
//         )}
//       </div>

//       {/* ======================================================================
//                               SCROLL PROGRESS
//       ====================================================================== */}

//       <div
//         className="absolute bottom-0 left-0 h-1 transition-all duration-150"
//         style={{
//           width: `${progress}%`,
//           background:
//             "linear-gradient(90deg,var(--primary-color),var(--secondary-color))",
//           boxShadow: "0 0 10px rgba(20,184,166,.6)",
//         }}
//       />
//     </nav>
//   );
// }

import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMoon, FiSun, FiUser, FiLogOut } from "react-icons/fi";
import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

import Button from "../common/Button";
import { menuItems } from "../../constants/menuItems";
import { useAuth } from "../../context/AuthContext"; // 👈 استيراد useAuth

export default function Navbar({ setIsOpen, progress }) {
  /* ==========================================================================
                                   AUTH & ROUTING
  ========================================================================== */
  const { user, logout } = useAuth(); // 👈 جلب بيانات المستخدم والدالة من Context
  const navigate = useNavigate();
  const location = useLocation();

  const [darkMode, setDarkMode] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  /* ==========================================================================
                               CURRENT PAGE TITLE
  ========================================================================== */
  const currentPage =
    menuItems.find((item) => location.pathname.startsWith(item.path))?.title ||
    "Home";

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate("/");
  };

  // استخراج الاسم المتاح للمستخدم
  const displayName = user?.name || user?.username || "User";

  return (
    <nav
      className="relative h-20 flex items-center justify-between px-5 md:px-10 border-b shadow-sm z-30"
      style={{
        backgroundColor: "var(--card-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* ======================================================================
                                    LEFT
      ====================================================================== */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => setIsOpen(true)}
          className="md:hidden text-3xl"
          style={{ color: "var(--text-primary)" }}
        >
          <HiOutlineMenuAlt2 />
        </button>

        <h2
          className="text-xl md:text-2xl font-bold"
          style={{ color: "var(--text-primary)" }}
        >
          {currentPage}
        </h2>
      </div>

      {/* ======================================================================
                                    RIGHT
      ====================================================================== */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Dark Mode */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="text-2xl transition duration-300 hover:scale-110"
          style={{ color: "var(--text-secondary)" }}
        >
          {darkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* ==================================================================
                                    USER SECTION
        ================================================================== */}
        {user ? (
          <div className="relative flex items-center gap-3">
            {/* Notification Button */}
            <button
              className="relative text-2xl transition duration-300 hover:scale-110 p-1"
              style={{ color: "var(--text-secondary)" }}
            >
              <IoNotificationsOutline />
              <span
                className="absolute top-1 right-1 w-2.5 h-2.5 rounded-full"
                style={{
                  backgroundColor: "var(--primary-color)",
                }}
              />
            </button>

            {/* Profile Avatar & Name Button */}
            <div
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-3 cursor-pointer select-none"
            >
              <img
                src={
                  user.avatar ||
                  `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    displayName
                  )}&background=2563eb&color=fff`
                }
                alt={displayName}
                className="w-10 h-10 rounded-full border-2 object-cover"
                style={{
                  borderColor: "var(--primary-color)",
                }}
              />

              <div className="hidden sm:block">
                <h3
                  className="font-semibold text-sm leading-tight"
                  style={{
                    color: "var(--text-primary)",
                  }}
                >
                  {displayName}
                </h3>

                <p
                  className="text-xs"
                  style={{
                    color: "var(--text-secondary)",
                  }}
                >
                  Welcome Back
                </p>
              </div>
            </div>

            {/* User Dropdown Menu */}
            {isDropdownOpen && (
              <div
                className="absolute right-0 top-14 w-48 rounded-xl shadow-lg border py-2 z-50"
                style={{
                  backgroundColor: "var(--card-color)",
                  borderColor: "var(--border-color)",
                }}
              >
                <Link
                  to="/profile"
                  onClick={() => setIsDropdownOpen(false)}
                  className="flex items-center gap-2 px-4 py-2 text-sm transition hover:opacity-80"
                  style={{ color: "var(--text-primary)" }}
                >
                  <FiUser size={16} />
                  <span>My Profile</span>
                </Link>

                <hr
                  className="my-1 border-t"
                  style={{ borderColor: "var(--border-color)" }}
                />

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2 px-4 py-2 text-sm text-rose-500 hover:bg-rose-500/10 transition text-left cursor-pointer"
                >
                  <FiLogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        ) : (
          /* ==================================================================
                                    GUEST SECTION
          ================================================================== */
          <div className="flex items-center gap-3">
            <Button to="/login" variant="secondary">
              Login
            </Button>

            <Button to="/signup">Sign Up</Button>
          </div>
        )}
      </div>

      {/* ======================================================================
                                SCROLL PROGRESS
      ====================================================================== */}
      <div
        className="absolute bottom-0 left-0 h-1 transition-all duration-150"
        style={{
          width: `${progress}%`,
          background:
            "linear-gradient(90deg,var(--primary-color),var(--secondary-color))",
          boxShadow: "0 0 10px rgba(20,184,166,.6)",
        }}
      />
    </nav>
  );
}
