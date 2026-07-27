import { Link } from "react-router-dom";

export default function Button({ children, to, variant = "primary" }) {
  const base =
    "inline-block px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:-translate-y-1";

  if (variant === "secondary") {
    return (
      <Link
        to={to}
        className={base}
        style={{
          color: "var(--text-primary)",
          border: "1px solid var(--border-color)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.border = "1px solid var(--primary-color)";
          e.currentTarget.style.backgroundColor = "var(--background-color)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.border = "1px solid var(--border-color)";
          e.currentTarget.style.backgroundColor = "transparent";
        }}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`${base} text-white`}
      style={{
        backgroundColor: "var(--primary-color)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(37,99,235,0.6)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {children}
    </Link>
  );
}
