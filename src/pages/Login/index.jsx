import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FiMail, FiLock } from "react-icons/fi";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    const res = login(email, password);

    if (res.success) {
      navigate("/dashboard");
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
            Welcome Back
          </h2>
          <p className="text-sm text-[var(--text-secondary)] mt-1">
            Sign in to continue to Planora
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
          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-[var(--text-secondary)] mb-1">
              Email Address
            </label>
            <div className="relative">
              <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[var(--border-color)] bg-transparent text-sm text-[var(--text-primary)] focus:outline-none focus:border-[var(--primary-color)]"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-xs font-medium text-[var(--text-secondary)]">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-[var(--primary-color)] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
            Log In
          </button>
        </form>

        {/* Footer Link */}
        <div className="mt-6 text-center text-sm text-[var(--text-secondary)]">
          Don't have an account?{" "}
          <Link
            to="/signup"
            className="font-medium text-[var(--primary-color)] hover:underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
