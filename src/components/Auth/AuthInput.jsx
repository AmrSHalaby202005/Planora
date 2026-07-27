export default function AuthInput({
  icon,
  type = "text",
  placeholder,
  value,
  onChange,
  show,
  toggle,
}) {
  return (
    <div className="relative flex items-center">
      {icon && (
        <span className="absolute left-4 text-gray-400 text-lg">{icon}</span>
      )}
      
      {/* ⚠️ أهم حاجة نمرر الـ value والـ onChange هنا */}
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
        onChange={onChange}
        className="w-full h-12 pl-11 pr-11 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:border-[var(--primary-color)] transition"
      />

      {toggle && (
        <button
          type="button"
          onClick={toggle}
          className="absolute right-4 text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          {/* يمكنك استخدام أيقونة العين هنا */}
          {show ? "👁️" : "👁️‍🗨️"}
        </button>
      )}
    </div>
  );
}
