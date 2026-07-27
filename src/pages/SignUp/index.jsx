import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiUser, FiMail, FiLock } from "react-icons/fi";

export default function SignUp() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all fields.");
      return;
    }

    const res = signup(formData);

    if (res.success) {
      navigate("/login");
    } else {
      setError(res.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-color)] p-4">
      <div className="w-full max-w-md bg-[var(--card-color)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-lg">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-[var(--primary-color)]">
            Create an Account
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Sign up to get started with Planora
          </p>
        </div>

        {/* Error Alert */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-50 text-red-600 text-sm border border-red-200">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Full Name
            </label>
            <div className="relative">
              <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Password
            </label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-[var(--primary-color)] text-white font-medium text-sm hover:opacity-90 transition cursor-pointer mt-2"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-[var(--primary-color)] hover:underline"
          >
            Log In
          </Link>
        </div>
      </div>
    </div>
  );
}

