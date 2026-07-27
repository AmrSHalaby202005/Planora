import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logo from "../../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden border-t mt-10"
      style={{
        backgroundColor: "var(--card-color)",
        borderColor: "var(--border-color)",
      }}
    >
      {/* Gradient Line */}
      <div
        className="absolute top-0 left-0 w-full h-[2px]"
        style={{
          background:
            "linear-gradient(to right,var(--primary-color),var(--secondary-color),var(--primary-color))",
        }}
      />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--text-primary) 1px, transparent 1px),linear-gradient(90deg,var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Blur */}
      <div
        className="absolute -left-28 top-10 w-72 h-72 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "var(--primary-color)" }}
      />

      <div
        className="absolute -right-32 bottom-0 w-80 h-80 rounded-full blur-3xl opacity-10"
        style={{ backgroundColor: "var(--secondary-color)" }}
      />

      <div className="relative z-10 container mx-auto px-6 sm:px-8 lg:px-12 py-6">
        {/* Logo */}

        <div className="flex flex-col items-center">
          <img
            src={logo}
            alt="Planora"
            className="w-16 hover:scale-110 transition duration-300"
          />

          <h2
            className="text-3xl font-bold mt-3"
            style={{ color: "var(--primary-color)" }}
          >
            Planora
          </h2>

          <p
            className="max-w-xl mt-4 text-center leading-8"
            style={{ color: "var(--text-secondary)" }}
          >
            Simplify your daily workflow with Planora. Organize your tasks,
            capture your ideas, track your progress, and achieve more with ease.
          </p>
        </div>

        {/* Social */}

        <div className="flex justify-center gap-5 mt-6">
          <SocialButton icon={<FaGithub />} />
          <SocialButton icon={<FaLinkedin />} />
        </div>

        {/* Bottom */}

        <div
          className="mt-6 pt-6 border-t gap-3"
          style={{
            borderColor: "var(--border-color)",
          }}
        >
          <p
            className="text-center"
            style={{
              color: "var(--text-secondary)",
            }}
          >
            © 2026 Planora. All rights reserved.
          </p>

          <p className="text-center" style={{ color: "var(--text-secondary)" }}>
            Designed by
            <strong style={{ color: "var(--primary-color)" }}>
              {" "}
              Amr Shalaby &{" "}
            </strong>
            Developed by
            <strong style={{ color: "var(--primary-color)" }}>
              {" "}
              Amr Shalaby & Merna & Rahma
            </strong>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ text, to }) {
  return (
    <Link
      to={to}
      className="relative font-medium transition-all duration-300 hover:-translate-y-1 after:absolute after:left-0
         after:-bottom-1 after:h-[2px] after:w-0 after:bg-current after:transition-all hover:after:w-full"
      style={{
        color: "var(--text-primary)",
      }}
    >
      {text}
    </Link>
  );
}

function SocialButton({ icon }) {
  return (
    <button
      className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl transition-all duration-300 hover:-translate-y-2 hover:scale-110"
      style={{
        backgroundColor: "var(--background-color)",
        color: "var(--primary-color)",
        boxShadow: "0 8px 25px rgba(0,0,0,.08)",
      }}
    >
      {icon}
    </button>
  );
}
