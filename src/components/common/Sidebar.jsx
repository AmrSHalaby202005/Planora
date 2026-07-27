import { MdLogout } from "react-icons/md";
import { HiOutlineX } from "react-icons/hi";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { menuItems } from "../../constants/menuItems";
import { useAuth } from "../../context/AuthContext"; // استيراد useAuth

export default function Sidebar({ isOpen, setIsOpen }) {
  const { logout } = useAuth(); // جلب دالة logout
  const navigate = useNavigate(); // جلب hook التوجيه

  // دالة التعامل مع تسجيل الخروج والتوجيه
  const handleLogout = () => {
    logout(); // مسح السيشن أو البيانات
    setIsOpen(false); // إغلاق السايد بار في الشاشات الصغيرة
    navigate("/"); // التوجيه لصفحة الهوم (أو /login حسب مسار الهوم عندك)
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      <aside
        className={`fixed top-0 left-0 z-50 h-screen w-64 border-r bg-[var(--card-color)] shadow-xl transition-all duration-500 ease-in-out flex flex-col
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        md:translate-x-0`}
        style={{
          borderColor: "var(--border-color)",
        }}
      >
        {/* Logo (Fixed) */}
        <div
          className="shrink-0 flex items-center gap-3 px-6 py-4 border-b"
          style={{ borderColor: "var(--border-color)" }}
        >
          <img src={logo} alt="Planora" className="w-10 h-10 object-contain" />

          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--primary-color)" }}
            >
              Planora
            </h2>

            <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
              Productivity
            </p>
          </div>
        </div>

        {/* Scroll Area */}
        <div className="flex-1 overflow-y-auto hide-scrollbar">
          {/* Close Button */}
          <div className="flex justify-end p-4 md:hidden">
            <button onClick={() => setIsOpen(false)}>
              <HiOutlineX size={28} style={{ color: "var(--text-primary)" }} />
            </button>
          </div>

          {/* Menu Title */}
          <div className="px-6 my-4">
            <p
              className="uppercase tracking-[3px] text-xs"
              style={{ color: "var(--text-secondary)" }}
            >
              Menu
            </p>
          </div>

          {/* Menu */}
          <ul className="px-3 space-y-2 pb-6">
            {menuItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-xl px-4 py-3 font-medium transition-all duration-300
                    ${
                      isActive
                        ? "text-white scale-[1.02]"
                        : "hover:bg-blue-50 hover:translate-x-2"
                    }`
                  }
                  style={({ isActive }) => ({
                    backgroundColor: isActive
                      ? "var(--primary-color)"
                      : "transparent",

                    color: isActive ? "#fff" : "var(--text-primary)",

                    boxShadow: isActive
                      ? "0 10px 30px rgba(37,99,235,.30)"
                      : "none",
                  })}
                >
                  <div className="flex items-center gap-3">
                    <span className="transition-transform duration-300 group-hover:rotate-6">
                      {item.icon}
                    </span>

                    <span>{item.title}</span>
                  </div>

                  {item.badge && (
                    <span className="rounded-full bg-[var(--warning-color)] px-2 py-1 text-[10px] font-semibold text-[var(--card-color)]">
                      {item.badge}
                    </span>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout (Fixed) */}
        <div
          className="shrink-0 border-t p-4"
          style={{ borderColor: "var(--border-color)" }}
        >
          <button
            onClick={handleLogout} // إسناد دالة تسجيل الخروج هنا
            className="w-full flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 hover:bg-red-50 hover:translate-x-2 text-red-500 font-medium cursor-pointer"
          >
            <MdLogout size={24} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}